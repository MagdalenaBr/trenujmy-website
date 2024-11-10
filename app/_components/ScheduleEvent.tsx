import { addHours } from "date-fns";
import { BookingTypes, ScheduleTypes } from "../_lib/types";
import { getServerSession } from "next-auth";
import { addBookingAction } from "../_lib/action";
import toast from "react-hot-toast";

export default function ScheduleEvent({
  training,
  bookings,
  memberId,
}: {
  training: ScheduleTypes;
  bookings: BookingTypes[] | undefined;
  memberId: number | undefined;
}) {
  const scheduleEventBookings = bookings?.filter(
    (booking) => booking.date === training.date,
  );
  const numOfBookings = scheduleEventBookings?.length;

  const isBooked = !!scheduleEventBookings?.filter(
    (booking) => booking.memberId === memberId,
  ) 

  console.log(isBooked);

  const bookingData = {
    memberId,
    date: training.date,
    status: "niepotwierdzona",
    trainerId: training.trainerId,
  };

  // console.log(bookingData);

  async function addBooking(bookingData) {
    const result = await addBookingAction(bookingData);
    if (result?.message) {
      toast.error(result?.message);
    } else {
      toast.success("Zaajęcia zostały zarezerwowane.");
    }
  }

  return (
    <div className="m-2 h-full w-full bg-accentColor/10 p-2 text-start text-[12px] leading-5 transition-transform hover:scale-105">
      <div className="flex justify-between pb-2">
        <p>{training.date.split("T")[1].slice(0, 5)}</p>
        <span> 50 min</span>
      </div>
      <p className="uppercase text-accentColor">{training.name}</p>
      <p className="uppercase">{training.trainers.name}</p>
      <p className="pb-2 text-end">
        {numOfBookings}/{training.numOfPlaces}
      </p>
      <button
        disabled={isBooked}
        onClick={() => addBooking(bookingData)}
        className="w-full bg-accentColor p-1 font-semibold uppercase tracking-wider hover:bg-transparent hover:text-accentColor"
      >
        {!isBooked ? " Zarezerwuj" : "Zarezerwowano"}
      </button>
    </div>
  );
}
