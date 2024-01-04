import LoadingPage from "@/components/ui/LoadingPage";
import { buttonVariants } from "@/components/ui/button";
import useUserStore from "@/features/auth/useUserStore";
import getPersonalPreferences from "@/features/preferences/personal/services/getPersonalPreferences";
import getPartnerPreferences from "@/features/preferences/potentialPartner/services/getPartnerPreferences";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const SmartTicketError = () => {
  const user = useUserStore((state) => state.user);
  const {
    data: partner,
    isPending: isLoadingPartner,
    isError: isErrorPartner,
  } = useQuery({
    queryKey: ["partner-preferences", user?.id],
    queryFn: getPartnerPreferences,
  });
  const {
    data: personal,
    isPending: isLoadingPersonal,
    isError: isErrorPersonal,
  } = useQuery({
    queryKey: ["my-personal-preferences", user?.id],
    queryFn: getPersonalPreferences,
  });
  if (isLoadingPartner) return <LoadingPage />;
  if (isErrorPartner) return <>error</>;
  if (isLoadingPersonal) return <LoadingPage />;
  if (isErrorPersonal) return <>error</>;
  return (
    <div className="w-full py-8 text-center">
      <h2 className="text-2xl py-4 capitalize">
        Please complete your account before creating a ticket
      </h2>
      <div className="flex justify-center items-center gap-4">
        {!personal ? (
          <Link className={buttonVariants()} to="/user/preferences">
            Personal Preferences
          </Link>
        ) : null}
        {!partner ? (
          <Link className={buttonVariants()} to="/user/partner">
            Partner Preferences
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default SmartTicketError;
