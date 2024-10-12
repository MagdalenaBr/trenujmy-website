import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { getOpenHours } from "../_lib/data";

export default async function Footer() {
  const { openHour, closeHour } = (await getOpenHours()).at(0);
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-darkGray pt-10 text-textLight">
      <div className="flex w-11/12 max-w-[1300px] flex-col items-center gap-6 pb-10 md:flex-row md:justify-between">
        <Logo />
        <div className="w-[12rem]">
          <h3 className="pb-4 text-center uppercase text-accentColor/70">
            Kontakt
          </h3>
          <div>
            <p className="flex gap-2 pb-2">
              <DevicePhoneMobileIcon className="w-6 text-accentColor/50" />
              <span>+48 123456789</span>
            </p>
            <p className="flex gap-2 pb-2">
              <EnvelopeIcon className="w-6 text-accentColor/50" />
              <span>trenujmy@test.com</span>
            </p>
          </div>
        </div>
        <div className="w-[12rem]">
          <h3 className="pb-4 text-center uppercase text-accentColor/70">
            Godziny otwarcia
          </h3>
          <p className="pb-2">Poniedziałek - Sobota</p>
          <p className="pb-2">
            {openHour.slice(0, -3)} - {closeHour.slice(0, -3)}
          </p>
        </div>
        <div className="w-[12rem]">
          <h3 className="pb-4 text-center uppercase text-accentColor/70">
            Adres
          </h3>
          <p className="pb-2">ul. Koszary-wiślane 0</p>
          <p className="pb-2">24-150 Lublin</p>
        </div>
      </div>
      <p>Copyright © 2024 Magdalena Broniszewska</p>
    </footer>
  );
}
