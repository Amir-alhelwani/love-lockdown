import { User } from "@/features/auth/services/login";
import { PersonalPreferences } from "./personalPreferences";
import { PartnerPreferences } from "./partnerPreferences";

export type TicketType = "smart" | "Regular" | "premium";

export type Ticket = {
  id: number;
  creatorId: number;
  bookingDate: string;
  roomId: number;
  type: TicketType;
};

export type SmartTicket = {
  user: User;
  similarityScore: number;
  personalPreferences: PersonalPreferences;
  potentialPartnerPreferences: PartnerPreferences;
};
