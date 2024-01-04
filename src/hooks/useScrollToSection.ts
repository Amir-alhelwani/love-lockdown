import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = (id: string) => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash === `#${id}`) {
      const section = document.getElementById(id);

      window.scrollTo({ behavior: "smooth", top: (section?.offsetTop || 0) - 75 });
    }
  }, [hash, id]);
  return null;
};

export default useScrollToSection;
