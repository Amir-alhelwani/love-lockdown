import TicketCard from "@/components/TicketCard";
import tickets from "@/constants/home/ticketsTypes";

const TicketsTypes = () => {
  return (
    <section className="bg-[rgb(235,233,244)] p-4 sm:p-10">
      <div className="max-w-7xl px-4 mx-auto bg-lavender-gray p-10">
        <h2 className="text-center text-4xl py-6 capitalize">
          {tickets.title}
        </h2>
        <div className="flex flex-wrap justify-center items-center md:gap-8">
          {tickets.types.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsTypes;
