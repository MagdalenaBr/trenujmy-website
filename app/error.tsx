"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full w-full content-center bg-darkGray text-center text-textLight">
      <h2 className="pb-4 text-2xl uppercase text-accentColor">
        Strona internetowa jest niedostępna!
      </h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="mt-10 border-2 border-accentColor px-3 py-2 font-semibold text-accentColor"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
