import { PencilIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex w-full px-6">
      <div className="w-1/3">
        <p>WYKRES</p>
      </div>
      <div className="flex w-2/3 flex-col">
        <div className="divide-y divide-lightGray px-2 py-28">
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">Imie i nazwisko</h3>
            <p>Mariusz Kochanowski</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">Telefon</h3>
            <p className="">545854565</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">E-mail</h3>
            <p>mariuszkochanowski@test.codm</p>
          </div>
          <div className="flex w-full justify-between py-2">
            <h3 className="uppercase">Miasto</h3>
            <p>Lublin</p>
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
