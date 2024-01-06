import imageExtensions from "@/constants/imageExtensions";
import { z } from "zod";

const registerSchema = z.object({
  email: z
    .string()
    .min(1, "email field is required")
    .email("the email field is invalid"),
  password: z
    .string()
    .min(1, "password field is required")
    .min(6, "The password is too short"),
  Name: z.string().min(1, "name field is required"),
  image: z
    .instanceof(File)
    .refine((file) => file.size !== 0, "image field is required")
    .refine((file) => {
      const image = file;
      if (!file) return false;
      return imageExtensions.includes(
        image.name.slice(image.name.lastIndexOf("."))
      );
    }, "please choose image only"),
  PhoneNumber: z
    .string()
    .min(1, "phone number field is required")
    .regex(/^\d+$/, {
      message: "The phone number field is invalid",
    }),
});

type registerSchema = z.infer<typeof registerSchema>;

export default registerSchema;
