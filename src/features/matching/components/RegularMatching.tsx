import LoadingPage from "@/components/ui/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import getRegularMatching from "../services/getRegularMatching";
import UsersContainer from "./UsersContainer";
import useUserStore from "@/features/auth/useUserStore";
import { AxiosError } from "axios";

const RegularMatching = () => {
  const user = useUserStore((state) => state.user);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["regular-matching", user?.id],
    queryFn: getRegularMatching,
  });

  if (isPending) return <LoadingPage />;
  if (isError) {
    const err = error as AxiosError;
    if (err?.response?.status === 404)
      return (
        <div className="flex justify-center items-center">
          <h2 className="text-4xl capitalize">The card has expired</h2>
        </div>
      );
    else {
      return <>error</>;
    }
  }
  if (typeof data === "string")
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-4xl capitalize">The card has expired</h2>
      </div>
    );
  return <UsersContainer user={data} />;
};

export default RegularMatching;
