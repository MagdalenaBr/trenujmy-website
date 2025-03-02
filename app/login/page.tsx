import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";
import { imbue } from "../fonts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaloguj się",
};

export default async function Page() {
  const session = await getServerSession();
  if (session) redirect("/user/profile");

  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <h1
          className={`py-12 text-center text-4xl uppercase text-darkGray ${imbue.className}`}
        >
          Zaloguj się
        </h1>
        <LoginForm />
        <div className="flex justify-center gap-2 py-4">
          <p>Nie masz konta?</p>
          <Link
            href="/signup"
            className="font-semibold uppercase text-accentColor transition-all hover:scale-105"
          >
            Zarejestruj się
          </Link>
        </div>
      </div>
    </>
  );
}
