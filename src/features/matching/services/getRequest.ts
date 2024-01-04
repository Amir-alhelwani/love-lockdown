import axiosInstance from "@/axios";
import { User } from "@/features/auth/services/login";

type Response = {
  success: boolean;
  data: {
    item1: {
      id: number;
      senderId: number;
      receiverId: number;
      dateTime: string;
    };
    item2: User;
  }[];
};

const getRequest = async () => {
  const { data } = await axiosInstance.get<Response>(
    "/api/Requests/GetReceivedRequests"
  );
  return data.data;
};

export default getRequest;
