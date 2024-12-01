
import { createContext, useContext, useState } from "react";
import { LAST_DAY_IN_WEEK, TODAY_DAY } from "../_utils/constants";

interface ContextTypes {
  firstDay: string;
  setFirstDay: React.Dispatch<React.SetStateAction<string>>;
  lastDay: string;
  setLastDay: React.Dispatch<React.SetStateAction<string>>;
}

const ScheduleContext = createContext<ContextTypes | undefined>(undefined);

export default function ScheduleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firstDay, setFirstDay] = useState(TODAY_DAY);
  const [lastDay, setLastDay] = useState(LAST_DAY_IN_WEEK);

  return (
    <ScheduleContext.Provider
      value={{ firstDay, setFirstDay, lastDay, setLastDay }}
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
