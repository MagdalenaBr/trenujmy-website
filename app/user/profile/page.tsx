import UserPieChart from "@/app/_components/UserPieChart";
import { getMemberBookings, getMemberData } from "@/app/_lib/data";
import { PencilIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();
  const memberData = await getMemberData(session?.user?.email as string);
  const { id, name, email, phone, city } = memberData[0];
  const memberBookings= await getMemberBookings(id)
  
  const memberName =  name.split(' ').map(word => {
    return word[0].toUpperCase() + word.substring(1)
  }).join(' ')
  
  return (
    <div className="flex w-full px-6 gap-24">
      <div className="w-1/4 pt-10">
      <h3 className="uppercase text-center text-xl font-semibold">Rezerwacje</h3>
        <UserPieChart memberBookings={memberBookings}/>
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
            <h3 className="uppercase font-semibold">Aktywny karnet</h3>
            <div className="text-end">
              <p>3 miesiące</p> 
              <p>20.06.2024 - 20.09.2024</p>
            </div>
          </div>
        </div>
        <div className="self-end">
          <button className="flex justify-end gap-2 px-2 py-2 uppercase text-accentColor">
            <PencilIcon className="w-5" />
            <span className="">Edytuj dane</span>
          </button>
        </div>
      </div>
    </div>
  );
}
