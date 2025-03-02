import Booking from "@/app/_components/Booking";
import SortBookings from "@/app/_components/SortBookings";
import { getMemberBookings, getMemberData } from "@/app/_lib/data";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const metadata: Metadata ={
  title:'Rezerwacje'
  }

export default async function Page({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const session = await getServerSession();
  const memberData = await getMemberData(session?.user?.email as string);
  const { id } = memberData[0];
  const selectedBookingStatus = searchParams?.status || null;
  const memberBookings = await getMemberBookings(id, selectedBookingStatus);

  return (
    <div className="m-auto w-3/4 py-6">
      <div className="flex content-center items-center justify-between pb-11">
        <div>
          <Link
            href="/classes"
            className="flex justify-end gap-2 px-2 uppercase text-accentColor"
          >
            <span className="">Zarezerwuj zajęcia</span>
          </Link>
        </div>
        <SortBookings />
      </div>
      <div className="divide-y divide-lightGray">
        {memberBookings.length > 0 ? (
          memberBookings.map((booking) => (
            <Booking key={booking.id} booking={booking} />
          ))
        ) : (
          <p className="text-center text-darkGray">
            Brak dostępnych rezerwacji.
          </p>
        )}
      </div>
    </div>
  );
}
