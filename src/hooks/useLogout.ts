import useUserStore from "@/features/auth/useUserStore";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const navigate = useNavigate();
  const logout = () => {
    setUser(undefined);
    setToken("");
    navigate("/");
    Cookies.remove("token");
  };

  return logout;
};

export default useLogout;
