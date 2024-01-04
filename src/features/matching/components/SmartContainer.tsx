import { SmartTicket } from "@/types/ticket";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import getUsersTicket from "../services/getUsersTicket";
import LoadingPage from "@/components/ui/LoadingPage";
import SmartCard from "./SmartCard";
import useUserStore from "@/features/auth/useUserStore";

type PropsType = {
  users: SmartTicket[];
};

const SmartContainer: FC<PropsType> = ({ users }) => {
  const userId = useUserStore((state) => state.user);

  const { data, isPending, isError } = useQuery({
    queryKey: ["users-ticket", userId?.id],
    queryFn: getUsersTicket,
  });
  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  if (users.length === 0)
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-4xl capitalize">no users</h2>
      </div>
    );
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {users.map((user) => (
        <SmartCard
          key={user.user.id}
          user={user}
          type={data
            .filter((userTicket) => userTicket.receiverId === user.user.id)
            .map((user) => user.ticketStatus)}
        />
      ))}
    </div>
  );
};

export default SmartContainer;
