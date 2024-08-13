"use client";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ActionButton from "./ActionButton";
import { z } from "zod";
import { SignUpFormSchema } from "../_validation/signUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpFormTypes= z.infer<typeof SignUpFormSchema>

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormTypes>({resolver: zodResolver(SignUpFormSchema)});

  function onSubmit(data: SignUpFormTypes) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-auto flex flex-col gap-10 divide-y-2 divide-accentColor/30 border border-darkGray p-6 shadow-lg shadow-darkGray lg:w-1/2">
      <div className="flex flex-col gap-8 pb-4">
        <FormInput
          inputName="email"
          register={register}
          errors={errors}
          label="E-mail"
          type="email"
        />
        <div className="flex gap-8">
          <FormInput
            inputName="password"
            register={register}
            errors={errors}
            label="Hasło"
            type="password"
          />
          <FormInput
            inputName="confirmPassword"
            register={register}
            errors={errors}
            label="Powtórz hasło"
            type="password"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-10">
        <div className="flex gap-8">
          <FormInput
            inputName="firstName"
            register={register}
            errors={errors}
            label="Imię"
          />
          <FormInput
            inputName="lastName"
            register={register}
            errors={errors}
            label="Nazwisko"
          />
        </div>
        <div className="flex gap-8">
          <label className="flex w-full flex-col uppercase tracking-wider">
            Płeć
            <select
              {...register("gender")}
              className="w-full self-start border border-darkGray bg-transparent py-1 shadow-sm shadow-darkGray outline-accentColor hover:border-accentColor/60"
            >
              <option hidden></option>
              <option className="bg-textLight">Kobieta</option>
              <option className="bg-textLight">Mężczyzna</option>
              <option className="bg-textLight">Inna</option>
            </select>
            {errors.gender && (
              <span className="pt-1 text-sm normal-case text-red-600">
                {errors.gender.message?.toString()}
              </span>
            )}
          </label>

          <FormInput
            inputName="phone"
            register={register}
            errors={errors}
            label="Telefon"
            type="tel"
          />
        </div>
        <FormInput
          inputName="city"
          register={register}
          errors={errors}
          label="Miasto"
          type="text"
        />
      </div>
      <ActionButton label="Zarejestruj się" isSubmitting={isSubmitting} />
    </form>
  );
}
