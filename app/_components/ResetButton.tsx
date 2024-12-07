"use client";

import { useScheduleContext } from "../_context/ScheduleContext";
import { LAST_DAY_IN_WEEK, TODAY_DAY } from "../_utils/constants";

export default function ResetButton() {
  const { setFirstDay, setLastDay, setTrainer } = useScheduleContext();

  function handleClick() {
    setFirstDay(TODAY_DAY);
    setLastDay(LAST_DAY_IN_WEEK);
    setTrainer("all");
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray"
    >
      <span className="px-2 text-xl uppercase">reset</span>
    </button>
  );
}
