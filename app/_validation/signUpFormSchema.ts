import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    firstName: z
      .string({ required_error: "Podaj imię" })
      .min(1, { message: "Podaj imię" })
      .max(30, {
        message:
          "Podane imię jest za długie. Imię powinno zawierać maksymalnie 30 znaków",
      }),
    lastName: z
      .string({ required_error: "Podaj nazwisko" })
      .min(1, { message: "Podaj nazwisko" })
      .max(50, {
        message:
          "Podane nazwisko jest za długie. Nazwisko powinno zawierać maksymalnie 50 znaków",
      }),
    city: z
      .string({ required_error: "Podaj miasto" })
      .min(1, { message: "Podaj miasto" })
      .max(30, {
        message:
          "Podane miasto jest za długie. Naza miasta powinna zawierać maksymalnie 30 znaków",
      }),
    phone: z
      .string({ required_error: "Podaj numer telefonu" })
      .min(9, { message: "Podany numer telefonu jest za krótki" })
      .max(9, {
        message: "Podany numer telefonu jest nieprawidłowy. Za dużo cyfr",
      }),
    gender: z.enum(["Kobieta", "Mężczyzna", "Inna"], {
      message: "Wybierz płeć",
    }),
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
    confirmPassword: z
      .string({ required_error: "Potwierdź hasło" })
      .min(6, { message: "Hasło powinno zawierać od 6 do 30 znaków" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Podane hasła nie są zgodne",
    path: ["confirmPassword"],
  });
