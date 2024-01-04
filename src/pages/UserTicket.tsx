import LoadingPage from "@/components/ui/LoadingPage";
import { buttonVariants } from "@/components/ui/button";
import useUserStore from "@/features/auth/useUserStore";
import UserRoom from "@/features/matching/components/UserRoom";
import getTicket from "@/features/tickets/services/getTicket";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const UserTicket = () => {
  const user = useUserStore((state) => state.user);

  const { data, isPending, isError } = useQuery({
    queryKey: ["user-ticket", user?.id],
    queryFn: getTicket,
  });
  if (isPending) return <LoadingPage />;
  if (isError) {
    return <>error</>;
  }
  if (!data)
    return (
      <section className="max-w-7xl px-4 mx-auto min-h-100vh flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl capitalize">buy ticket</h1>
          <p className="w-3/4 mx-auto text-center text-lg capitalize">
            please go to escape rooms page to buy a ticket
          </p>
          <Link
            className={buttonVariants({ className: "capitalize" })}
            to="/escape-rooms"
          >
            buy ticket
          </Link>
        </div>
      </section>
    );

  return (
    <UserRoom roomId={data.roomId} type={data.type} date={data.bookingDate} />
  );
};

export default UserTicket;
