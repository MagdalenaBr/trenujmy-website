import Image from "next/image";
// import bg from "../public/main-page-large.jpg";
import bg from "../public/main-page.jpg";
import { Baskervville } from "next/font/google";
import { Imbue } from "next/font/google";

const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });
const imbue = Imbue({ weight: "700", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="m-auto flex h-[92%] w-11/12 max-w-[1300px] flex-col justify-end">
      <Image
        src={bg}
        fill
        alt="Kobieta ćwicząca na siłowni"
        className="z-[-20] object-cover object-bottom"
      />
      <div
        className={`${imbue.className} flex flex-col gap-8 p-5 text-5xl uppercase text-textLight lg:w-[54rem] lg:flex-row md:gap-2 md:text-6xl`}
      >
        <h1 className="leading-relaxed">
          Twoja droga do lepszej formy zaczyna się tutaj
        </h1>
        <button className="mb-6 self-center border border-accentColor px-6 py-2 text-xl font-semibold uppercase tracking-widest text-accentColor shadow-md shadow-accentColor hover:scale-110 md:self-end md:text-3xl transition-all">
          Dołącz
        </button>
      </div>
    </div>
  );
}
