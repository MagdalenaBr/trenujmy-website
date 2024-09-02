import { XMarkIcon } from "@heroicons/react/24/outline";
import { BookingsDataType } from "../_lib/types";
import clsx from "clsx";
import { format, formatISO, isBefore, parseISO } from "date-fns";

export default function Booking({ booking }: { booking: BookingsDataType }) {
  const {
    date,
    trainers: { name: trainerName },
    status,
  } = booking;
  const day = format(parseISO(date.split("T")[0]), 'dd.MM.yyyy')
  const todayDay = formatISO(new Date());

  const dayIsBeforeToday = isBefore(todayDay, date);
  return (
    <div className=" grid grid-cols-4 items-center px-2 py-2">
      <div>
        <p>{day}</p>
        <p className="px-4 text-slate-500">{date.split("T")[1]}</p>
      </div>
      <p>{trainerName}</p>
      <p
        className={clsx(`text-[12px] font-semibold uppercase tracking-wider`, {
          "text-[#8a1616]": status === "anulowana",
          "text-[#484172]": status === "niepotwierdzona",
          "text-[#5db324]": status === "zrealizowana",
        })}
      >
        {status}
      </p>
      {dayIsBeforeToday && status === "niepotwierdzona" && (
        <button className="flex w-full items-center justify-end text-sm gap-2 px-4 py-[2px] uppercase tracking-wider">
          {/* <XMarkIcon className="w-8 text-red-500" /> */}
          <span className="font-semibold border  text-red-700 border-red-500 px-2 ">Anuluj</span>
        </button>
      )}
    </div>
  );
}
