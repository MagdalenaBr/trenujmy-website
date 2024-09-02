import Booking from "@/app/_components/Booking";
import SortBookings from "@/app/_components/SortBookings";
import { getMemberBookings, getMemberData } from "@/app/_lib/data";
import { getServerSession } from "next-auth";

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
    <div className="m-auto flex w-3/4 flex-col divide-y divide-lightGray py-6">
      <SortBookings />
      {memberBookings.map((booking) => (
        <Booking key={booking.id} booking={booking} />
      ))}
    </div>
  );
}
