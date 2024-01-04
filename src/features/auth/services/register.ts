import axiosInstance from "@/axios";
import { LoginResponse } from "./login";

type Body = {
  email: string;
  password: string;
  Name: string;
  image: File;
  PhoneNumber: string;
};

const signUp = async (body: Body) => {
  await axiosInstance.post("/api/Users/Register", body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  const { data } = await axiosInstance.post<LoginResponse>(
    "/api/Users/LogIn",
    body
  );
  return data.data;
};

export default signUp;
