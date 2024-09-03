import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";
import { imbue } from "../fonts";
import Link from "next/link";

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
        <div className="flex gap-2 justify-center py-4">
          <p>Nie masz konta?</p>
          <Link href="/signup" className="uppercase text-accentColor font-semibold hover:scale-105 transition-all">Zarejestruj się</Link>
        </div>
      </div>
    </>
  );
}
