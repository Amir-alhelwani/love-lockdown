import axiosInstance from "@/axios";

const createPartnerPreferences = async (body: unknown) => {
  await axiosInstance.post(
    "/api/Preferences/AddPotentialPartnerPreferences",
    body
  );
};

export default createPartnerPreferences;
