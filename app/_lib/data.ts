import { supabase } from "./supabase";

interface MemberDataType {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  city: string;
}

export async function getTrainers() {
  const { data: trainers, error } = await supabase.from("trainers").select("*");

  if (error) throw new Error("Dane trenerów nie zostały pobrane");
  return trainers;
}

export async function getGymMembershipPrices() {
  const { data: gymMembershipPrices, error } = await supabase
    .from("gymMembership")
    .select("*");
  if (error)
    throw new Error(
      "Wystąpił błąd podczas pobieraaania danych na temat karnetów.",
    );

  return gymMembershipPrices;
}

export async function getMemberData(email: string): Promise<MemberDataType[]> {
  const { data: members, error } = await supabase
    .from("members")
    .select("*")
    .eq("email", email);

  if (error) throw new Error("Użytkownik nie został znaleziony.");
  return members;
}
