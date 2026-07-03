import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Wedding from "@/models/Wedding";
import Guest from "@/models/Guest";
import Activity from "@/models/Activity";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const weddingId = searchParams.get("weddingId");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";

    if (!weddingId) {
      return NextResponse.json(
        { error: "Wedding ID is required" },
        { status: 400 }
      );
    }

    const wedding = await Wedding.findById(weddingId).lean();
    if (!wedding) {
      return NextResponse.json(
        { error: "Wedding not found" },
        { status: 404 }
      );
    }

    // Fetch all guests to compute overall statistics
    const allGuests = await Guest.find({ weddingId }).lean();
    
    const totalGuestsCount = allGuests.length;
    const totalSeatsCount = allGuests.reduce((acc, curr: any) => acc + (curr.familyCount || 1), 0);

    const acceptedGuests = allGuests.filter((g: any) => g.attending === true);
    const acceptedCount = acceptedGuests.length;
    const acceptedSeats = acceptedGuests.reduce((acc, curr: any) => acc + (curr.familyCount || 1), 0);

    const declinedGuests = allGuests.filter((g: any) => g.attending === false);
    const declinedCount = declinedGuests.length;
    const declinedSeats = declinedGuests.reduce((acc, curr: any) => acc + (curr.familyCount || 1), 0);

    const pendingGuests = allGuests.filter((g: any) => g.attending === null);
    const pendingCount = pendingGuests.length;
    const pendingSeats = pendingGuests.reduce((acc, curr: any) => acc + (curr.familyCount || 1), 0);

    // Build query for the filtered guest list
    const guestQuery: any = { weddingId };

    if (search) {
      guestQuery.guestName = { $regex: search, $options: "i" };
    }

    if (status === "accepted") {
      guestQuery.attending = true;
    } else if (status === "declined") {
      guestQuery.attending = false;
    } else if (status === "pending") {
      guestQuery.attending = null;
    }

    const guests = await Guest.find(guestQuery).sort({ guestName: 1 }).lean();

    // Fetch live activities for this wedding
    const activities = await Activity.find({ weddingId })
      .sort({ respondedAt: -1 })
      .limit(20)
      .lean();

    return NextResponse.json({
      wedding,
      stats: {
        total: { count: totalGuestsCount, seats: totalSeatsCount },
        accepted: { count: acceptedCount, seats: acceptedSeats },
        declined: { count: declinedCount, seats: declinedSeats },
        pending: { count: pendingCount, seats: pendingSeats },
      },
      guests,
      activities,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
