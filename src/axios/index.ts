import baseUrl from "@/constants/baseUrl";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
