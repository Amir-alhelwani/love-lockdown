import axiosInstance from "@/axios";

const updatePartnerPreferences = async (body: unknown) => {
  await axiosInstance.put(
    "/api/Preferences/UpdatePotentialPartnerPreferences",
    body
  );
};

export default updatePartnerPreferences;
