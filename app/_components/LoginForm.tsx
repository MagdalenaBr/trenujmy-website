"use client";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ActionButton from "./ActionButton";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form className="m-auto flex flex-col gap-8 border border-darkGray p-6 shadow-lg shadow-darkGray lg:w-1/4">
      <FormInput
        inputName="email"
        register={register}
        errors={errors}
        label="E-mail"
        type="email"
      />
      <FormInput
        inputName="password"
        register={register}
        errors={errors}
        label="Hasło"
        type="password"
      />
      <ActionButton label="Zaloguj się" isSubmitting={isSubmitting} />
    </form>
  );
}
