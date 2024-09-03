'use client'

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ActionButton from "./ActionButton";

export default function EditMemberDataForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm();

    return <form className="m-auto flex w-3/5 flex-col gap-16">
    <div className="flex flex-col gap-4 pt-10">
      <FormInput
        inputName="firstName"
        register={register}
        errors={errors}
        label="Imię"
        isEditingMode={true}
      />
      <FormInput
        inputName="lastName"
        register={register}
        errors={errors}
        label="Nazwisko"
        isEditingMode={true}
      />
      <FormInput
        inputName="phone"
        register={register}
        errors={errors}
        label="Telefon"
        type="tel"
        isEditingMode={true}
      />
      <FormInput
        inputName="city"
        register={register}
        errors={errors}
        label="Miasto"
        type="text"
        isEditingMode={true}
      />
    </div>
    <ActionButton label="Zmień dane" isSubmitting={isSubmitting} />
  </form>
}