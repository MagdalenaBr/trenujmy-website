import { supabase } from "./supabase";

export async function getTrainers() {
  const { data: trainers, error } = await supabase.from("trainers").select("*");

  if (error) throw new Error("Dane trenerów nie zostały pobrane");
  return trainers;
}

export async function getGymMembershipPrices() {
  const { data: gymMembershipPrices, error } = await supabase
    .from("gymMembership")
    .select("*");
  if (error) throw new Error("Wystąpił błąd podczas pobieraaania danych na temat karnetów.");

  return gymMembershipPrices;
}
