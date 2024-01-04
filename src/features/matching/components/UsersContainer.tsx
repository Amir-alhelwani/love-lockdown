import { User } from "@/features/auth/services/login";
import UserCard from "./UserCard";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import getUsersTicket from "../services/getUsersTicket";
import LoadingPage from "@/components/ui/LoadingPage";
import useUserStore from "@/features/auth/useUserStore";

type PropsType = {
  user: User;
};

const UsersContainer: FC<PropsType> = ({ user }) => {
  const userId = useUserStore((state) => state.user);
  const { data, isPending, isError } = useQuery({
    queryKey: ["users-ticket", userId?.id],
    queryFn: getUsersTicket,
  });
  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <UserCard
        key={user.id}
        user={user}
        type={data
          .filter((userTicket) => userTicket.receiverId === user.id)
          .map((user) => user.ticketStatus)}
      />
    </div>
  );
};

export default UsersContainer;
