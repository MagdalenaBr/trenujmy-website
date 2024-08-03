export default function SectionContainer({
  maxWidth = "max-w-[1300px]",
  children,
  flexDirection = "flex-col",
}: {
  children: React.ReactNode;
  maxWidth?: string;
  flexDirection?: string;
}) {
  return (
    <div
      className={`m-auto flex w-11/12 ${maxWidth} ${flexDirection} text-darkGrey items-center justify-between gap-10 pb-20 `}
    >
      {children}
    </div>
  );
}
