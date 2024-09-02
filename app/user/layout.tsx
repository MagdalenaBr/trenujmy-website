import Link from "next/link";
import SectionContainer from "../_components/SectionContainer";
import { imbue } from "../fonts";
import { getServerSession } from "next-auth";
import UserNav from "../_components/UserNav";

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
            <UserNav>{children}</UserNav>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
