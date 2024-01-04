import LoadingPage from "@/components/ui/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import getRooms from "../services/getRooms";
import RoomCard from "./RoomCard";
const TicketTypes = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  return (
    <section className="bg-[rgb(235,233,244)] p-4 sm:p-10">
      <div className="max-w-7xl bg-lavender-gray p-6 mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {data.map((room) => (
            <RoomCard key={room.room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketTypes;
