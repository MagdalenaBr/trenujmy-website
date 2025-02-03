"use server";

import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "../_components/EmailTemplate";
import { ContactFormSchema } from "../_validation/contactFormSchema";
import { SignUpFormSchema } from "../_validation/signUpFormSchema";
import { supabase } from "./supabase";
import { getServerSession } from "next-auth";
import { TODAY_DAY } from "../_utils/constants";
import { getMemberPurchasedMemberships } from "./data";

type ContactFormTypes = z.infer<typeof ContactFormSchema>;
type SignupFormTypes = z.infer<typeof SignUpFormSchema>;

const resend = new Resend(process.env.RESEND_KEY);

export async function sendEmail(data: ContactFormTypes) {
  const result = ContactFormSchema.safeParse(data);
  if (result.success) {
    const { firstName, lastNameContact, email, message } = result.data;
    console.log(lastNameContact);
    try {
      const data = await resend.emails.send({
        from: "Trenuj|My <onboarding@resend.dev>",
        to: ["trenujmy3@gmail.com"],
        subject: "Wiadomość z formularza kontaktowego",
        react: EmailTemplate({
          firstName,
          lastName: lastNameContact,
          email,
          message,
        }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export async function signupAction(formData: SignupFormTypes) {
  const { firstName, lastName, city, phone, gender, email, password } =
    formData;
  try {
    const response = await sql`SELECT * FROM users WHERE email=${email}`;
    let user = response.rows[0];
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!!user) throw new Error("Podany e-mail został już zarejestrowany");
    if (!user) {
      //Add member email and password to vercel storage
      const addResponse =
        await sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`;
      //Add member to supabase database
      const userData = {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        gender,
        city,
      };
      const { data, error } = await supabase
        .from("members")
        .insert([userData])
        .select();
      if (error) throw new Error("Użytkownik nie został dodany.");
    }
  } catch (error: any) {
    return { message: error.message };
  }
  redirect("/login");
}

export async function cancelBookingAction(bookingId: number) {
  try {
    const session = await getServerSession();
    if (!session) throw new Error("Musisz być zalogowany!");

    const { error } = await supabase
      .from("bookings")
      .update({ status: "anulowana" })
      .eq("id", bookingId)
      .select();
    if (error)
      throw new Error(
        "Wystąpił błąd podczas anulowania rezerwacji. Spróbuj ponownie.",
      );
    revalidatePath("/user/bookings");
  } catch (error: any) {
    return { message: error.message };
  }
}

export async function editMemberDataAction(
  memberId: number,
  data: { firstName: string; lastName: string; phone: string; city: string },
) {
  try {
    const session = await getServerSession();
    if (!session) throw new Error("Musisz być zalogowany!");

    const { firstName, lastName, phone, city } = data;
    const name = `${firstName} ${lastName}`;
    const newData = { name, phone, city };

    const { error } = await supabase
      .from("members")
      .update(newData)
      .eq("id", memberId)
      .select();

    if (error) throw new Error("Wystąpił problem ze zmianą danych.");
  } catch (error: any) {
    return { message: error.message };
  }
  redirect("/user/profile");
}

export async function addBookingAction(
  bookingData: {
    date: string;
    status: string;
    trainerId: number;
    memberId: number;
  },
  isBooked: boolean,
) {
  try {
    const session = await getServerSession();
    if (!session) throw new Error("Musisz być zalogowany!");
    const userMemberships = await getMemberPurchasedMemberships(
      bookingData.memberId,
    );

    // const todayDay = TODAY_DAY.toString().slice(0, 10);
    const activeMembership = userMemberships?.filter(
      (membership) =>
        TODAY_DAY >= membership.startDay &&
        TODAY_DAY <= membership.endDay &&
        membership.isValid,
    );

    const haveActiveMembership = Boolean(activeMembership?.length);
    if (haveActiveMembership === false)
      throw new Error(
        "Brak aktywnego karnetu. Zakup karnet aby uzyskać możliwość rezerwacji zajęć.",
      );

    if (isBooked) throw new Error("Zajęcia zostały już zarezerwowane!");

    const { data, error } = await supabase
      .from("bookings")
      .insert([bookingData])
      .select();

    if (error)
      throw new Error(
        "Wystąpił problem ze rezerwacją zajęć. Spróbuj ponownie.",
      );

    revalidatePath("/user/classes");
  } catch (error: any) {
    return { message: error.message };
  }
}
