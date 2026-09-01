const CLIENT_ID = "YOUR_CLIENT_ID";
const CLIENT_SECRET = "YOUR_CLIENT_SECRET";
const CODE = "THE_CODE_FROM_URL";

async function getToken() {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: CODE,
      redirect_uri: "http://localhost:5173/callback",
    }),
  });

  const data = await response.json();
  console.log("Add these to Vercel/Netlify env vars:");
  console.log("SPOTIFY_CLIENT_ID=" + CLIENT_ID);
  console.log("SPOTIFY_CLIENT_SECRET=" + CLIENT_SECRET);
  console.log("SPOTIFY_REFRESH_TOKEN=" + data.refresh_token);
}

getToken();
