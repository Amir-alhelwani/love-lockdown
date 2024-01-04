import ticketRegular from "@/assets/images/Ticket-r.webp";
import ticketSmart from "@/assets/images/Tickets-s.webp";
import ticketPremium from "@/assets/images/ticket-p.webp";

const tickets = {
  title: "tickets type",
  types: [
    {
      id: 1,
      title: "regular ticket",
      description:
        "Embrace surprise! With the Regular Ticket, you'll be randomly paired with another participant.",
      image: ticketRegular,
    },
    {
      id: 2,
      title: "smart ticket",
      description:
        "Get matched with a partner who suits you perfectly by completing our Online Matching Form.",
      image: ticketSmart,
    },
    {
      id: 3,
      title: "premium ticket",
      description:
        "Double the fun by bringing whoever you want to Love Lockdown and sharing the excitement together.",
      image: ticketPremium,
    },
  ],
};

export default tickets;
