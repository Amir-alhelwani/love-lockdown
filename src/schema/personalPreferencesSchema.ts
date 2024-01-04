import { z } from "zod";

const personalPreferencesSchema = z.object({
  sexualPreference: z
    .string()
    .trim()
    .min(1, "Sexual Preference Field Is Required"),
  commitmentLevel: z
    .string()
    .trim()
    .min(1, "Commitment Level Field Is Required"),
  favoriteHolidayDestination: z
    .string()
    .trim()
    .min(1, "Favorite Holiday Destination Field Is Required"),
  pet: z.string().trim().min(1, "Pet Field Is Required"),
  gender: z.string().trim().min(1, "gender Field Is Required"),
  age: z.string().trim().min(1, "age Field Is Required"),
  height: z.string().trim().min(1, "Height Field Is Required"),
  bodyType: z.string().trim().min(1, "Body Type Field Is Required"),
  personalBelieves: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  personalValues: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  freeTime: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  musicGenres: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  languages: z.array(
    z.object({
      value: z.string().min(1, "This field is required").trim(),
    })
  ),
});
type personalPreferencesSchema = z.infer<typeof personalPreferencesSchema>;

export default personalPreferencesSchema;
