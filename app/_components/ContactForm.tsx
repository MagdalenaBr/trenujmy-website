"use client";

import { useForm } from "react-hook-form";
import SectionContainer from "./SectionContainer";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../_validation/contactFormSchema";
import SpinnerSmall from "./SpinnerSmall";
import { sendEmail } from "../_lib/action";
import toast from "react-hot-toast";
import FormInput from "./FormInput";
import ActionButton from "./ActionButton";

type ContactFormTypes = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
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
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <FormInput
            label="Imię"
            inputName="firstName"
            register={register}
            errors={errors}
          />
          <FormInput
            label="Nazwisko"
            inputName="lastNameContact"
            register={register}
            errors={errors}
          />
        </div>
        <FormInput
          label="E-mail"
          inputName="email"
          type="email"
          register={register}
          errors={errors}
        />
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
        <ActionButton isSubmitting={isSubmitting} label="Wyślij" />
        <p className="text-center text-sm">Pola oznaczone * są obowiązkowe.</p>
      </form>
    </SectionContainer>
  );
}
