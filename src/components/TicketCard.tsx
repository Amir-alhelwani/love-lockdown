import { FC } from "react";
import { Link } from "react-router-dom";

type PropsType = {
  ticket: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const TicketCard: FC<PropsType> = ({ ticket }) => {
  return (
    <Link to="/event" className="w-[300px] px-4 flex flex-col justify-center items-center">
      <div className="h-[300px] flex justify-end items-center">
        <img
          className="w-full h-full object-cover"
          src={ticket.image}
          alt={ticket.title}
        />
      </div>
      <div className="w-full bg-papaya-whip/60 flex flex-col justify-start items-center -translate-y-1/2">
        <h3 className="w-full text-xl capitalize">{ticket.title}</h3>
        <p title={ticket.description} className="pt-0 sm:pt-4 line-clamp-3">
          {ticket.description}
        </p>
      </div>
    </Link>
  );
};

export default TicketCard;
