import { z } from "zod";

const partnerPreferencesSchema = z.object({
  pet: z.string().trim().min(1, "Pet Field Is Required"),
  gender: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  minAge: z.string().trim().min(1, "min age Field Is Required"),
  maxAge: z.string().trim().min(1, "max age Field Is Required"),
  bodyType: z.string().trim().min(1, "Body Type Field Is Required"),

  commitmentLevel: z
    .string()
    .trim()
    .min(1, "Commitment Level Field Is Required"),
  personalBelieves: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  favoriteHolidayDestination: z
    .string()
    .trim()
    .min(1, "Favorite Holiday Destination Field Is Required"),
  freeTime: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  musicGenres: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});
type partnerPreferencesSchema = z.infer<typeof partnerPreferencesSchema>;

export default partnerPreferencesSchema;
