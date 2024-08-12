import { Imbue } from "next/font/google";
import { Roboto } from "next/font/google";

export const imbue = Imbue({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
