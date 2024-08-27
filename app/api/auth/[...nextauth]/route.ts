import { getMemberData } from "@/app/_lib/data";
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";
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

        if (!passwordMatch) throw new Error("Nieprawidłowe hasło");

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        const userData = await getMemberData(user.email as string);
        const { id, name, email, phone, gender, city } = userData[0];
        return {
          ...token,
          name,
        };
      }
      return token;
    },

    async session({ session, token, user }) {
      console.log(session, token, user);
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
        },
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
