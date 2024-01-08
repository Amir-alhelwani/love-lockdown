import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useEventStore from "../services/useEventStore";
import useAuthStore from "@/features/auth/useAuthStore";

const RequiredAuth = () => {
  const setRoomId = useEventStore((state) => state.setRoomId);
  const setOpenModal = useEventStore((state) => state.setOpenModal);
  const setContent = useEventStore((state) => state.setContent);
  const setOpenAuthModal = useAuthStore((state) => state.setOpenModal);
  const setAuthContent = useAuthStore((state) => state.setContent);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="capitalize font-bold text-2xl mb-2">
          Sign in required
        </DialogTitle>
        <DialogDescription>
          Please sign in first to be able to proceed with room selection
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex justify-center items-center mt-4">
        <Button
          onClick={() => {
            setAuthContent("login");
            setOpenAuthModal(true);
            setOpenModal(false);
          }}
          size="full"
          className="capitalize"
        >
          sign in
        </Button>
        <Button
          onClick={() => {
            setRoomId(-1);
            setContent("room");
            setOpenModal(false);
          }}
          size="full"
          className="capitalize"
        >
          cancel
        </Button>
      </DialogFooter>
    </>
  );
};

export default RequiredAuth;
