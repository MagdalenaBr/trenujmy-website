'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut()} className="h-8 w-10 text-accentColor">
      <ArrowRightStartOnRectangleIcon />
    </button>
  );
}
