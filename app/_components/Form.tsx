"use client";

import SectionContainer from "./SectionContainer";

export default function Form() {
  return (
    <SectionContainer>
      <form className="flex w-[65%] flex-col gap-8 border border-darkGray p-6 shadow-lg shadow-darkGray">
        <h2 className="py-4 text-center text-2xl uppercase font-semibold">
          Formularz kontaktowy
        </h2>
        <div className="flex justify-between">
          <div className="just flex flex-col">
            <label className="uppercase tracking-wider">Imię*</label>
            <input className="w-80 self-start border border-darkGray bg-transparent py-1 outline-accentColor hover:border-accentColor/60 shadow-sm shadow-darkGray" />
          </div>
          <div className="just flex flex-col">
            <label className="uppercase tracking-wider">Nazwisko</label>
            <input className="w-80 self-start border border-darkGray bg-transparent py-1 outline-accentColor hover:border-accentColor/60 shadow-sm shadow-darkGray" />
          </div>
        </div>
        <div>
          <div className="just flex flex-col">
            <label className="uppercase tracking-wider">E-mail*</label>
            <input className="w-full self-start border border-darkGray bg-transparent py-1 outline-accentColor hover:border-accentColor/60 shadow-sm shadow-darkGray" />
          </div>
        </div>
        <div>
          <div className="just flex flex-col">
            <label className="uppercase tracking-wider">Wiadomość*</label>
            <textarea
              rows={6}
              className="w-full self-start border border-darkGray bg-transparent py-1 outline-accentColor hover:border-accentColor/60 shadow-sm shadow-darkGray"
            />
          </div>
        </div>
        <p className="text-sm text-center">Pola oznaczone * są obowiązkowe.</p>
      </form>
    </SectionContainer>
  );
}
