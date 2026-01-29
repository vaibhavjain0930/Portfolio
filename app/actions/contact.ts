// app/actions/contact.ts
"use server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitContactForm(
  prevState: { success: boolean; error?: string },
  formData: FormData,
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact From <onboarding@resend.dev>",
      to: "vaibhavjain0930@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission from Portfolio",
      react: EmailTemplate({ name, email, message }),
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
