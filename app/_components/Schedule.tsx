"use client";

export default function Schedule() {
  const dayArr = [
    "06.09",
    "07.09",
    "08.09",
    "09.09",
    "10.09",
    "11.09",
    "12.09",
  ];
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
            className="flex h-[150px] justify-between gap-4 border-b border-accentColor/30"
          >
            <div className="flex w-[80px] items-center justify-center text-accentColor">
              {hour}
            </div>
            {dayArr.map((date) => (
              <div
                key={date}
                onClick={() => console.log(date, hour)}
                className="flex w-[160px] flex-col text-center text-slate-300"
              >
                {index === 0 ? date : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
