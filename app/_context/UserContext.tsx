import { getServerSession } from "next-auth";
import { getMemberBookings, getMemberData } from "../_lib/data";


export default async function UserContext() {
    const session = await getServerSession();
    const memberData = await getMemberData(session?.user?.email as string);
    const { id, name, email, phone, city } = memberData[0];
    const memberBookings= await getMemberBookings(id)
}