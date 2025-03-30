"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { addMonths, format, formatISO } from "date-fns";
import { pl } from "date-fns/locale";
import { useScheduleContext } from "../_context/ScheduleContext";

export default function ChangeMonth() {
  const { setFirstDay, firstDay, setLastDay, numOfDaysInRange } =
    useScheduleContext();

  const currMonth = Number(format(firstDay, "L"));
  const currYear = Number(format(firstDay, "y"));
  const currMonthName = format(firstDay, "LLLL", { locale: pl });

  function addMonth() {
    setFirstDay(formatISO(addMonths(new Date(currYear, currMonth - 1, 1), 1)));
    setLastDay(
      formatISO(
        addMonths(new Date(currYear, currMonth - 1, numOfDaysInRange), 1),
      ),
    );
  }
  function subMonth() {
    setFirstDay(formatISO(addMonths(new Date(currYear, currMonth - 1, 1), -1)));
    setLastDay(
      formatISO(
        addMonths(new Date(currYear, currMonth - 1, numOfDaysInRange), -1),
      ),
    );
  }

  return (
    <div className="flex items-center justify-between border border-darkGray shadow-md shadow-darkGray">
      <button aria-label="Poprzedni miesiąc" onClick={subMonth}>
        <ChevronLeftIcon className="w-8" />
      </button>
      <p className="w-32 text-center text-xl uppercase">{currMonthName}</p>
      <button aria-label="Następny miesiąc" onClick={addMonth}>
        <ChevronRightIcon className="w-8" />
      </button>
    </div>
  );
}
