import axios from "axios";
import config from "../../config/config.js";

export const uploadImage = async (file, folder = "invitearc/images") => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("image", file);
  formData.append("folder", folder);

  const { data } = await axios.post(
    `${config.api.baseUrl}/api/upload/event-image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  return data.image;
};