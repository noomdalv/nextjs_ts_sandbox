import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const email = await resend.emails.send({
    from: "need.to.buy.domain",
    to: "test@user.com",
    subject: "...",
    react: <WelcomeTemplate name="Vlad" />,
  });

  return NextResponse.json({});
}
