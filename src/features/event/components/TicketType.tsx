import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TicketType } from "@/types/ticket";
import { FC } from "react";
import useEventStore from "../services/useEventStore";

type PropsType = {
  type: TicketType;
  description: string;
  price: string;
  fee: string;
};

const TicketType: FC<PropsType> = ({ description, fee, price, type }) => {
  const setOpenModal = useEventStore((state) => state.setOpenModal);
  const setType = useEventStore((state) => state.setType);
  return (
    <div className="flex justify-center flex-col sm:flex-row items-start sm:gap-6 border-y border-black/25 py-6">
      <div className="flex-1 sm:border-r border-black/25 w-full">
        <h2 className="capitalize">Ticket type</h2>
        <h3 className="my-2 font-normal text-lg capitalize">{type}</h3>
        <div className="w-fit">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>More info</AccordionTrigger>
              <AccordionContent>{description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row gap-3 w-full justify-between items-start sm:items-center">
        <div>
          <p>Price</p>
          <p>{price}</p>
          <p>+{fee} service fee</p>
        </div>
        <Button
          className="capitalize"
          onClick={() => {
            setType(type);
            setOpenModal(true);
          }}
          variant="outline"
        >
          Buy ticket
        </Button>
      </div>
    </div>
  );
};

export default TicketType;
