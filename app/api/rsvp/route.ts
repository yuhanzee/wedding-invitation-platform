// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/lib/mongodb";
// import Guest from "@/models/Guest";
// import Activity from "@/models/Activity";

// export async function POST(request: NextRequest) {
//   try {
//     await connectDB();

//     const { token, attending } = await request.json();

//     const guest = await Guest.findOneAndUpdate(
//       { token },
//       {
//         attending,
//         respondedAt: new Date(),
//       },
//       { new: true }
//     );

//     if (!guest) {
//       return NextResponse.json(
//         { error: "Guest not found" },
//         { status: 404 }
//       );
//     }

//     // Log the RSVP activity
//     await Activity.create({
//       guestId: guest._id,
//       guestName: guest.guestName,
//       action: attending ? "Accepted" : "Declined",
//       weddingId: guest.weddingId,
//       respondedAt: new Date(),
//     });

//     return NextResponse.json({
//       success: true,
//     });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import Activity from "@/models/Activity";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { token, attending, message } = await request.json();

    /* =========================================
       VALIDATION
    ========================================== */

    if (!token) {
      return NextResponse.json(
        { error: "Invitation token is required." },
        { status: 400 }
      );
    }

    if (typeof attending !== "boolean") {
      return NextResponse.json(
        { error: "Please select your attendance." },
        { status: 400 }
      );
    }

    if (
      message !== undefined &&
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid message." },
        { status: 400 }
      );
    }

    if (message && message.length > 300) {
      return NextResponse.json(
        {
          error:
            "Your message cannot be longer than 300 characters.",
        },
        { status: 400 }
      );
    }

    /* =========================================
       SUBMIT RSVP ONLY ONCE

       IMPORTANT:
       respondedAt must still be null.

       This prevents the same invitation from
       submitting another RSVP later.
    ========================================== */

    const respondedAt = new Date();

    const guest = await Guest.findOneAndUpdate(
      {
        token,
        respondedAt: null,
      },
      {
        $set: {
          attending,
          message: message?.trim() || "",
          respondedAt,
        },
      },
      {
        new: true,
      }
    );

    /* =========================================
       UPDATE FAILED

       Could mean:
       1. Guest does not exist
       2. Guest already responded
    ========================================== */

    if (!guest) {
      const existingGuest = await Guest.findOne({
        token,
      });

      if (!existingGuest) {
        return NextResponse.json(
          {
            error: "Guest not found.",
          },
          {
            status: 404,
          }
        );
      }

      /* Already responded */

      return NextResponse.json(
        {
          success: false,
          alreadyResponded: true,
          attending: existingGuest.attending,
          respondedAt: existingGuest.respondedAt,
          message: existingGuest.message || "",
          error:
            "Your RSVP has already been received.",
        },
        {
          status: 409,
        }
      );
    }

    /* =========================================
       LOG ACTIVITY
    ========================================== */

    await Activity.create({
      guestId: guest._id,
      guestName: guest.guestName,
      action: attending
        ? "Accepted"
        : "Declined",
      weddingId: guest.weddingId,
      respondedAt,
    });

    /* =========================================
       SUCCESS
    ========================================== */

    return NextResponse.json({
      success: true,
      alreadyResponded: false,
      attending: guest.attending,
      respondedAt: guest.respondedAt,
      message: guest.message || "",
    });
  } catch (error) {
    console.error("RSVP API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}