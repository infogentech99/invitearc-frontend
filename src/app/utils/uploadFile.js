import axios from "axios";
import config from "../../config/config";

export const uploadFile = async (
  file,
  folder = "invitearc/files",
  resourceType = "image"
) => {
  const formData = new FormData();

  // Backend image field expect karta hai
  formData.append("image", file);

  formData.append("folder", folder);
  formData.append("resourceType", resourceType);

  const { data } =await axios.post(
    `${config.api.baseUrl}/api/upload/event-image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  return data?.image || data?.url || data?.secureUrl || data?.secure_url;
};