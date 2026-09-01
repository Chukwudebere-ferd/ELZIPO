const SPOTIFY_API = "https://api.spotify.com/v1/me/player/currently-playing";

let accessToken = null;
let tokenExpiry = 0;

async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const response = await fetch("/api/spotify/token");
  if (!response.ok) throw new Error("Failed to get access token");

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + data.expires_in * 1000 - 60000;
  return accessToken;
}

export async function getNowPlaying() {
  try {
    const token = await getAccessToken();
    const response = await fetch(SPOTIFY_API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204 || response.status > 400) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Spotify API error");
    }

    const data = await response.json();

    if (!data || !data.item) {
      return null;
    }

    return {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((a) => a.name).join(", "),
      album: data.item.album.name,
      albumImageUrl: data.item.album.images[0]?.url,
      songUrl: data.item.external_urls.spotify,
      progress: data.progress_ms,
      duration: data.item.duration_ms,
    };
  } catch (error) {
    console.error("Error fetching now playing:", error);
    return null;
  }
}
