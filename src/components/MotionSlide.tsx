import { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { SliderVariant } from "../utils/animationVariant";

type PropsType = {
  direction: 1 | -1;
  children: ReactNode;
};
const MotionSlide: FC<PropsType> = ({ direction, children }) => {
  return (
    <motion.div
      variants={SliderVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden"
      custom={direction}
    >
      {children}
    </motion.div>
  );
};

export default MotionSlide;
