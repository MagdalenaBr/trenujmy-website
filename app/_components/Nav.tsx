"use client";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    // hide sidebar only on path change
    setShowMobileNav(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="absolute right-2 top-6 z-[1000] w-10 text-textLight md:w-14 lg:hidden"
      >
        {showMobileNav === false ? <Bars3BottomRightIcon /> : <XMarkIcon />}
      </button>
      <nav
        className={`fixed bottom-0 right-0 top-0 z-[999] flex w-3/4 flex-col gap-5 bg-black/60 py-16 backdrop-blur-md md:w-1/2 lg:relative lg:translate-x-0 lg:flex-row lg:justify-between lg:bg-transparent lg:py-0 lg:backdrop-blur-none ${
          showMobileNav === true ? "translate-x-0" : "translate-x-[100%]"
        } transition-all`}
      >
        <ul
          className={`flex flex-col gap-4 self-center px-5 py-2 tracking-wider lg:flex-row`}
        >
          {navItems.map((item) => (
            <li
              key={item.url}
              className={`tracking- font-semibold uppercase transition-all hover:scale-110 hover:text-accentColor/70 ${
                pathname === item.url ? "text-accentColor" : "text-textLight"
              }`}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
