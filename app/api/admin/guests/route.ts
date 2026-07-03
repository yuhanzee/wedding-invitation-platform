import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import Activity from "@/models/Activity";

// Delete guest(s)
export async function DELETE(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const guestId = searchParams.get("guestId");
    const weddingId = searchParams.get("weddingId");

    if (guestId) {
      // Delete single guest
      const guest = await Guest.findByIdAndDelete(guestId);
      if (guest) {
        // Also delete associated activities
        await Activity.deleteMany({ guestId });
      }
      return NextResponse.json({ success: true, message: "Guest deleted successfully" });
    }

    if (weddingId) {
      // Delete all guests for a wedding
      await Guest.deleteMany({ weddingId });
      await Activity.deleteMany({ weddingId });
      return NextResponse.json({ success: true, message: "All guests cleared successfully" });
    }

    return NextResponse.json({ error: "Missing guestId or weddingId" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
