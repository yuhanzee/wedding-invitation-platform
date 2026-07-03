import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import Activity from "@/models/Activity";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { token, attending } = await request.json();

    const guest = await Guest.findOneAndUpdate(
      { token },
      {
        attending,
        respondedAt: new Date(),
      },
      { new: true }
    );

    if (!guest) {
      return NextResponse.json(
        { error: "Guest not found" },
        { status: 404 }
      );
    }

    // Log the RSVP activity
    await Activity.create({
      guestId: guest._id,
      guestName: guest.guestName,
      action: attending ? "Accepted" : "Declined",
      weddingId: guest.weddingId,
      respondedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}