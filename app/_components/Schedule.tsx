"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  addDays,
  eachDayOfInterval,
  eachHourOfInterval,
  format,
  formatISO,
  subDays,
} from "date-fns";
import { useScheduleContext } from "../_context/ScheduleContext";
import { BookingTypes, HoursTypes, ScheduleTypes } from "../_lib/types";
import { TODAY_DAY } from "../_utils/constants";
import ScheduleEvent from "./ScheduleEvent";

export default function Schedule({
  openHours,
  schedule,
  bookings,
  memberId,
}: {
  openHours: HoursTypes | undefined;
  schedule: ScheduleTypes[] | undefined;
  bookings: BookingTypes[] | undefined;
  memberId: number | undefined;
}) {
  const {
    firstDay,
    setFirstDay,
    lastDay,
    setLastDay,
    trainer,
    numOfDaysInRange,
  } = useScheduleContext();
 

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
  const selectedSportsActivities =
    trainer === "all"
      ? schedule
      : schedule?.filter((classes) => classes.trainers.name === trainer);

  function changeWeek(newWeekFirstDay: string, newWeekLastDay: string) {
    setFirstDay(newWeekFirstDay);
    setLastDay(newWeekLastDay);
  }

  function changeWeekForward() {
    const newWeekFirstDay = formatISO(addDays(firstDay, numOfDaysInRange));
    const newWeekLastDay = formatISO(addDays(lastDay, numOfDaysInRange));
    changeWeek(newWeekFirstDay, newWeekLastDay);
  }

  function changeWeekBackwards() {
    const newWeekFirstDay = formatISO(subDays(firstDay, numOfDaysInRange));
    const newWeekLastDay = formatISO(subDays(lastDay, numOfDaysInRange));
    changeWeek(newWeekFirstDay, newWeekLastDay);
  }

  function compareDay(training: ScheduleTypes, eventDate: string) {
    const trainingDateArr = training.date.split("T")[0].split("-").map(Number);
    const trainingDate = format(
      new Date(trainingDateArr[0], trainingDateArr[1] - 1, trainingDateArr[2]),
      "dd.MM.yyyy",
    );

    return eventDate === trainingDate;
  }

  function compareHour(training: ScheduleTypes, hour: string) {
    const trainingHour = training.date.split("T")[1].split(":")[0];
    const callendarHour = hour.split(":")[0];

    return trainingHour === callendarHour;
  }

  return (
    <div className="flex">
      <button
        onClick={changeWeekBackwards}
        className="mx-2 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105 lg:mx-4"
      >
        <ChevronLeftIcon />
      </button>

      <div className="flex w-full justify-between gap-10 border bg-darkGray px-4 text-textLight lg:text-xl">
        <div className="w-full">
          {hoursArr.map((hour, index) => (
            <div
              key={hour}
              className={`border-accentColor/30" flex h-[150px] justify-between border-b p-2 lg:gap-4 ${index === 0 && "h-[180px]"}`}
            >
              <div className="flex w-10 items-center justify-center text-accentColor lg:w-20">
                {hour}
              </div>

              {/* COMPUTER */}

              {datesArr.map((date) => (
                <div
                  key={date}
                  className="flex w-[130px] flex-col text-center text-slate-300 lg:w-[160px]"
                >
                  {index === 0 ? date.slice(0, 5) : ""}
                  {selectedSportsActivities?.map(
                    (training) =>
                      compareDay(training, date) &&
                      compareHour(training, hour) && (
                        <ScheduleEvent
                          key={training.id}
                          training={training}
                          bookings={bookings}
                          memberId={memberId}
                        />
                      ),
                  )}
                </div>
              ))}

              {/* MOBILE */}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={changeWeekForward}
        className="mx-2 w-12 self-start border-2 border-accentColor px-2 py-1 shadow-sm shadow-accentColor transition-transform hover:scale-105 lg:mx-4"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
