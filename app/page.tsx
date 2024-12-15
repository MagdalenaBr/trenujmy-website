import Image from "next/image";
import { getServerSession } from "next-auth";
import bg from "../public/main-page.jpg";
import { imbue, roboto } from "./fonts";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession();

  return (
    <div className="m-auto flex h-[92%] w-11/12 max-w-[1400px] flex-col justify-end">
      <Image
        src={bg}
        fill
        alt="Kobieta ćwicząca na siłowni"
        className="z-[-20] object-cover object-bottom"
      />
      <div
        className={`${imbue.className} flex flex-col p-5 text-5xl text-textLight  md:text-6xl lg:w-[42rem]`}
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
        <div>
          <Link
            href={session ? "/user/bookings" : "/login"}
            className="mb-6 mr-10 bg-accentColor px-6 py-2 text-xl font-semibold uppercase tracking-widest text-darkGray transition-all hover:scale-110 md:self-end md:text-3xl"
          >
            Zarezerwuj
          </Link>
          <Link
            href="/about"
            className="mb-6 self-center border border-accentColor px-6 py-2 text-xl font-semibold uppercase tracking-widest text-accentColor transition-all hover:scale-110 md:self-end md:text-3xl"
          >
            O nas
          </Link>
        </div>
      </div>
    </div>
  );
}
