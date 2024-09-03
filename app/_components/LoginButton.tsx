import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href={'/login'} className="self-center border border-accentColor bg-black/40 px-3 py-1 font-semibold uppercase tracking-wider text-accentColor shadow-sm shadow-accentColor transition-all hover:scale-105 hover:bg-accentColor/20">
      Zaloguj się{" "}
    </Link>
  );
}
