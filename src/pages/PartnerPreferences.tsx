import LoadingPage from "@/components/ui/LoadingPage";
import useUserStore from "@/features/auth/useUserStore";
import CreatePartnerPreferences from "@/features/preferences/potentialPartner/components/CreatePartnerPreferences";
import UpdatePartnerPreferences from "@/features/preferences/potentialPartner/components/UpdatePartnerPreferences";
import getPartnerPreferences from "@/features/preferences/potentialPartner/services/getPartnerPreferences";
import { useQuery } from "@tanstack/react-query";

const PartnerPreferences = () => {
  const user = useUserStore((state) => state.user);
  const {
    data,
    isPending: isLoading,
    isError,
  } = useQuery({
    queryKey: ["partner-preferences", user?.id],
    queryFn: getPartnerPreferences,
  });
  if (isLoading) return <LoadingPage />;
  if (isError) return <>error</>;
  if (!data) return <CreatePartnerPreferences />;
  return <UpdatePartnerPreferences data={data} />;
};

export default PartnerPreferences;
