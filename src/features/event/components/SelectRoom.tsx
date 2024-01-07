import { buttonVariants } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SelectRoom = () => {
  // const user = useUserStore((state) => state.user);
  // const setRoomId = useEventStore((state) => state.setRoomId);
  // const setContent = useEventStore((state) => state.setContent);
  // const roomId = useEventStore((state) => state.roomId);
  // const { data, isPending, isError } = useQuery({
  //   queryKey: ["rooms"],
  //   queryFn: getRooms,
  // });
  // if (isPending) return <LoadingPage />;
  // if (isError) return <>error</>;
  return (
    <>
      <DialogHeader>
        <DialogTitle className="capitalize font-bold text-3xl">
          select room
        </DialogTitle>
        <DialogDescription className="capitalize">
          please select .......
        </DialogDescription>
      </DialogHeader>
      <div className="w-full">
        <div className="flex flex-col justify-center gap-4 items-start">
          {/* <ScrollArea className="w-full h-[250px] mb-2 px-2"> */}
            <a
              href="https://degoudenkooi.be/"
              target="_blank"
              className={buttonVariants({
                className:
                  "w-full !px-10 max-sm:!flex-1 !text-xl !py-6 capitalize font-title-font font-normal",
              })}
            >
              De gouden Kooi
            </a>
            <a
              href="https://koezio.co/nl/bruxelles/landing/elite-agents-missie-bij-koezio-brussel/"
              target="_blank"
              className={buttonVariants({
                className:
                  "w-full !px-10 max-sm:!flex-1 !text-xl !py-6 capitalize font-title-font font-normal",
              })}
            >
              Koezio Brussel
            </a>
            <a
              href="https://www.exitgamesbelgium.be/escape-room-antwerpen"
              target="_blank"
              className={buttonVariants({
                className:
                  "w-full !px-10 max-sm:!flex-1 !text-xl !py-6 capitalize font-title-font font-normal",
              })}
            >
              The Exit Game
            </a>
          {/* </ScrollArea> */}
          {/* <Button
              onClick={() => {
                if (!user) setContent("login");
                else setContent("date");
              }}
              className="capitalize"
            >
              next
            </Button> */}
        </div>
      </div>
    </>
  );
};

export default SelectRoom;
