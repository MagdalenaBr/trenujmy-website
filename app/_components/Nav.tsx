"use client";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginButton from "./LoginButton";

function Nav() {
  const pathname = usePathname();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navItems = [
    {
      label: "Strona głowna",
      url: "/",
    },
    {
      label: "O nas",
      url: "/about",
    },
    {
      label: "Zajęcia",
      url: "/classes",
    },
    {
      label: "Kadra",
      url: "/trainers",
    },
    {
      label: "Cennik",
      url: "/prices",
    },
    {
      label: "Kontakt",
      url: "/contact",
    },
  ];

  return (
    <>
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="absolute right-2 top-6 z-[1000] w-10 text-textLight md:hidden"
      >
        {showMobileNav === false ? <Bars3BottomRightIcon /> : <XMarkIcon />}
      </button>
      <nav
        className={`fixed bottom-0 right-0 top-0 flex w-3/4 flex-col gap-5 overflow-hidden bg-black/60 py-16 backdrop-blur-md md:relative md:translate-x-0 md:flex-row md:justify-between md:bg-transparent md:py-0 md:backdrop-blur-none ${
          showMobileNav === true ? "translate-x-0" : "translate-x-[100%]"
        } transition-all`}
      >
        <ul
          className={`flex flex-col gap-4 self-center px-5 py-2 md:flex-row md:bg-black/50`}
        >
          {navItems.map((item) => (
            <li
              key={item.url}
              className={`tracking- font-semibold uppercase text-textLight hover:text-accentColor ${
                pathname === item.url ? "border-b-2 border-accentColor" : ""
              }`}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <LoginButton />
      </nav>
    </>
  );
}

export default Nav;
