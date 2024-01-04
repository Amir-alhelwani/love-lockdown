import LoadingPage from "@/components/ui/LoadingPage";
import useUserStore from "@/features/auth/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import getSmartMatching from "../services/getSmartMatching";
import SmartContainer from "./SmartContainer";
import SmartTicketError from "./SmartTicketError";
import { SmartTicket } from "@/types/ticket";

const SmartMatching = () => {
  const user = useUserStore((state) => state.user);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["smart-matching", user?.id],
    queryFn: getSmartMatching,
  });

  if (isPending) return <LoadingPage />;
  if (isError) {
    const axiosError = error as AxiosError<Record<string, string>>;
    if (!axiosError.response) return <>error</>;
    if (axiosError.response.data.message === "this user didnt fill the forms") {
      return <SmartTicketError />;
    }
  }
  if (!data) return <>empty</>;
  return <SmartContainer users={data as SmartTicket[]} />;
};

export default SmartMatching;
