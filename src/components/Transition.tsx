import { motion } from "framer-motion";
import { FC, LazyExoticComponent, Suspense } from "react";

type Props = {
  Page: LazyExoticComponent<FC<unknown>>;
};
const Transition: FC<Props> = ({ Page }) => {
  return (
    <>
      <Suspense
        fallback={<p className="mt-[--nav-height] bg-papaya-whip">loading</p>}
      >
        <Page />
      </Suspense>
      <motion.div
        className="fixed top-0 z-[500] left-0 cursor-default w-full h-screen bg-lavender-gray origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed z-[500] top-0 cursor-default left-0 w-full h-screen bg-lavender-gray origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
