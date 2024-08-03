export default function SectionContainer({
  maxWidth = "max-w-[1300px]",
  children,
}: {
  children: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    <div
      className={`m-auto flex w-11/12 ${maxWidth} flex-col items-center justify-between gap-10 pt-20 text-textLight md:flex-row md:pt-20`}
    >
      {children}
    </div>
  );
}
