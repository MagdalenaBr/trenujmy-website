import { z } from "zod";

const phoneRegex = /^\d{9}$/;

export const EditDataFormSchema = z.object({
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
    })
    .regex(
      phoneRegex,
      "Błędny numer telefonu. Przykładowy numer telefonu: 123456789. Wprowadzony numer musi być zarejestrowany w Polsce.",
    ),
});
