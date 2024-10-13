import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  addDays,
  eachDayOfInterval,
  eachHourOfInterval,
  format,
  formatISO,
  isSameDay,
  isSameHour,
  subDays,
} from "date-fns";
import { useState } from "react";
import { useScheduleContext } from "../_context/ScheduleContext";
import { TODAY_DAY } from "../_utils/constants";
import ScheduleEvent from "./ScheduleEvent";
import { HoursTypes, ScheduleTypes } from "../_lib/types";

interface ContextTypes {
  firstDay: string;
  setFirstDay: React.Dispatch<React.SetStateAction<string>>;
  lastDay: string;
  setLastDay: React.Dispatch<React.SetStateAction<string>>;
}

export default function Schedule({
  openHours,
  schedule,
}: {
  openHours: HoursTypes | undefined;
  schedule: ScheduleTypes[] | undefined;
}) {
  console.log(schedule);
  console.log(openHours);
  const { firstDay, setFirstDay, lastDay, setLastDay } = useScheduleContext();

  const todayDayArr = TODAY_DAY.split("T")[0]
    .split("-")
    .map((num) => Number(num));

  const datesArr = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  }).map((day) => format(day, "dd.MM.yyyy"));

  const openHour = Number(openHours?.openHour.split(":").at(0));
  const closeHour = Number(openHours?.closeHour.split(":").at(0));
  const hoursArr = eachHourOfInterval({
    start: new Date(todayDayArr[0], todayDayArr[1], todayDayArr[2], openHour),
    end: new Date(todayDayArr[0], todayDayArr[1], todayDayArr[2], closeHour),
  }).map((date) => format(date, "HH:mm"));

  function changeWeek(newWeekFirstDay: string, newWeekLastDay: string) {
    setFirstDay(newWeekFirstDay);
    setLastDay(newWeekLastDay);
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
  // console.log(new Date('2024-07-18'));
  // console.log(new Date(2024, 6, 18));
  //   schedule?.map(training => console.log( isSameDay(new Date(training.date.split('T')[0]), new Date(2024, 5, 3))))

  function compareDay(training, date) {
    const dateArr = date.split(".");
    // console.log(dateArr);

    return isSameDay(
      new Date(training.date.split("T")[0]),
      new Date(dateArr[0], Number(dateArr[1]) - 1, dateArr[2]),
    );
  }

  return (
    <div className="flex">
      <button
        onClick={changeWeekBackwards}
        className="mx-4 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105"
      >
        <ChevronLeftIcon />
      </button>

      <div className="flex w-full justify-between gap-10 border bg-darkGray px-4 text-xl text-textLight">
        <div className="w-full">
          {hoursArr.map((hour, index) => (
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
                  {index === 0 ? date.slice(0, 5) : ""}
                  {/* {schedule?.map(
                    (training) =>
                      compareDay(training, date) && <ScheduleEvent />,
                  )} */}
                  <ScheduleEvent date={date} hour={hour} />
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
