import LoadingPage from "@/components/ui/LoadingPage";
import getRoom from "@/features/escape-rooms/services/getRoom";
import { useQuery } from "@tanstack/react-query";
import PremiumMatching from "./PremiumMatching";
import RegularMatching from "./RegularMatching";
import SmartMatching from "./SmartMatching";

const UserRoom = ({
  roomId,
  type,
  date,
}: {
  roomId: number;
  type: string;
  date: string;
}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["room", roomId],
    queryFn: () => getRoom(roomId),
  });

  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  if (!data) return <>error</>;
  return (
    <>
      <section>
        <div className="bg-black/10">
          <div className="max-w-7xl px-4 mx-auto py-14">
            <div className="flex flex-col justify-center gap-6 items-center w-11/12 sm:w-1/2 mx-auto text-center">
              <h1 className="text-6xl">{data.room.roomName}</h1>
              <p className="text-base">{data.room.description}</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl px-4 mx-auto relative">
          <div className="absolute top-0 -left-1/2 w-[calc(200%_+_4rem)] h-1/2 bg-black/10 -z-1" />
          <img
            className="w-11/12 h-[500px] object-contain mx-auto"
            src={data.images[0]}
            alt=""
          />
        </div>
      </section>
      <section className="max-w-7xl px-4 py-12 mx-auto">
        <div className="text-lg mb-5">
          <h2 className="text-2xl mb-2">Time & Location</h2>
          <p>{date}</p>
          <p>{data.room.location}</p>
        </div>
        <div className="text-lg mb-5">
          <h2 className="text-2xl mb-2">Ticket Type</h2>
          <p>{type}</p>
        </div>
        <div>
          <h2 className="text-2xl mb-2 pb-3">
            {type !== "premium" ? "Matchings" : ""}
          </h2>
          {type === "Regular" ? (
            <RegularMatching />
          ) : type === "smart" ? (
            <SmartMatching />
          ) : (
            <PremiumMatching />
          )}
        </div>
      </section>
    </>
  );
};

export default UserRoom;
