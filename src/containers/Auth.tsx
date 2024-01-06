import Login from "@/components/Login";
import Register from "@/components/Register";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useAuthStore from "@/features/auth/useAuthStore";
import { AnimatePresence } from "framer-motion";
import { FaCircleUser } from "react-icons/fa6";

const Auth = () => {
  const direction = useAuthStore((state) => state.direction);
  const content = useAuthStore((state) => state.content);
  const openModal = useAuthStore((state) => state.openModal);
  const setOpenModal = useAuthStore((state) => state.setOpenModal);
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        variant="link"
        className="flex justify-center items-center px-1 gap-1 text-xl capitalize"
      >
        <FaCircleUser className="text-2xl" />
        <span className="font-title-font">login</span>
      </Button>
      <Dialog open={openModal}>
        <DialogContent
          onEscapeKeyDown={() => setOpenModal(false)}
          onPointerDownOutside={() => setOpenModal(false)}
          className="sm:max-w-[425px] overflow-hidden"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {content === "login" ? <Login /> : null}
            {content === "register" ? <Register /> : null}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Auth;
