import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="m-auto w-3/4 divide-y divide-lightGray py-6">
      <div className="mb-2 grid grid-cols-4 items-center px-2 py-2">
        <div>
          <p>20.05.2024</p>
          <p className="px-4 text-slate-500">13:50</p>
        </div>
        <p>Jan Kowalski</p>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-lime-600">
          zrealizowana
        </p>
        <button className="flex w-full items-center justify-center gap-2 px-4 py-[2px] uppercase tracking-wider">
          <XMarkIcon className="w-8 text-red-500" />
          {/* <span className="font-semibold">Anuluj</span> */}
        </button>
      </div>
      <div className="mb-2 grid grid-cols-4 items-center px-2 py-2">
        <div>
          <p>20.05.2024</p>
          <p className="px-4 text-slate-500">13:50</p>
        </div>
        <p>Jan Kowalski</p>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-red-600">
          anulowana
        </p>
        <button className="flex w-full items-center justify-center gap-2 px-4 py-[2px] uppercase tracking-wider">
          <XMarkIcon className="w-8 text-red-500" />
          {/* <span className="font-semibold">Anuluj</span> */}
        </button>
      </div>
      <div className="mb-2 grid grid-cols-4 items-center px-2 py-2">
        <div>
          <p>20.05.2024</p>
          <p className="px-4 text-slate-500">13:50</p>
        </div>
        <p>Jan Kowalski</p>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-600">
          niepotwierdzona
        </p>
        <button className="flex w-full items-center justify-center gap-2 px-4 py-[2px] uppercase tracking-wider">
          <XMarkIcon className="w-8 text-red-500" />
          {/* <span className="font-semibold">Anuluj</span> */}
        </button>
      </div>
      <div className="mb-2 grid grid-cols-4 items-center px-2 py-2">
        <div>
          <p>20.05.2024</p>
          <p className="px-4 text-slate-500">13:50</p>
        </div>
        <p>Jan Kowalski</p>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-lime-600">
          zrealizowana
        </p>
        <button className="flex w-full items-center justify-center gap-2 px-4 py-[2px] uppercase tracking-wider">
          <XMarkIcon className="w-8 text-red-500" />
          {/* <span className="font-semibold">Anuluj</span> */}
        </button>
      </div>
      <div className="mb-2 grid grid-cols-4 items-center px-2 py-2">
        <div>
          <p>20.05.2024</p>
          <p className="px-4 text-slate-500">13:50</p>
        </div>
        <p>Jan Kowalski</p>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-red-600">
          anulowana
        </p>
        <button className="flex w-full items-center justify-center gap-2 px-4 py-[2px] uppercase tracking-wider">
          <XMarkIcon className="w-8 text-red-500" />
          {/* <span className="font-semibold">Anuluj</span> */}
        </button>
      </div>
      <div className="mb-2 grid grid-cols-4 items-center px-2 py-2">
        <div>
          <p>20.05.2024</p>
          <p className="px-4 text-slate-500">13:50</p>
        </div>
        <p>Jan Kowalski</p>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-600">
          niepotwierdzona
        </p>
        <button className="flex w-full items-center justify-center gap-2 px-4 py-[2px] uppercase tracking-wider">
          <XMarkIcon className="w-8 text-red-500" />
          {/* <span className="font-semibold">Anuluj</span> */}
        </button>
      </div>
    </div>
  );
}
