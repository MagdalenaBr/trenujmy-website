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
}

const ScheduleContext = createContext<ContextTypes | undefined>(undefined);

export default function ScheduleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // export const LAST_DAY_IN_WEEK = formatISO(addDays(TODAY_DAY, 6))

  const windowWidth = useWindowWidth();

  let lastDayInRange = formatISO(
    addDays(
      TODAY_DAY,
      windowWidth
        ? windowWidth <= 640
          ? 0
          : windowWidth <= 1024
            ? 2
            : windowWidth <= 1280
              ? 3
              : windowWidth <= 1536
                ? 4
                : windowWidth > 1536
                  ? 6
                  : 0
        : 6,
    ),
  );
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
