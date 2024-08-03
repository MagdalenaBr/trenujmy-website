export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-11/12 max-w-[1300px] m-auto">{children}</div>;
}
