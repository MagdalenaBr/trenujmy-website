import { addHours } from "date-fns";

export default function ScheduleEvent({ training}) {
  return (
    <div className="m-2 h-full w-full bg-accentColor/10 p-2 text-start text-[12px] leading-5 hover:scale-105 transition-transform ">
      <div className="flex justify-between pb-2">
        <p>{training.date.split('T')[1].slice(0,5)}</p>
        <span> 50 min</span>
      </div>
      <p className="uppercase text-accentColor">{training.name}</p>
      <p className="uppercase">{training.trainers.name}</p>
      <p className="pb-2 text-end">2/{training.numOfPlaces}</p>
      <button className="w-full bg-accentColor p-1 font-semibold uppercase tracking-wider hover:bg-transparent hover:text-accentColor">
        Zarezerwuj
      </button>
    </div>
  );
}
