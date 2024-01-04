import axiosInstance from "@/axios";

const updatePersonalPreferences = async (body: unknown) => {
  await axiosInstance.put("/api/Preferences/UpdatePersonalPreferences", body);
};

export default updatePersonalPreferences;
