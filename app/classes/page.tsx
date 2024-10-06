import ScheduleContainer from "../_components/ScheduleContainer";

export default function Page() {
  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <ScheduleContainer />
      </div>
    </>
  );
}
