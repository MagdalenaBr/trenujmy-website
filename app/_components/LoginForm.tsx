"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { LoginSchema } from "../_validation/loginSchema";
import ActionButton from "./ActionButton";
import FormInput from "./FormInput";

type LoginFormTypes = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormTypes>({ resolver: zodResolver(LoginSchema) });

  async function onSubmit(
    data: LoginFormTypes,
    e: BaseSyntheticEvent | undefined,
  ) {
    e?.preventDefault();
    const response = await signIn("credentials", { ...data, redirect: false });

    if (response?.error) {
      toast.error(response.error);
    }
    if (!response?.error) {
      router.push("/user/profile");
      router.refresh()
    }
    reset();
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
