import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";

export async function GET() {
  await connectDB();

  const guests = await Guest.find();

  const totalGuests = guests.length;

  const accepted = guests.filter(
    (g) => g.attending === true
  ).length;

  const declined = guests.filter(
    (g) => g.attending === false
  ).length;

  const pending = guests.filter(
    (g) => g.attending === null
  ).length;

  return NextResponse.json({
    totalGuests,
    accepted,
    declined,
    pending,
  });
}