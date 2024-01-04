import LoadingPage from "@/components/ui/LoadingPage";
import getRoom from "@/features/escape-rooms/services/getRoom";
import BuyTickets from "@/features/tickets/components/BuyTickets";
import Intro from "@/features/tickets/components/Intro";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Tickets = () => {
  const { id } = useParams();
  const { data, isPending, isError } = useQuery({
    queryKey: ["room", id],
    queryFn: () => getRoom(parseInt(id!)),
  });
  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  if (!data) return <>error</>;
  return (
    <>
      <Intro room={data} />
      <BuyTickets room={data} />
    </>
  );
};

export default Tickets;
