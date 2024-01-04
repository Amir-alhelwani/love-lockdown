import { z } from "zod";

const editProfileSchema = z.object({
  email: z
    .string()
    .min(1, "email field is required")
    .email("the email field is invalid"),
  Name: z.string().min(1, "name field is required"),
  PhoneNumber: z
    .string()
    .min(1, "phone number field is required")
    .regex(/^\d+$/, {
      message: "The phone number field is invalid",
    }),
});

type editProfileSchema = z.infer<typeof editProfileSchema>;

export default editProfileSchema;
