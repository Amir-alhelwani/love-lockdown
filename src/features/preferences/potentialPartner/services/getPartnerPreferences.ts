import axiosInstance from "@/axios";
import { PartnerPreferences } from "@/types/partnerPreferences";

type Response = {
  success: boolean;
  data: null | PartnerPreferences;
};

const getPartnerPreferences = async () => {
  const { data } = await axiosInstance.get<Response>(
    "/api/Preferences/GetPotentialPartnerPreferences"
  );
  return data.data;
};

export default getPartnerPreferences;
