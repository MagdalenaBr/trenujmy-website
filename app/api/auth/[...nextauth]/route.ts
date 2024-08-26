import { sql } from "@vercel/postgres";
import bcrypt, { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<any> {
        console.log(credentials);
        if (!credentials?.password) throw new Error("Podaj hasło.");
        if (!credentials?.email) throw new Error("Podaj email.");
        const response =
          await sql`SELECT * FROM users WHERE email=${credentials?.email}`;
        let user = response.rows[0];

        if (!user) {
          throw new Error("Błędne dane logowania.");
        }
        const passwordMatch = await compare(
          credentials.password,
          user.password,
        );
        console.log(user);
        if (!passwordMatch) throw new Error("Nieprawidłowe hasło");
        if (user) {
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
