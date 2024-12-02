import { getServerSession } from "next-auth";
import ScheduleContextProvider from "../_context/ScheduleContext";
import {
  getBookings,
  getMemberData,
  getOpenHours,
  getSchedule,
} from "../_lib/data";
import ChangeMonth from "./ChangeMonth";
import ResetButton from "./ResetButton";
import Schedule from "./Schedule";
import SectionContainer from "./SectionContainer";
import SelectTrainer from "./SelectTrainer";

export default async function ScheduleContainer() {
  const session = await getServerSession();

  const [openHours, schedule, bookings, member] = await Promise.all([
    getOpenHours(),
    getSchedule(),
    getBookings(),
    getMemberData(session?.user?.email || ""),
  ]);

  return (
    <SectionContainer>
      <ScheduleContextProvider>
        <div className="flex w-full justify-between pt-20">
          <ChangeMonth />
          <div className="flex gap-10">
            <ResetButton />
            <SelectTrainer />
          </div>
        </div>
        <Schedule
          openHours={openHours.at(0)}
          schedule={schedule}
          bookings={bookings}
          memberId={member.at(0)?.id}
        />
      </ScheduleContextProvider>
    </SectionContainer>
  );
}
