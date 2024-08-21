"use server";

import { sql } from "@vercel/postgres";
import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "../_components/EmailTemplate";
import { ContactFormSchema } from "../_validation/contactFormSchema";
import { LoginSchema } from "../_validation/loginSchema";
import { SignUpFormSchema } from "../_validation/signUpFormSchema";
import { signIn } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';


type ContactFormTypes = z.infer<typeof ContactFormSchema>;
type LoginFormTypes = z.infer<typeof LoginSchema>;
type SignupFormTypes = z.infer<typeof SignUpFormSchema>;

const resend = new Resend(process.env.RESEND_KEY);

export async function sendEmail(data: ContactFormTypes) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { firstName, lastName, email, message } = result.data;

    try {
      const data = await resend.emails.send({
        from: "Trenuj|My <onboarding@resend.dev>",
        to: ["trenujmy3@gmail.com"],
        subject: "Wiadomość z formularza kontaktowego",
        react: EmailTemplate({ firstName, lastName, email, message }),
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

export async function loginAction(formData: LoginFormTypes) {
  await signIn("login", formData);
}

export async function signupAction(formData: SignupFormTypes) {
  const { firstName, lastName, city, phone, gender, email, password } = formData;

  try {
    const response = await sql`SELECT * FROM users WHERE email=${email}`;
    let user = response.rows[0];
    const hashedPassword = await bcrypt.hash(password, 10)

    if (!!user) throw new Error("Podany e-mail został już zarejestrowany");

    if (!user) {
      //Add member email and password to vercel storage
      const addResponse = await sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`;

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
