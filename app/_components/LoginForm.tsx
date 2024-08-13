"use client";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ActionButton from "./ActionButton";
import { z } from "zod";
import { LoginSchema } from "../_validation/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginFormTypes = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormTypes>({ resolver: zodResolver(LoginSchema) });

  function onSubmit(data: LoginFormTypes) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto flex flex-col gap-8 border border-darkGray p-6 shadow-lg shadow-darkGray lg:w-1/4"
    >
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
