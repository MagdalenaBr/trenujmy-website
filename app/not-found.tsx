import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full content-center bg-darkGray text-center text-textLight">
      <h2 className="align-center mb-10 text-2xl uppercase text-accentColor">
        <span className="text-5xl">404 | </span>Wybrana strona internetowa nie
        istnieje!
      </h2>

      <Link
        href="/"
        className="border-2 border-accentColor px-3 py-2 font-semibold text-accentColor"
      >
        Powrót
      </Link>
    </div>
  );
}
