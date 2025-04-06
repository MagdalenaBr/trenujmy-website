import Image from "next/image";
import { getServerSession } from "next-auth";
import bgDesktop from "../public/hero-start-desktop.jpg";
import bgMobile from "../public/hero-start-mobile.jpg";
import { imbue, roboto } from "./fonts";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession();

  return (
    <div className="m-auto flex min-h-dvh w-11/12 max-w-[1400px] flex-col justify-end overflow-hidden">
      <Image
        src={bgDesktop}
        fill
        placeholder="blur"
        alt="Mężczyzna ćwiczący na siłowni"
        className="z-[-20] hidden min-h-dvh object-cover object-bottom md:block"
      />
      <Image
        src={bgMobile}
        fill
        placeholder="blur"
        alt="Mężczyzna ćwiczący na siłowni"
        className="z-[-20] min-h-dvh object-cover object-bottom md:hidden"
      />
      <div
        className={`${imbue.className} flex flex-col p-5 text-5xl text-textLight md:text-6xl lg:w-[42rem]`}
      >
        <div className="mb-14">
          <h1 className="uppercase leading-snug text-accentColor/60">
            Twoja droga do lepszej formy zaczyna się tutaj
          </h1>
          <p
            className={`${roboto.className} text-xl font-light tracking-wider text-textLight/70`}
          >
            Zarezerwuj zajęcia z trenerem personalnym lub dołącz do zajęć
            grupowych.
          </p>
        </div>
        <div className="flex flex-col min-[350px]:flex-row">
          <Link
            href={session ? "/user/bookings" : "/login"}
            aria-label="Zarezerwuj zajęcia"
            className="mb-6 mr-10 self-start bg-accentColor px-6 py-2 text-xl font-semibold uppercase tracking-widest text-darkGray transition-all hover:scale-110 md:self-end md:text-3xl"
          >
            Zarezerwuj
          </Link>
          <Link
            href="/about"
            aria-label="O nas"
            className="mb-6 self-start border border-accentColor px-6 py-2 text-xl font-semibold uppercase tracking-widest text-accentColor transition-all hover:scale-110 md:self-end md:text-3xl"
          >
            O nas
          </Link>
        </div>
      </div>
    </div>
  );
}
