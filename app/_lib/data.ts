import { supabase } from "./supabase";

export async function getTrainers() {
  let { data: trainers, error } = await supabase.from("trainers").select("*");

  if (error) throw new Error("Dane trenerów nie zostały pobrane");
  return trainers;
}
