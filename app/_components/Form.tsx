"use client";

import { useForm } from "react-hook-form";
import SectionContainer from "./SectionContainer";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../_validation/schema";
import SpinnerSmall from "./SpinnerSmall";
import { sendEmail } from "../_lib/action";
import toast from "react-hot-toast";

type ContactFormTypes = z.infer<typeof ContactFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormTypes>({ resolver: zodResolver(ContactFormSchema) });

  async function onSubmit(data: ContactFormTypes) {
    const send = await sendEmail(data);
    if (send?.success) {
      toast.success("Email został wysłany");
      reset();
    } else {
      toast.error(
        "Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie.",
      );
    }
  }

  console.log(isSubmitting);
  return (
    <SectionContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 border border-darkGray p-6 px-2 shadow-lg shadow-darkGray xl:w-[65%]"
      >
        <h2 className="py-4 text-center text-2xl font-semibold uppercase">
          Formularz kontaktowy
        </h2>
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <label className="just flex flex-col uppercase tracking-wider">
            Imię*
            <input
              type="text"
              {...register("firstName")}
              className="w-80 self-start border border-darkGray bg-transparent py-1 shadow-sm shadow-darkGray outline-accentColor hover:border-accentColor/60"
            />
            {errors.firstName && (
              <span className="pt-1 text-sm normal-case text-red-600">
                {errors.firstName.message?.toString()}
              </span>
            )}
          </label>
          <label className="just flex flex-col uppercase tracking-wider">
            Nazwisko
            <input
              type="text"
              {...register("lastName")}
              className="w-80 self-start border border-darkGray bg-transparent py-1 shadow-sm shadow-darkGray outline-accentColor hover:border-accentColor/60"
            />
            {errors.lastName && (
              <span className="pt-1 text-sm normal-case text-red-600">
                {errors.lastName.message?.toString()}
              </span>
            )}
          </label>
        </div>
        <label className="flex flex-col uppercase tracking-wider">
          E-mail*
          <input
            type="email"
            {...register("email")}
            className="w-full self-start border border-darkGray bg-transparent py-1 shadow-sm shadow-darkGray outline-accentColor hover:border-accentColor/60"
          />
          {errors.email && (
            <span className="pt-1 text-sm normal-case text-red-600">
              {errors.email.message?.toString()}
            </span>
          )}
        </label>
        <label className="flex flex-col uppercase tracking-wider">
          Wiadomość*
          <textarea
            {...register("message")}
            rows={6}
            className="w-full self-start border border-darkGray bg-transparent py-1 shadow-sm shadow-darkGray outline-accentColor hover:border-accentColor/60"
          />
          {errors.message && (
            <span className="pt-1 text-sm normal-case text-red-600">
              {errors.message?.message?.toString()}
            </span>
          )}
        </label>
        <button
          disabled={isSubmitting}
          className="min-w-36 self-center bg-accentColor px-6 py-1 text-xl font-semibold uppercase tracking-wider text-textLight"
        >
          {isSubmitting ? <SpinnerSmall /> : "Wyślij"}
        </button>
        <p className="text-center text-sm">Pola oznaczone * są obowiązkowe.</p>
      </form>
    </SectionContainer>
  );
}
