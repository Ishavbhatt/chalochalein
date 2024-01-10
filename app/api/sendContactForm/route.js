import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, message, email, phoneNumber } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ishavbhattkhaniyara@gmail.com",
        pass: "Ishav@143",
      },
    });

    const mailOption = {
      from: email,
      to: "ishavbhattkhaniyara@gmail.com",
      subject: "Email From Chalo Chalein Contact Us Form",
      html: `
      <h4>Chalo Chalein Website Contact Form Enquiry. Here are the Details:</h4>
      <p><strong> Name:</strong> ${name}</p>
      <p><strong> Email: </strong>${email}</p> 
      <p><strong>Contact Number:</strong> ${phoneNumber}</p>
      <p><strong> message:</strong> ${message}</p> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while sending email:", error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
