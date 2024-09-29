import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ScheduleContainer from "../_components/ScheduleContainer";
import SectionContainer from "../_components/SectionContainer";

export default function Page() {
  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <SectionContainer>
          {/* <MainHeading>Zajęcia</MainHeading> */}
          <div className="flex w-full justify-between pt-20">
            <div className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray">
              <ChevronLeftIcon className="w-8" />
              <span className="text-xl uppercase">Wrzesień</span>
              <ChevronRightIcon className="w-8" />
            </div>
            <div className="flex gap-10">
              <div className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray">
                <span className="px-2 text-xl uppercase">reset</span>
              </div>
              <div className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray">
                <span className="px-2 text-xl uppercase">Trener</span>
              </div>
            </div>
          </div>
          <ScheduleContainer />
        </SectionContainer>
      </div>
    </>
  );
}
