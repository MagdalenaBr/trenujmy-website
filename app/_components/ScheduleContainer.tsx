"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Schedule from "./Schedule";
import { useState } from "react";
import { TODAY_DAY } from "../_utils/constants";
import {
  addDays,
  eachDayOfInterval,
  format,
  formatISO,
  subDays,
} from "date-fns";

export default function ScheduleContainer() {
  const [firstDay, setFirstDay] = useState(TODAY_DAY);
  const [lastDay, setLastDay] = useState(formatISO(addDays(TODAY_DAY, 6)));
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

  return (
    <div className="flex">
      <button
        onClick={changeWeekBackwards}
        className="mx-4 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105"
      >
        <ChevronLeftIcon />
      </button>
      <Schedule datesArr={newDates} />
      <button
        onClick={changeWeekForward}
        className="mx-4 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
