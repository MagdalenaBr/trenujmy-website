import Image from "next/image";
import { getServerSession } from "next-auth";
import bg from "../public/main-page.jpg";
import { imbue } from "./fonts";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession();

  return (
    <div className="m-auto flex h-[92%] w-11/12 max-w-[1300px] flex-col justify-end">
      <Image
        src={bg}
        fill
        alt="Kobieta ćwicząca na siłowni"
        className="z-[-20] object-cover object-bottom"
      />
      <div
        className={`${imbue.className} flex flex-col gap-8 p-5 text-5xl uppercase text-textLight md:gap-2 md:text-6xl lg:w-[54rem] lg:flex-row`}
      >
        <h1 className="leading-relaxed">
          Twoja droga do lepszej formy zaczyna się tutaj
        </h1>

        <Link
          href={session ? "/user/bookings" : "/login"}
          className="mb-6 self-center border border-accentColor px-6 py-2 text-xl font-semibold uppercase tracking-widest text-accentColor shadow-md shadow-accentColor transition-all hover:scale-110 md:self-end md:text-3xl"
        >
          Dołącz
        </Link>
      </div>
    </div>
  );
}
