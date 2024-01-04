import axiosInstance from "@/axios";
import authSchema from "@/schema/authSchema";

export type User = {
  id: number;
  email: string;
  imageUrl: string;
  name: string;
  phoneNumber: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
};

const login = async (body: authSchema) => {
  const { data } = await axiosInstance.post<LoginResponse>("/api/Users/LogIn", body);
  return data.data;
};

export default login;
