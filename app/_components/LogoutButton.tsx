"use client";

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      title="Wyloguj"
      aria-label="Wyloguj"
      onClick={() => signOut()}
      className="h-10 w-10 text-accentColor"
    >
      <ArrowRightStartOnRectangleIcon />
    </button>
  );
}
