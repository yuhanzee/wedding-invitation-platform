import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Wedding from "@/models/Wedding";
import Client from "@/models/Client";

export async function GET() {
  try {
    await connectDB();
    // Force register Client model if it's not already registered
    const _clientRef = Client;
    const weddings = await Wedding.find()
      .populate("clientId")
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json(weddings);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { brideName, groomName, weddingDate, venue, clientId } = body;

    if (!brideName || !groomName || !weddingDate || !venue) {
      return NextResponse.json(
        { error: "Bride name, groom name, wedding date, and venue are required" },
        { status: 400 }
      );
    }

    const newWedding = await Wedding.create({
      brideName,
      groomName,
      weddingDate,
      venue,
      clientId: clientId || null,
    });

    return NextResponse.json(newWedding, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
