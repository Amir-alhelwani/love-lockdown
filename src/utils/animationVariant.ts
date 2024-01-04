import { Variants } from "framer-motion";

export const SliderVariant: Variants = {
  initial: (dir: number) => {
    return {
      x: dir === 1 ? "-20%" : "20%",
      opacity: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (dir: number) => {
    return {
      x: dir === 1 ? "20%" : "-20%",
      opacity: 0.5,
      transition: { duration: 0.1 },
    };
  },
};
