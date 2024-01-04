import axiosInstance from "@/axios";
import { User } from "@/features/auth/services/login";

type Response = {
  success: boolean;
  data: User | string;
};

const getRegularMatching = async () => {
  const { data } = await axiosInstance.get<Response>(
    "/api/Matching/RandomPartner"
  );
  return data.data;
};

export default getRegularMatching;
