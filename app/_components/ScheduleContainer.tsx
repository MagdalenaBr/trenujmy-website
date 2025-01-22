import { getServerSession } from "next-auth";
import ScheduleContextProvider from "../_context/ScheduleContext";
import {
  getBookings,
  getGroupTrainers,
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

  const [openHours, schedule, bookings, member, groupTrainers] =
    await Promise.all([
      getOpenHours(),
      getSchedule(),
      getBookings(),
      getMemberData(session?.user?.email || ""),
      getGroupTrainers(),
    ]);

  return (
    <SectionContainer>
      <ScheduleContextProvider>
        <div className="flex w-full flex-col justify-between gap-4 pt-20 md:flex-row">
          <ChangeMonth />
          <div className="flex flex-col gap-4 md:flex-row lg:gap-10">
            <ResetButton />
            <SelectTrainer groupTrainers={groupTrainers} />
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
