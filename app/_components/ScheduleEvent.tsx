export default function ScheduleEvent() {
  return (
    <div className="m-2 h-full w-full bg-accentColor/10 p-2 text-start text-sm">
      <div className="flex justify-between pb-2">
        <p>8:00</p>
        <span> 50 min</span>
      </div>
      <p className="uppercase text-accentColor">joga</p>
      <p className="uppercase">Beata Wolna</p>
      <p className="pb-2 text-end">2/10</p>
      <button className="w-full bg-accentColor p-1 font-semibold uppercase tracking-wider">
        Zarezerwuj
      </button>
    </div>
  );
}
