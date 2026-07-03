import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import * as XLSX from "xlsx";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const weddingId = searchParams.get("weddingId");

    if (!weddingId) {
      return NextResponse.json(
        { error: "Wedding ID is required" },
        { status: 400 }
      );
    }

    const guests = await Guest.find({ weddingId }).sort({ guestName: 1 }).lean();

    // Get origin dynamically from request headers
    const host = request.headers.get("host") || "localhost:3000";
    const protocol = host.includes("localhost") ? "http" : "https";
    const origin = `${protocol}://${host}`;

    const rows = guests.map((guest: any) => ({
      GuestName: guest.guestName,
      FamilyCount: guest.familyCount,
      Status: guest.attending === true ? "Accepted" : guest.attending === false ? "Declined" : "Pending",
      InvitationLink: `${origin}/invite/${guest.token}`,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    // Adjust column widths for better Excel readability
    const maxNameLen = Math.max(...rows.map(r => r.GuestName.length), 10);
    worksheet["!cols"] = [
      { wch: maxNameLen + 2 },
      { wch: 12 },
      { wch: 12 },
      { wch: 50 },
    ];

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Invitation Links"
    );

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    return new NextResponse(buffer, {
      headers: {
        "Content-Disposition":
          `attachment; filename="GuestList_${weddingId}.xlsx"`,
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}