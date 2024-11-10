import { getServerSession } from "next-auth";
import ScheduleContainer from "../_components/ScheduleContainer";
import {
  getBookings,
  getMemberData,
  getOpenHours,
  getSchedule,
} from "../_lib/data";

export default async function Page() {
  const openHours = (await getOpenHours()).at(0);
  const schedule = await getSchedule();
  const bookings = await getBookings();

  const session = await getServerSession();
  console.log(session?.user?.email);

  const member = (await getMemberData(session?.user?.email || "")).at(
    0,
  );

  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <ScheduleContainer
          openHours={openHours}
          schedule={schedule}
          bookings={bookings}
          memberId={member?.id}
        />
      </div>
    </>
  );
}
