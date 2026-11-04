import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  company: z.string().optional(),
  serviceType: z.string().optional(),
  pickupLocation: z.string().optional(),
  deliveryLocation: z.string().optional(),
  goodsDetails: z.string().optional(),
  message: z.string().optional(),
  vehicleType: z.string().optional(),
  weight: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = enquirySchema.parse(body);

    // ─────────────────────────────────────────────────────────────────────
    // INTEGRATION OPTIONS (configure one of the below):
    //
    // OPTION 1 — EmailJS / Nodemailer / SendGrid
    //   Add SMTP credentials to .env.local:
    //   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ENQUIRY_TO_EMAIL
    //
    // OPTION 2 — Google Sheets via Apps Script
    //   Set GOOGLE_SHEETS_WEBHOOK_URL in .env.local
    //
    // OPTION 3 — WhatsApp Business API / Twilio
    //   Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN in .env.local
    //
    // Currently: logs to server console for development.
    // ─────────────────────────────────────────────────────────────────────

    console.log("New Enquiry Received:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Uncomment and configure for production use:
    // await sendEmail(data);    // or
    // await postToGoogleSheets(data);

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}

