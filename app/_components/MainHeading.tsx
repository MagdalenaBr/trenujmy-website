import { imbue } from "../fonts";


export default function MainHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1
      className={`py-12 text-center text-6xl  lg:text-8xl uppercase text-darkGray ${imbue.className}`}
    >
      {children}
    </h1>
  );
}
