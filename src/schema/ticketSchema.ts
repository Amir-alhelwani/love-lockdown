import { z } from "zod";

const ticketSchema = z.object({
  bookingDate: z.string().min(1, "date field is required"),
});

type ticketSchema = z.infer<typeof ticketSchema>;

export default ticketSchema;
