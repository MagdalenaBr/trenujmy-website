import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignUpForm from "../_components/SignUpForm";
import { imbue } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejestracja",
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
          Rejestracja
        </h1>
        <SignUpForm />
      </div>
    </>
  );
}
