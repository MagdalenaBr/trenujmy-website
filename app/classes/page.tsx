import ScheduleContainer from "../_components/ScheduleContainer";
import { getOpenHours, getSchedule } from "../_lib/data";

export default async function Page() {
  const openHours = (await getOpenHours()).at(0);
  const schedule = await getSchedule();

  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <ScheduleContainer openHours={openHours} schedule={schedule} />
      </div>
    </>
  );
}
