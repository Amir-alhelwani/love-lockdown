import axiosInstance from "@/axios";
import { Blog } from "@/types/blog";

type Response = {
  success: boolean;
  data: Blog[];
};

const getBlog = async () => {
  const { data } = await axiosInstance.get<Response>("api/Blogs/GetBlogs");
  return data.data;
};

export default getBlog;
