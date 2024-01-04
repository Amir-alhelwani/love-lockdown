import { z } from "zod";

const authSchema = z.object({
  email: z
    .string()
    .min(1, "email field is required")
    .email("the email field is invalid"),
  password: z.string().min(1, "password field is required"),
});

type authSchema = z.infer<typeof authSchema>;

export default authSchema;
