import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Client from "@/models/Client";
import Wedding from "@/models/Wedding";

export async function GET() {
  try {
    await connectDB();
    const clients = await Client.find().sort({ createdAt: -1 }).lean();
    
    // For each client, let's count how many weddings they have
    const clientsWithCount = await Promise.all(
      clients.map(async (client: any) => {
        const weddingCount = await Wedding.countDocuments({ clientId: client._id });
        return {
          ...client,
          weddingCount,
        };
      })
    );

    return NextResponse.json(clientsWithCount);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, phone, package: packageName } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const newClient = await Client.create({
      name,
      email,
      phone,
      package: packageName || "Premium",
    });

    return NextResponse.json(newClient, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
