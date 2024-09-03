"use client";

import toast from "react-hot-toast";
import { cancelBookingAction } from "../_lib/action";

export default function CancelButton({ id }: { id: number }) {

async function handleClick() {
  const result = await cancelBookingAction(id)
  console.log(result);

  if (result?.message) {
    toast.error(result?.message);
  } else {
    toast.success("Rezerwacja została anulowana.");
  }


}


  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-end gap-2 px-4 py-[2px] text-sm uppercase tracking-wider"
    >
      <span className="border border-red-500 px-2 font-semibold text-red-700">
        Anuluj
      </span>
    </button>
  );
}
