"use client";

import { cancelBookingAction } from "../_lib/action";

export default function CancelButton({ id }: { id: number }) {
  return (
    <button
      onClick={() => cancelBookingAction(id)}
      className="flex w-full items-center justify-end gap-2 px-4 py-[2px] text-sm uppercase tracking-wider"
    >
      <span className="border border-red-500 px-2 font-semibold text-red-700">
        Anuluj
      </span>
    </button>
  );
}
