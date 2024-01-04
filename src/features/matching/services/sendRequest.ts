import axiosInstance from "@/axios";

const sendRequest = async (id: number) => {
  await axiosInstance.post(`/api/Requests/SendRequest/${id}`);
};

export default sendRequest;
