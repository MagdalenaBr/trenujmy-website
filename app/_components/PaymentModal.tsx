import { useContext } from "react";
import { chooseGymMembershipAction } from "../_lib/action";
import { ModalContext } from "./Modal";
import { GymMembershipTypes } from "../_lib/types";

export default function PaymentModal({
  gymMembership,
}: {
  gymMembership: GymMembershipTypes;
}) {
  const context = useContext(ModalContext);
  if (context === null) return null;
  const { setIsOpen } = context;

  return (
    <div className="z-50 w-80 rounded-md border bg-white p-8 shadow-lg md:w-96">
      <div className="text-center">
        <div className="mt-2 px-7 py-3">
          <p className="text-lg font-bold text-darkGray">
            {`Czy chcesz zakupić karnet na ${gymMembership.gymMembershipName} ?`}
          </p>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => setIsOpen("")}
            className="w-20 rounded-md border-2 border-red-600 px-4 py-2 text-base font-medium text-red-600 shadow-sm hover:bg-red-600/40 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Anuluj
          </button>
          <button
            onClick={() => {
              chooseGymMembershipAction(gymMembership.id, gymMembership.price);
              setIsOpen("");
            }}
            className="w-20 rounded-md border-2 border-accentColor px-4 py-2 text-base font-medium text-accentColor shadow-sm hover:bg-accentColor/40 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Kup
          </button>
        </div>
      </div>
    </div>
  );
}
