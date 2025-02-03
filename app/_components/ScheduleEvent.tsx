import { add, addHours, format, formatISO, isBefore } from "date-fns";
import { BookingTypes, MemberDataType, ScheduleTypes } from "../_lib/types";
import { getServerSession } from "next-auth";
import { addBookingAction } from "../_lib/action";
import toast from "react-hot-toast";
import { TODAY_DAY } from "../_utils/constants";
import { pl } from "date-fns/locale/pl";

export default function ScheduleEvent({
  training,
  bookings,
  member,
}: {
  training: ScheduleTypes;
  bookings: BookingTypes[] | undefined;
  member: MemberDataType[] | undefined;

}) {
  const scheduleEventBookings = bookings?.filter(
    (booking) => booking.date === training.date,
  );
  const numOfBookings = scheduleEventBookings?.length;

  const isBooked = scheduleEventBookings?.some(
    (booking) => booking.memberId === member?.at(0)?.id,
  ) as boolean;

  const currentDatePlusOneHour = formatISO(add(TODAY_DAY, { hours: 1 }));

  const isPassedDate = isBefore(training.date, currentDatePlusOneHour);

  const bookingData = {
    memberId: member?.at(0)?.id,
    date: training.date,
    status: "niepotwierdzona",
    trainerId: training.trainerId,
  };

  async function addBooking(bookingData: {
    date: string;
    status: string;
    trainerId: number;
    memberId: number;
  }) {
    const result = await addBookingAction(bookingData, isBooked)
    if (result?.message) {
      toast.error(result?.message);
    } else {
      toast.success("Zajęcia zostały zarezerwowane.");
    }
  }

  return (
    <div className="h-full w-full bg-accentColor/10 p-2 text-start text-[12px] leading-5 transition-transform hover:scale-105">
      <div className="flex justify-between pb-2">
        <p>
          {format(new Date(training.date.split("T")[0]), "dd MMM", {
            locale: pl,
          })}
        </p>
        <p>{training.date.split("T")[1].slice(0, 5)}</p>
        <span> 50 min</span>
      </div>
      <p className="uppercase text-accentColor">{training.name}</p>
      <p className="uppercase">{training.trainers.name}</p>
      <p className="pb-2 text-end">
        {numOfBookings}/{training.numOfPlaces}
      </p>
      <button
        disabled={isBooked || isPassedDate}
        onClick={() => addBooking(bookingData)}
        className={`w-full bg-accentColor p-1 font-semibold uppercase tracking-wider hover:bg-transparent hover:text-accentColor ${isBooked && `bg-transparent text-accentColor`} ${isPassedDate && `bg-transparent text-gray-500 hover:text-gray-500`} `}
      >
        {isBooked ? " Zarezerwowano" : "Zarezerwuj"}
      </button>
    </div>
  );
}
