import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let html = "";
    let subject = "";

    if (data.formType === "Partner Enquiry") {
      subject = "New Partner Enquiry";

      html = `
        <h2>New Partner Enquiry</h2>

        <p><strong>Company Name:</strong> ${data.companyName}</p>
        <p><strong>Contact Name:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No message provided."}</p>
      `;
    } else {
      subject = `New Contact Form - ${data.subject}`;

      html = `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      html,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {
      console.error("EMAIL ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
          error: String(error),
        },
        { status: 500 }
      );

  }
}