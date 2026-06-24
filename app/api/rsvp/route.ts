import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";

export async function POST(req: Request) {
  await connectDB();

  const { token, attending } = await req.json();

  const guest = await Guest.findOne({ token });

  if (!guest) {
    return NextResponse.json(
      { success: false, message: "Guest not found" },
      { status: 404 }
    );
  }

  if (guest.attending !== null && guest.respondedAt !== null) {
    return NextResponse.json(
      {
        success: false,
        message: "You have already responded",
        attending: guest.attending,
      },
      { status: 400 }
    );
  }

  guest.attending = attending;
  guest.respondedAt = new Date();

  await guest.save();

  return NextResponse.json({
    success: true,
    message: "RSVP saved successfully",
    attending,
  });
}