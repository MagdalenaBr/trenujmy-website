export default function SectionContainer({
  maxWidth = "max-w-[1300px]",
  children,
  flexDirection = "flex-col",
  gap = 'gap-10'
}: {
  children: React.ReactNode;
  maxWidth?: string;
  flexDirection?: string;
  gap?: string
}) {
  return (
    <div
      className={`m-auto flex w-11/12 ${maxWidth} ${flexDirection} text-darkGrey items-center justify-between ${gap} pb-20 `}
    >
      {children}
    </div>
  );
}
