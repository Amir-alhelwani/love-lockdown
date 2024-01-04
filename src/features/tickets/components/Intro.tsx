import { GetRooms } from "@/types/escapeRooms";
const Intro = ({ room }: { room: GetRooms }) => {
  return (
    <section>
      <div className="bg-black/10">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex flex-col justify-center gap-6 items-center w-11/12 sm:w-1/2 mx-auto text-center">
            <h1 className="text-6xl">{room.room.roomName}</h1>
            <p className="text-base">{room.room.description}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 mx-auto relative">
        <div className="absolute top-0 -left-1/2 w-[calc(200%_+_4rem)] h-1/2 bg-black/10 -z-1" />
        <img
          className="w-11/12 h-[500px] object-contain mx-auto"
          src={room.images[0]}
          alt=""
        />
      </div>
    </section>
  );
};

export default Intro;
