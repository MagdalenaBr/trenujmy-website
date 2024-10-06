"use client";

import ScheduleContextProvider from "../_context/ScheduleContext";
import ChangeMonth from "./ChangeMonth";
import ResetButton from "./ResetButton";
import Schedule from "./Schedule";
import SectionContainer from "./SectionContainer";

export default function ScheduleContainer() {
  return (
    <SectionContainer>
      <ScheduleContextProvider>
        <div className="flex w-full justify-between pt-20">
          <ChangeMonth/>
          <div className="flex gap-10">
            <ResetButton />
            <div className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray">
              <span className="px-2 text-xl uppercase">Trener</span>
            </div>
          </div>
        </div>
        <Schedule />
      </ScheduleContextProvider>
    </SectionContainer>
  );
}
