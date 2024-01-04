import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useUserStore from "@/features/auth/useUserStore";
import axiosInstance from "@/axios";
import { AxiosError } from "axios";
import useToast from "@/hooks/useToast";

const PersistLogin = () => {
  const setToken = useUserStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);
  const toast = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyUser() {
      const token = Cookies.get("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await axiosInstance.get("/api/Users/GetUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setToken(token);
        setUser(response.data.data);
      } catch (err) {
        const error = err as AxiosError;
        if (!error.response) {
          toast("error");
        } else if (error.response.status === 401) {
          Cookies.remove("token");
          toast(
            "Oops, your session has timed out! Please log in again to continue using our application."
          );
        }
      } finally {
        setLoading(false);
      }
    }
    verifyUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? <>loading...</> : <Outlet />;
};

export default PersistLogin;
