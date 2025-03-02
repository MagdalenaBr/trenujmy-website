import { addDays, addMonths } from "date-fns";
import { TODAY_DAY } from "./constants";

export function calculateEndDay(id: number) {
    switch (id) {
      case 1:
        return addDays(TODAY_DAY, 1);
      case 2:
        return addMonths(TODAY_DAY, 1);
      case 3:
        return addMonths(TODAY_DAY, 6);
      case 4:
        return addMonths(TODAY_DAY, 12);
    }
  }