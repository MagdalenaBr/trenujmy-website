import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function FormInput({
  label,
  register,
  errors,
  inputName,
  type = "text",
}: {
  label: string;
  register: UseFormRegister<any>;
  type?: string;
  errors: FieldErrors<any>;
  inputName: string;
}) {
  return (
    <label className="flex w-full flex-col uppercase tracking-wider">
      {inputName === 'lastNameContact' ? label : `${label}*`}
      <input
        type={type}
        {...register(inputName)}
        className="w-full self-start border border-darkGray bg-transparent py-1 shadow-sm shadow-darkGray outline-accentColor hover:border-accentColor/60"
      />
      {errors[inputName] && (
        <span className="pt-1 text-sm normal-case text-red-600">
          {errors[inputName].message?.toString()}
        </span>
      )}
    </label>
  );
}
