import UserPieChart from "@/app/_components/UserPieChart";
import {
  getMemberBookings,
  getMemberData,
  getMemberPurchasedMemberships,
} from "@/app/_lib/data";
import { TODAY_DAY, TODAY_DAY_END } from "@/app/_utils/constants";
import { PencilIcon } from "@heroicons/react/24/outline";
import { format, parseISO } from "date-fns";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession();
  const memberData = await getMemberData(session?.user?.email as string);
  const { id, name, email, phone, city } = memberData[0];
  const memberBookings = await getMemberBookings(id);
  const memberName = name
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  const memberPurchasedMemberships = await getMemberPurchasedMemberships(id);

  const activeMembership = memberPurchasedMemberships?.filter(
    (membership) =>
      TODAY_DAY >= membership.startDay &&
      TODAY_DAY_END <= membership.endDay &&
      membership.isValid,
  )[0];

  return (
    <div className="flex w-full gap-24 px-6">
      <div className="w-1/4 pt-10">
        <h3 className="text-center text-xl font-semibold uppercase">
          Rezerwacje
        </h3>
        <UserPieChart memberBookings={memberBookings} />
      </div>
      <div className="flex w-3/4 flex-col">
        <div className="divide-y divide-lightGray px-2 py-20">
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">Imie i nazwisko</h3>
            <p>{name}</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">Telefon</h3>
            <p className="">{phone}</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">E-mail</h3>
            <p>{email.toLowerCase()}</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">Miasto</h3>
            <p>{city[0].toUpperCase() + city.substring(1)}</p>
          </div>

          <div className="flex w-full justify-between py-2">
            <h3 className="font-semibold uppercase">Aktywny karnet</h3>
            <div className="text-end">
              {activeMembership ? (
                <>
                  <p>{activeMembership?.gymMembership.gymMembershipName}</p>
                  <p>{`${format(parseISO(activeMembership?.startDay), "dd.MM.yyyy")} - ${format(parseISO(activeMembership?.endDay), "dd.MM.yyyy")}`}</p>
                </>
              ) : (
                <p>Brak aktywnego karnetu</p>
              )}
            </div>
          </div>
        </div>
        <div className="self-end">
          <Link
            href="/user/edit-profile"
            className="flex justify-end gap-2 px-2 py-2 uppercase text-accentColor"
          >
            <PencilIcon className="w-5" />
            <span className="">Edytuj dane</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
