"use server";
import { Invitation } from "./model";
import { connectDB } from "./mongo";

const VERCEL_URL =
  process.env.VERCEL_URL || "https://wedding-invitation-self-rho.vercel.app/";

export async function createInvitation(guest: string): Promise<string> {
  await connectDB();
  const encoded = Buffer.from(guest).toString("base64");
  const invitation = await Invitation.create({
    guest: guest,
    url: VERCEL_URL + "/" + encoded,
  });
  return VERCEL_URL + "/" + encoded;
}
