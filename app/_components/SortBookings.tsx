"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortBookings() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSelect(bookingStatus: string) {
    const params = new URLSearchParams(searchParams);

    if (bookingStatus !== "wszystkie") {
      params.set("status", bookingStatus);
    } else if (bookingStatus === "wszystkie") {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <select
      onChange={(e) => handleSelect(e.target.value)}
      defaultValue={searchParams.get("status")?.toString()}
      className=" w-48 self-end border-b border-r border-darkGray bg-transparent shadow-sm shadow-darkGray"
    >
      <option value="wszystkie">wszystkie</option>
      <option value="niepotwierdzona">niepotwierdzone</option>
      <option value="anulowana">anulowane</option>
      <option value="zrealizowana">zrealizowane</option>
    </select>
  );
}
