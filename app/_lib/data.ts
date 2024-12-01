import { supabase } from "./supabase";
import {
  BookingsDataType,
  BookingTypes,
  HoursTypes,
  MemberDataType,
  PurchasedMembershipsTypes,
  ScheduleTypes,
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
    .eq("memberId", memberId).order("date", { ascending: false });

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
  const { data: purchasedMemberships, error } = await supabase
    .from("purchasedMemberships")
    .select("*,  gymMembership(gymMembershipName)")
    .eq("memberId", memberId);

  if (error)
    throw new Error(`Dane dotyczące aktywnego karnetu nie zostały pobrane.`);
  return purchasedMemberships;
}

export async function getOpenHours(): Promise<HoursTypes[]> {
  const { data: openHours, error } = await supabase
    .from("openHours")
    .select("*");

  if (error)
    throw new Error(`Wystąpił problem z wyświetleniem godzin otwarcia.`);

  return openHours;
}

export async function getSchedule(): Promise<ScheduleTypes[]> {
  const { data: schedule, error } = await supabase
    .from("schedule")
    .select("*, trainers(name)").order("date");;

  if (error) throw new Error("Wystąpił błąd podczas pobierania grafiku zajęć.");

  console.log(schedule);

  return schedule;
}

export async function getBookings(): Promise<BookingTypes[]> {
  const { data: bookings, error } = await supabase.from("bookings").select("*").order("date", { ascending: false });

  if (error) throw new Error("Wystąpił błąd podczas pobierania rezerwacji.");

  return bookings;
}
