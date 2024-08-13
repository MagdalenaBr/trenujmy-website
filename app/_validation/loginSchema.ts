import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Podaj email." })
    .min(1, { message: "Podaj email" })
    .max(50, {
      message:
        "Podany e-mail jest za długi. E-mail powinien zawierać maksymalnie 50 znaków",
    })
    .email({ message: "Podany email nie jsest prawidłowy" }),
  password: z
    .string({ required_error: "Podaj hasło" })
    .min(6, { message: "Hasło powinno zawierać od 6 do 30 znaków" })
    .max(30, {
      message: "Hasło powinno zawierać od 6 do 30 znaków",
    }),
});
