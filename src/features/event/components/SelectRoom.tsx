import LoadingPage from "@/components/ui/LoadingPage";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import useUserStore from "@/features/auth/useUserStore";
import getRooms from "@/features/escape-rooms/services/getRooms";
import useToast from "@/hooks/useToast";
import { useQuery } from "@tanstack/react-query";
import useEventStore from "../services/useEventStore";

const SelectRoom = () => {
  const user = useUserStore((state) => state.user);
  const toast = useToast();
  const setRoomId = useEventStore((state) => state.setRoomId);
  const setContent = useEventStore((state) => state.setContent);
  const roomId = useEventStore((state) => state.roomId);
  const { data, isPending, isError } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  return (
    <>
      <DialogHeader>
        <DialogTitle className="capitalize pl-2 font-bold text-3xl">
          select room
        </DialogTitle>
      </DialogHeader>
      <div className="w-full">
        <div className="flex flex-col justify-center gap-4 items-start">
          <ScrollArea className="w-full h-[190px] mb-2 px-2">
            {data.map((room) => (
              <button
                key={room.room.id}
                onClick={() => setRoomId(room.room.id)}
                className={`mb-5 py-2 border border-black w-full rounded-lg ${
                  room.room.id === roomId
                    ? "bg-black text-papaya-whip"
                    : "bg-transparent"
                }`}
              >
                {room.room.roomName}
              </button>
            ))}
          </ScrollArea>
          <Button
            onClick={() => {
              if (roomId === -1) {
                toast("Please select the escape room to continue.")
                return;
              }
              if (!user) setContent("login");
              else setContent("date");
            }}
            className="capitalize ml-2"
          >
            next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectRoom;
