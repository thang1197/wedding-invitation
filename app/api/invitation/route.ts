// app/api/users/route.ts
import { Invitation } from "@/services/model";
import { connectDB } from "@/services/mongo";
import { NextResponse } from "next/server";

const VERCEL_URL =
  process.env.VERCEL_URL || "https://wedding-invitation-self-rho.vercel.app/";

const Model = Invitation;
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const guest = body.guest ?? "guest";
  const encoded = Buffer.from(guest).toString("base64");
  const invitation = await Model.create({
    guest: guest,
    url: VERCEL_URL + "/" + encoded,
  });

  return NextResponse.json({ success: true, url: VERCEL_URL + "/" + encoded });
}
