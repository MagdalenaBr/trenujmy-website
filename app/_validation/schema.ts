import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z
    .string({ required_error: "Podaj imię" })
    .min(1, { message: "Podaj imię" }),
  lastName: z.string(),
  email: z
    .string({ required_error: "Podaj email." })
    .min(1, { message: "Podaj email" })
    .email({ message: "Podany email nie jsest prawidłowy" }),
  message: z
    .string({ required_error: "Wiadomość jest wymagana." })
    .min(6, { message: "Wiadomość powinna zawierać conajmniej 6 znaków" }),
});
