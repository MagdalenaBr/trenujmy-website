import { supabase } from "./supabase";
import {
  BookingsDataType,
  MemberDataType,
  PurchasedMembershipsTypes,
} from "./types";

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

export async function getMemberBookings(
  memberId: number,
  selectedBookingStatus?: string | null,
): Promise<BookingsDataType[]> {
  let query = supabase
    .from("bookings")
    .select("*, trainers(name)")
    .eq("memberId", memberId);

  if (selectedBookingStatus) query = query.eq("status", selectedBookingStatus);

  const { data: bookings, error } = await query.order("date", {
    ascending: false,
  });
  if (error) throw new Error("Dane odnośnie rezerwacji nie zostały pobrane.");
  return bookings;
}

export async function getMemberPurchasedMemberships(
  memberId: number,
): Promise<PurchasedMembershipsTypes[] | null> {
  let { data: purchasedMemberships, error } = await supabase
    .from("purchasedMemberships")
    .select("*,  gymMembership(gymMembershipName)")
    .eq("memberId", memberId);

  if (error)
    throw new Error(`Dane dotyczące aktywnego karnetu nie zostały pobrane.`);
  return purchasedMemberships
}
