import { FC } from "react";
import { IconType } from "react-icons";

type PropsType = {
  onClick?: () => void;
  Icon: IconType;
};

const SliderButton: FC<PropsType> = ({ onClick, Icon }) => {
  return (
    <button className="text-black text-5xl cursor-pointer" onClick={onClick}>
      <Icon />
    </button>
  );
};

export default SliderButton;
