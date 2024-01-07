import { Button } from "@/components/ui/button";
import TicketType from "./TicketType";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import EventModal from "./EventModal";

const BuyTickets = () => {
  return (
    <section className="max-w-3xl px-4 py-12 mx-auto">
      <div className="text-lg mb-5 flex flex-col justify-start items-center sm:items-start">
        <h2 className="text-3xl mb-2">Time</h2>
        <p>02 May 2024, 19:00 – 22:30</p>
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
        <EventModal />
      </div>
      <div className="text-lg my-12 flex flex-col justify-start items-center sm:items-start">
        <h2 className="text-3xl mb-2 capitalize">Share this event</h2>
        <div>
          <Button size="icon" variant="link">
            <Facebook stroke="1" className="fill-black"/>
          </Button>
          <Button size="icon" variant="link">
            <Twitter  stroke="1" className="fill-black"/>
          </Button>
          <Button size="icon" variant="link">
            <Linkedin stroke="1" className="fill-black"/>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuyTickets;
