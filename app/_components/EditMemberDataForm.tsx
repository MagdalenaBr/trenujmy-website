"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { editMemberDataAction } from "../_lib/action";
import { MemberDataType } from "../_lib/types";
import { EditDataFormSchema } from "../_validation/editDataFormSchema";
import ActionButton from "./ActionButton";
import FormInput from "./FormInput";

type EditDataTypes = z.infer<typeof EditDataFormSchema>;

export default function EditMemberDataForm({
  memberData,
}: {
  memberData: MemberDataType;
}) {
  const { id, name, phone, city } = memberData;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditDataTypes>({ resolver: zodResolver(EditDataFormSchema) });

  async function onSubmit(data: EditDataTypes) {
    const result = await editMemberDataAction(id, data);
    if (result?.message) {
      toast.error(result?.message);
    } else {
      toast.success("Dane zostały zmienione.");
    }
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto flex w-3/5 flex-col gap-16"
    >
      <div className="flex flex-col gap-4 pt-10">
        <FormInput
          inputName="firstName"
          register={register}
          errors={errors}
          label="Imię"
          isEditingMode={true}
          defaultValue={name.split(" ")[0]}
        />
        <FormInput
          inputName="lastName"
          register={register}
          errors={errors}
          label="Nazwisko"
          isEditingMode={true}
          defaultValue={name.split(" ")[1]}
        />
        <FormInput
          inputName="phone"
          register={register}
          errors={errors}
          label="Telefon"
          type="tel"
          isEditingMode={true}
          defaultValue={phone}
        />
        <FormInput
          inputName="city"
          register={register}
          errors={errors}
          label="Miasto"
          type="text"
          isEditingMode={true}
          defaultValue={city}
        />
      </div>
      <ActionButton label="Zmień dane" isSubmitting={isSubmitting} />
    </form>
  );
}
