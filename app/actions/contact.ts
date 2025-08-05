"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  date: z.date().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data)

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return { success: false, message: "Email configuration is missing. Please contact the administrator." }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Format the date for email
    const formattedDate = validatedData.date 
      ? validatedData.date.toLocaleDateString() 
      : "Not specified"

    // Email content
    const mailOptions = {
      from: `"Kapjam Kalna Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c6a16c;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
            <p><strong>Preferred Date:</strong> ${formattedDate}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #c6a16c; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            <em>This message was sent from your website contact form at Kapjam Kalna.</em>
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Invalid form data" }
    }
    
    return { success: false, message: "Failed to send email. Please try again later." }
  }
} 