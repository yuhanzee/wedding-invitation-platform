import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";

export async function GET(request: NextRequest) {
  await connectDB();

  const search =
    request.nextUrl.searchParams.get("search") || "";

  const status =
    request.nextUrl.searchParams.get("status") || "all";

  const query: any = {};

  if (search) {
    query.guestName = {
      $regex: search,
      $options: "i",
    };
  }

  if (status === "accepted") {
    query.attending = true;
  }

  if (status === "declined") {
    query.attending = false;
  }

  if (status === "pending") {
    query.respondedAt = null;
  }

  const guests = await Guest.find(query).sort({
    guestName: 1,
  });

  return NextResponse.json(guests);
}