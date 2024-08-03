export default function SportAactivityContainer({
  text,
  label,
  children,
}: {
  label: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-[40] mb-20 h-72 w-72 md:mb-20">
      {children}
      <div className="z-[50] flex h-full w-full flex-col justify-center gap-2 bg-black/40 text-center">
        <h2 className="bg-black/50 font-semibold uppercase text-textLight backdrop-blur-sm">
          {label}
        </h2>
        <p className="text-[12px]">{text}</p>
      </div>
    </div>
  );
}
