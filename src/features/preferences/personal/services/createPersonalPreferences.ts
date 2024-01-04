import axiosInstance from "@/axios";

const createPersonalPreferences = async (body: unknown) => {
  await axiosInstance.post("/api/Preferences/AddPersonalPreferences", body);
};

export default createPersonalPreferences;
