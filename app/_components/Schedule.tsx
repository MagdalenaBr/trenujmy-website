"use client";

import { addDays, eachDayOfInterval, format, formatISO } from "date-fns";
import ScheduleEvent from "./ScheduleEvent";
import { TODAY_DAY } from "../_utils/constants";

export default function Schedule({ datesArr }: { datesArr: string[] }) {
  const lastDayInWeek = addDays(TODAY_DAY, 6);

  // const datesArr = eachDayOfInterval({ start: TODAY_DAY, end: lastDayInWeek }).map(day=> format(day, 'dd.MM'));

  // const dayArr = [
  //   "06.09",
  //   "07.09",
  //   "08.09",
  //   "09.09",
  //   "10.09",
  //   "11.09",
  //   "12.09",
  // ];
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
  );
}
