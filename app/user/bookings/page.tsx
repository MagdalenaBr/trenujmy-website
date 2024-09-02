import Booking from "@/app/_components/Booking";
import { getMemberBookings, getMemberData } from "@/app/_lib/data";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();
  const memberData = await getMemberData(session?.user?.email as string);
  const { id } = memberData[0];
  const memberBookings = await getMemberBookings(id);

  return (
    <div className="m-auto w-3/4 divide-y flex flex-col divide-lightGray py-6">
      <select className="border-darkGray border self-end bg-transparent shadow-sm shadow-darkGray mb-4 w-48">
        <option>wszystkie</option>
        <option>niepotwierdzone</option>
        <option>anulowane</option>
        <option>zrealizowane</option>
      </select>{" "}
      {memberBookings.map((booking) => (
        <Booking key={booking.id} booking={booking} />
      ))}
    </div>
  );
}
