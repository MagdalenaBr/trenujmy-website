"use client";

import {
  addDays,
  eachDayOfInterval,
  format,
  formatISO,
  subDays,
} from "date-fns";
import ScheduleEvent from "./ScheduleEvent";
import { TODAY_DAY } from "../_utils/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { useScheduleContext } from "../_context/ScheduleContext";

interface ContextTypes {
  firstDay: string;
  setFirstDay: React.Dispatch<React.SetStateAction<string>>;
  lastDay: string;
  setLastDay: React.Dispatch<React.SetStateAction<string>>;
}

export default function Schedule() {
  const { firstDay, setFirstDay, lastDay, setLastDay } = useScheduleContext();

  const datesArr = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  }).map((day) => format(day, "dd.MM"));

  const [newDates, setNewDates] = useState(datesArr);

  function changeWeek(newWeekFirstDay: string, newWeekLastDay: string) {
    const datesArr = eachDayOfInterval({
      start: newWeekFirstDay,
      end: newWeekLastDay,
    }).map((day) => format(day, "dd.MM"));

    setFirstDay(newWeekFirstDay);
    setLastDay(newWeekLastDay);
    setNewDates(datesArr);
  }

  function changeWeekForward() {
    const newWeekFirstDay = formatISO(addDays(firstDay, 7));
    const newWeekLastDay = formatISO(addDays(lastDay, 7));

    changeWeek(newWeekFirstDay, newWeekLastDay);
  }

  function changeWeekBackwards() {
    const newWeekFirstDay = formatISO(subDays(firstDay, 7));
    const newWeekLastDay = formatISO(subDays(lastDay, 7));

    changeWeek(newWeekFirstDay, newWeekLastDay);
  }

  const hourArr = [
    "8.00",
    "9.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
  ];

  return (
    <div className="flex">
      <button
        onClick={changeWeekBackwards}
        className="mx-4 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105"
      >
        <ChevronLeftIcon />
      </button>
      {/* <Schedule datesArr={newDates} /> */}

      <div className="flex w-full justify-between gap-10 border bg-darkGray px-4 text-xl text-textLight">
        <div className="w-full">
          {hourArr.map((hour, index) => (
            <div
              key={hour}
              className={`border-accentColor/30" flex h-[150px] justify-between gap-4 border-b ${index === 0 && "h-[180px]"}`}
            >
              <div className="flex w-[80px] items-center justify-center text-accentColor">
                {hour}
              </div>
              {datesArr.map((date) => (
                <div
                  key={date}
                  onClick={() => console.log(date, hour)}
                  className="flex w-[160px] flex-col text-center text-slate-300"
                >
                  {index === 0 ? date : ""}
                  <ScheduleEvent />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={changeWeekForward}
        className="mx-4 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
