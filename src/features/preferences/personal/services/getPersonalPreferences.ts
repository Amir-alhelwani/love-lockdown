import axiosInstance from "@/axios";
import { PersonalPreferences } from "@/types/personalPreferences";

type Response = {
  success: boolean;
  data: null | PersonalPreferences;
};

const getPersonalPreferences = async () => {
  const { data } = await axiosInstance.get<Response>(
    "/api/Preferences/GetPersonalPreferences"
  );
  return data.data;
};

export default getPersonalPreferences;
