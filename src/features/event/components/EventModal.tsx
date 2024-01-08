import { Dialog, DialogContent } from "@/components/ui/dialog";
import useEventStore from "../services/useEventStore";
import SelectRoom from "./SelectRoom";
import SelectDate from "./SelectDate";
import RequiredAuth from "./RequiredAuth";

const EventModal = () => {
  const openModal = useEventStore((state) => state.openModal);
  const setRoomId = useEventStore((state) => state.setRoomId);
  const setContent = useEventStore((state) => state.setContent);
  const content = useEventStore((state) => state.content);
  const setOpenModal = useEventStore((state) => state.setOpenModal);
  const closeModal = () => {
    setOpenModal(false);
    setRoomId(-1);
    setContent("room");
  };
  return (
    <Dialog open={openModal}>
      <DialogContent
        onEscapeKeyDown={closeModal}
        onPointerDownOutside={closeModal}
        className="sm:max-w-[425px] overflow-hidden"
      >
        {content === "room" ? (
          <SelectRoom />
        ) : content === "date" ? (
          <SelectDate />
        ) : (
          <RequiredAuth />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
