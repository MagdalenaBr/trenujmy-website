export default function TextContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="self-start text-center leading-loose tracking-wider lg:text-lg">
      {children}
    </p>
  );
}
