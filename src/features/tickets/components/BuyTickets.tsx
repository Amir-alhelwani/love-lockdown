import { GetRooms } from "@/types/escapeRooms";
import TicketType from "./TicketType";
import TicketModal from "./TicketModal";
import Map from "@/components/Map";

const BuyTickets = ({ room }: { room: GetRooms }) => {
  return (
    <section className="max-w-5xl px-4 py-12 mx-auto">
      <div className="text-lg mb-5 flex flex-col justify-start items-center sm:items-start">
        <h2 className="text-2xl mb-2">Time & Location</h2>
        <p>27 Jan 2024, 19:00 – 22:30</p>
        <p>{room.room.location}</p>
      </div>
      <div>
        <h2 className="text-2xl mb-2 pb-3">Tickets</h2>
        <TicketType
          fee="€3.75"
          price="€69.00"
          description="Get matched with a partner who suits you perfectly by completing our Online Match Form. Thanks to advanced AI technology, we ensure you an accurate match during your escape room adventure."
          type="smart"
        />
        <TicketType
          fee="€3.50"
          price="€59.00"
          description="Be surprised! With the Regular Ticket you will be randomly matched with another participant for your escape room experience. It promises to be an unpredictable and exciting adventure."
          type="Regular"
        />
        <TicketType
          fee="€7.25"
          price="€99.00"
          description="Bring a friend to Love Lockdown and double the fun! With the Premium Ticket you can participate In the event together with someone you know. Please note that this ticket is twice the standard price."
          type="premium"
        />
        <TicketModal />
      </div>
      <Map lat={parseFloat(room.room.lat)} lng={parseFloat(room.room.long)} />
    </section>
  );
};

export default BuyTickets;
