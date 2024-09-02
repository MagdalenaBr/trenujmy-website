"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserNav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full justify-center gap-10 bg-darkGray py-4 text-xl uppercase text-textLight">
        <Link
          className={clsx("transition-colors hover:text-accentColor", {
            "border-b-2 border-accentColor": pathname === "/user/profile",
          })}
          href={"/user/profile"}
        >
          Profil
        </Link>
        <Link
          className={clsx("transition-colors hover:text-accentColor", {
            "border-b-2 border-accentColor": pathname === "/user/bookings",
          })}
          href={"/user/bookings"}
        >
          Rezerwacje
        </Link>
      </div>
      <div className="h-[28rem] w-full overflow-y-auto border border-lightGray">
        {children}
      </div>
    </div>
  );
}
