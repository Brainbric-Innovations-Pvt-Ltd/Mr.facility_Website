import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  DemoFormData,
  generateDemoConfirmationEmailHtml,
  generateAdminLeadNotificationEmailHtml,
} from "@/lib/emailTemplate";

export async function POST(req: Request) {
  try {
    const body: DemoFormData = await req.json();

    // 1. Validation
    if (!body.name?.trim() || !body.email?.trim() || !body.company?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    const recipientEmail = body.email.trim();
    const recipientName = body.name.trim();

    // 2. Prepare Transporter
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const fromAddress =
      process.env.SMTP_FROM || `"MR Facility Demo" <${smtpUser || "contact@mrfacility.com"}>`;
    const adminEmail = process.env.ADMIN_EMAIL || "contact@mrfacility.com";

    const confirmationHtml = generateDemoConfirmationEmailHtml(body);
    const adminLeadHtml = generateAdminLeadNotificationEmailHtml(body);

    let infoPreviewUrl: string | undefined;

    if (smtpHost && smtpUser && smtpPass) {
      // Live SMTP Transporter (Gmail, Brevo, SendGrid, Amazon SES, or custom corporate SMTP)
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Send confirmation email to prospect
      await transporter.sendMail({
        from: fromAddress,
        to: `"${recipientName}" <${recipientEmail}>`,
        subject: `Confirmed: Your MR Facility Enterprise Demo - ${body.company}`,
        html: confirmationHtml,
      });

      // Send lead notification to internal admin
      try {
        await transporter.sendMail({
          from: fromAddress,
          to: adminEmail,
          subject: `[New Demo Lead] ${body.company} - ${recipientName}`,
          html: adminLeadHtml,
        });
      } catch (adminErr) {
        console.warn("Could not dispatch internal admin copy:", adminErr);
      }
    } else {
      // Local development fallback: create an Ethereal test account or log email preview
      try {
        const testAccount = await nodemailer.createTestAccount();
        const testTransporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });

        const testInfo = await testTransporter.sendMail({
          from: `"MR Facility Demo" <${testAccount.user}>`,
          to: `"${recipientName}" <${recipientEmail}>`,
          subject: `Confirmed: Your MR Facility Enterprise Demo - ${body.company}`,
          html: confirmationHtml,
        });

        infoPreviewUrl = nodemailer.getTestMessageUrl(testInfo) || undefined;
        console.log("Demo confirmation email dispatched to Ethereal sandbox!");
        if (infoPreviewUrl) {
          console.log("Email Preview URL:", infoPreviewUrl);
        }
      } catch (etherealErr) {
        console.warn("Ethereal test transport unavailable, logging simulation:", etherealErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Confirmation email sent to ${recipientEmail}`,
      previewUrl: infoPreviewUrl,
    });
  } catch (error: any) {
    console.error("Error processing demo confirmation email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to dispatch confirmation email. Please try again.",
      },
      { status: 500 }
    );
  }
}
