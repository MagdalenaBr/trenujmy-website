import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      href={"/login"}
      className="rounded-xl bg-textLight px-3 py-1 text-sm font-semibold uppercase tracking-wider text-darkGray transition-all hover:scale-105 hover:text-accentColor lg:text-base"
    >
      Zaloguj się{" "}
    </Link>
  );
}
