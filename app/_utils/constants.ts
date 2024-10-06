import { addDays, endOfToday, formatISO } from "date-fns";

export const TODAY_DAY = formatISO(new Date());
export const TODAY_DAY_END = formatISO(endOfToday())
export const LAST_DAY_IN_WEEK = formatISO(addDays(TODAY_DAY, 6))