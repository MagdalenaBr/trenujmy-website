import Link from "next/link";
import SectionContainer from "../_components/SectionContainer";
import { imbue } from "../fonts";
import { getServerSession } from "next-auth";

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <SectionContainer>
          <div className="w-5/6">
            <h1 className={`${imbue.className} self-start py-10 text-3xl`}>
              Witaj, {session?.user?.name && session?.user?.name?.split(' ')[0][0].toUpperCase() + session?.user?.name?.split(' ')[0].substring(1)}
            </h1>
            <div className="flex w-full flex-col items-center gap-10">
              <div className="flex w-full justify-center gap-10 bg-darkGray py-4 text-xl uppercase text-textLight">
                <Link href={"/user/profile"}>Profil</Link>
                <Link href={"/user/bookings"}>Rezerwacje</Link>
              </div>
              <div className="w-full border border-lightGray h-[28rem] overflow-y-auto">{children}</div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
