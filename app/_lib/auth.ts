import { sql } from "@vercel/postgres";
import { error } from "console";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import email from "next-auth/providers/email";
import toast from "react-hot-toast";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Credentials({
    //   id: 'login',
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   async authorize(credentials, request) {
    // let user = null

    // if (!user) {
    //   throw new Error("Użytkownik nie został znaleziony")
    // }

    // return user
    //   },
    // }),

    Credentials({
      id: "signup",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, request) {
        // console.log(credentials);

        //sprawdzić czy uzytkownik jest już zalogowonay w bazie danych

        // try {
        //   const response =
        //     await sql`SELECT * FROM users WHERE email=${credentials?.email as string}`;
        //   let user = response.rows[0];
        //   console.log(user);

        //   // jeżeli tak to zwrócić informację że dany użytkownik istnieje

        //   if (!!user) {
        //     // toast.error("Podany e-mail został już zarejestrowany.");
        //     throw new Error("Podany e-mail został już zarejestrowany");
        //   }
        //   if (!user) {
        //     const addResponse =
        //       await sql`INSERT INTO users (email, password) VALUES (${credentials.email as string}, ${credentials.password as string})`;

        //     /// dodać użytkownika do supabase

        //     /// pobrać dane z supabase
        //   }
        //   return user;
        // } catch {
        //   if (error instanceof ZodError) return null;
        // }

        // jeżeli nie to dodać użytkownika do bazy danych vercel i do bazy danych w supabase
      },
    }),
  ],
});
