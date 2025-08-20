
export const uploadToCloudinary = async (file, cloudName, uploadPreset) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/$duisibyte/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url; // URL to use in Firestore
};
