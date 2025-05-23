import EditMemberDataForm from "@/app/_components/EditMemberDataForm";
import { getMemberData } from "@/app/_lib/data";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Edytuj profil",
};

export default async function Page() {
  const session = await getServerSession();
  const memberData = await getMemberData(session?.user?.email as string);

  return <EditMemberDataForm memberData={memberData[0]} />;
}
