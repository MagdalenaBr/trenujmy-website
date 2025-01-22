"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TODAY_DAY } from "../_utils/constants";
import { addDays, formatISO } from "date-fns";
import useWindowWidth from "../_hooks/useWindowWidth";

interface ContextTypes {
  firstDay: string;
  setFirstDay: React.Dispatch<React.SetStateAction<string>>;
  lastDay: string;
  setLastDay: React.Dispatch<React.SetStateAction<string>>;
  trainer: string;
  setTrainer: React.Dispatch<React.SetStateAction<string>>;
  lastDayInRange: string;
  numOfDaysInRange: number;
}

const ScheduleContext = createContext<ContextTypes | undefined>(undefined);

export default function ScheduleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // export const LAST_DAY_IN_WEEK = formatISO(addDays(TODAY_DAY, 6))

  const windowWidth = useWindowWidth();
  const numOfDaysInRange = windowWidth
    ? windowWidth <= 640
      ? 1
      : windowWidth <= 1024
        ? 3
        : windowWidth <= 1280
          ? 4
          : windowWidth <= 1536
            ? 5
            : windowWidth > 1536
              ? 7
              : 1
    : 7;

  let lastDayInRange = formatISO(addDays(TODAY_DAY, numOfDaysInRange - 1));

  const [firstDay, setFirstDay] = useState(TODAY_DAY);
  const [lastDay, setLastDay] = useState(lastDayInRange);
  const [trainer, setTrainer] = useState("all");

  useEffect(() => setLastDay(lastDayInRange), [lastDayInRange]);

  return (
    <ScheduleContext.Provider
      value={{
        firstDay,
        setFirstDay,
        lastDay,
        setLastDay,
        trainer,
        setTrainer,
        lastDayInRange,
        numOfDaysInRange,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useScheduleContext() {
  const context = useContext(ScheduleContext);
  if (context === undefined)
    throw new Error(
      "ScheduleContext was used outside of ScheduleContextProvider",
    );

  return context;
}
