import { MegaphoneIcon } from "@heroicons/react/16/solid";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-darkGray pt-10 text-textLight">
      <div className="flex w-11/12 max-w-[1300px] justify-between pb-10">
        <Logo />
        <div>
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
        <div>
          <h3 className="pb-4 text-center uppercase text-accentColor/70">
            Godziny otwarcia
          </h3>
          <p className="pb-2">Poniedziałek - Sobota</p>
          <p className="pb-2">8:00 - 20:00</p>
        </div>
        <div>
          <h3 className="pb-4 text-center uppercase text-accentColor/70">
            Adres
          </h3>
          <p className="pb-2">ul. Koszary 0</p>
          <p className="pb-2">24-150 Lublin</p>
        </div>
      </div>
      <p>Copyright © 2024 Magdalena Broniszewska</p>
    </footer>
  );
}
