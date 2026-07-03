import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import Wedding from "@/models/Wedding";
import * as XLSX from "xlsx";
import { v4 as uuid } from "uuid";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const targetWeddingId = formData.get("weddingId") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // Determine target wedding
    let wedding;
    if (targetWeddingId) {
      wedding = await Wedding.findById(targetWeddingId);
    } else {
      wedding = await Wedding.findOne();
    }

    if (!wedding) {
      return NextResponse.json(
        { error: "Target wedding not found. Please create a wedding first." },
        { status: 404 }
      );
    }

    const bytes = await file.arrayBuffer();
    const workbook = XLSX.read(bytes);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet) as any[];

    let importedCount = 0;
    const createdGuests = [];

    for (const row of rows) {
      // Handle flexible header naming
      const name = row.GuestName || row["Guest Name"] || row.Name || row.name;
      const countVal = row.FamilyCount || row["Family Count"] || row.Family || row.Seats || row.seats || row.Count || row.count || 1;

      if (!name) continue; // Skip empty rows

      const guest = await Guest.create({
        weddingId: wedding._id,
        guestName: name.toString().trim(),
        familyCount: Number(countVal) || 1,
        token: uuid(),
      });

      createdGuests.push(guest);
      importedCount++;
    }

    return NextResponse.json({
      success: true,
      total: importedCount,
      weddingId: wedding._id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}