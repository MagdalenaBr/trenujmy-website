"use client";

import ScheduleContextProvider from "../_context/ScheduleContext";
import { BookingTypes, HoursTypes, ScheduleTypes } from "../_lib/types";
import ChangeMonth from "./ChangeMonth";
import ResetButton from "./ResetButton";
import Schedule from "./Schedule";
import SectionContainer from "./SectionContainer";

export default function ScheduleContainer({
  openHours,
  schedule,
  bookings,
  memberId
}: {
  openHours: HoursTypes | undefined;
  schedule: ScheduleTypes[] | undefined;
  bookings: BookingTypes[] | undefined;
  memberId: number |undefined
}) {
  return (
    <SectionContainer>
      <ScheduleContextProvider>
        <div className="flex w-full justify-between pt-20">
          <ChangeMonth />
          <div className="flex gap-10">
            <ResetButton />
            <div className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray">
              <span className="px-2 text-xl uppercase">Trener</span>
            </div>
          </div>
        </div>
        <Schedule openHours={openHours} schedule={schedule} bookings={bookings} memberId={memberId}/>
      </ScheduleContextProvider>
    </SectionContainer>
  );
}
