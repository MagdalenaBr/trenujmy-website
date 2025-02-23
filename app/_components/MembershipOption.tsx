"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { imbue } from "../fonts";
import Modal from "./Modal";
import PaymentModal from "./PaymentModal";
import { GymMembershipTypes } from "../_lib/types";

export default function MembershipOption({
  gymMembership,
}: {
  gymMembership: GymMembershipTypes;
}) {
  return (
    <div
      key={gymMembership.gymMembershipName}
      className="flex max-w-[17rem] flex-col justify-center border-2 border-darkGray px-4 py-8 transition-all hover:scale-105"
    >
      <div className="text-center">
        <h2 className={`text-3xl ${imbue.className}`}>
          Karnet na {gymMembership.gymMembershipName}
        </h2>
        {gymMembership.gymMembershipName !== "1 dzień" &&
        gymMembership.gymMembershipName !== "1 miesiąc" ? (
          <p>płatny co miesiąc</p>
        ) : (
          <p className="h-6"></p>
        )}
      </div>
      <p className={`py-10 text-center text-6xl ${imbue.className}`}>
        {gymMembership.price} zł
      </p>
      <ul className="pb-6">
        <li className="flex pb-4">
          <span>
            <CheckIcon className="h-5 px-2 text-accentColor" />
          </span>
          Jednorazowa godzinna konsultacja trenerska
        </li>
        <li className="flex pb-4">
          <span>
            <CheckIcon className="h-5 px-2 text-accentColor" />
          </span>
          Zajęcia grupowe w cenie karnetu
        </li>
        <li className="flex pb-4">
          <span>
            <CheckIcon className="h-5 px-2 text-accentColor" />
          </span>
          Możliwosć rezerwacji zajęć z 7-dniowym wyprzedzeniem
        </li>
      </ul>
      <Modal>
        <Modal.Window modalName="paymentModal">
          <PaymentModal gymMembership={gymMembership} />
        </Modal.Window>
        <Modal.OpenButton openModal="paymentModal">Wybieram</Modal.OpenButton>
      </Modal>
    </div>
  );
}
