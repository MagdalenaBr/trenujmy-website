import SpinnerSmall from "./SpinnerSmall";

export default function ActionButton({
  isSubmitting,
  label,
}: {
  isSubmitting: boolean;
  label: string;
}) {
  return (
    <button
      disabled={isSubmitting}
      className="min-w-36 self-center bg-accentColor px-6 py-1 text-xl font-semibold uppercase tracking-wider text-textLight"
    >
      {isSubmitting ? <SpinnerSmall /> : label}
    </button>
  );
}
