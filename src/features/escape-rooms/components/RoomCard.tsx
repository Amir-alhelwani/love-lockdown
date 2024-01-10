import { GetRooms } from "@/types/escapeRooms";
import { Link } from "react-router-dom";

const RoomCard = ({ room }: { room: GetRooms }) => {
  return (
    <Link
      to={`${room.room.id}`}
      className="w-[300px] px-4 flex flex-col justify-center items-center"
    >
      <div className="h-[300px] flex justify-end items-center">
        <img
          className="w-full h-full object-cover"
          src={room.images[0]}
          alt={room.room.roomName}
        />
      </div>
      <div className="w-full rounded-t-lg bg-lavender-gray/60 flex flex-col justify-start items-center -translate-y-1/3">
        <h3 className="w-full pl-3 pt-1 text-xl">{room.room.roomName}</h3>
        <p title={room.room.description} className="pt-4 line-clamp-3">
          {room.room.description}
        </p>
      </div>
    </Link>
  );
};

export default RoomCard;
