import axiosInstance from "@/axios";
import editProfileSchema from "@/schema/editProfileSchema";
import { User } from "./login";

type Response = {
  data: User;
};

const editProfile = async (body: editProfileSchema) => {
  const { data } = await axiosInstance.post<Response>(
    "/api/Users/Update",
    body,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.data;
};

export default editProfile;
