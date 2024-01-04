import LoadingPage from "@/components/ui/LoadingPage";
import useUserStore from "@/features/auth/useUserStore";
import CreatePersonalPreferences from "@/features/preferences/personal/components/CreatePersonalPreferences";
import UpdatePersonalPreferences from "@/features/preferences/personal/components/UpdatePersonalPreferences";
import getPersonalPreferences from "@/features/preferences/personal/services/getPersonalPreferences";
import { useQuery } from "@tanstack/react-query";

const PersonalPreferences = () => {
  const user = useUserStore((state) => state.user);

  const {
    data,
    isPending: isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-personal-preferences", user?.id],
    queryFn: getPersonalPreferences,
  });
  if (isLoading) return <LoadingPage />;
  if (isError) return <>error</>;
  if (!data) return <CreatePersonalPreferences />;
  return <UpdatePersonalPreferences data={data} />;
};

export default PersonalPreferences;
