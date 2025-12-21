// Upload image to Cloudinary
export const uploadImageToCloudinary = async (file) => {
  const cloudName = (
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dorx9mmpv"
  ).trim();
  const uploadPreset = (
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "unsigned_preset"
  ).trim();

  console.log(
    "Cloudinary config:",
    { cloudName, uploadPreset },
    "env preset:",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary configuration is missing");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Cloudinary error response:", errorData);
      throw new Error(
        errorData.error?.message ||
          `Upload failed with status ${response.status}`
      );
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};
