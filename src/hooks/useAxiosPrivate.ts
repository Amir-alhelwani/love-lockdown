import axiosInstance from "@/axios";
import useUserStore from "@/features/auth/useUserStore";
import { AxiosInstance } from "axios";
import { useEffect } from "react";
export default function useAxiosPrivate(): AxiosInstance {
  const token = useUserStore((state) => state.token);
  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
    };
  }, [token]);

  return axiosInstance;
}
