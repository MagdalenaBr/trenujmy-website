"use server";

import { z } from "zod";
import { ContactFormSchema } from "../_validation/contactFormSchema";
import { Resend } from "resend";
import EmailTemplate from "../_components/EmailTemplate";

type ContactFormTypes = z.infer<typeof ContactFormSchema>;

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
