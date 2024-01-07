import { Dialog, DialogContent } from "@/components/ui/dialog";
import useEventStore from "../services/useEventStore";
import SelectRoom from "./SelectRoom";
import SelectDate from "./SelectDate";

const EventModal = () => {
  const openModal = useEventStore((state) => state.openModal);
  const content = useEventStore((state) => state.content);
  const setOpenModal = useEventStore((state) => state.setOpenModal);

  return (
    <Dialog open={openModal}>
      <DialogContent
        onEscapeKeyDown={() => setOpenModal(false)}
        onPointerDownOutside={() => setOpenModal(false)}
        className="sm:max-w-[425px] overflow-hidden"
      >
        {content === "room" ? (
          <SelectRoom />
        ) : content === "date" ? (
          <SelectDate />
        ) : (
          <p>ddd</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
