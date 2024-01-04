import axiosInstance from "@/axios";
import { User } from "./login";

type Response = {
  data: User;
};

const profile = async () => {
  const { data } = await axiosInstance.get<Response>("/api/Users/GetUser");

  return data.data;
};

export default profile;
