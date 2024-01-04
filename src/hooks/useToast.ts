import { toast, TypeOptions, ToastPosition, Theme } from "react-toastify";

const useToast = (autoClose = 3000, pauseOnHover = false) => {
  const showToast = (
    message: string,
    type: TypeOptions = "error",
    position: ToastPosition = "bottom-left",
    theme: Theme = "dark"
  ) => {
    toast(message, {
      autoClose: autoClose,
      type: type,
      position: position,
      pauseOnFocusLoss: false,
      pauseOnHover: pauseOnHover,
      draggable: true,
      theme: theme,
    });
  };
  return showToast;
};

export default useToast;
