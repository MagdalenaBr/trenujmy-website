"use client";

import { useScheduleContext } from "../_context/ScheduleContext";
import { TODAY_DAY } from "../_utils/constants";

export default function ResetButton() {
  const { setFirstDay, setLastDay, setTrainer, lastDayInRange } =
    useScheduleContext();

  function handleClick() {
    setFirstDay(TODAY_DAY);
    setLastDay(lastDayInRange);
    setTrainer("all");
  }

  return (
    <button
    aria-labelledby="labelspan"
      onClick={handleClick}
      className="flex items-center justify-center gap-4 border border-darkGray shadow-md shadow-darkGray"
    >
      <span id="labelspan" className="px-2 text-xl uppercase">reset</span>
    </button>
  );
}
