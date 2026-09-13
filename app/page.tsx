// import { notFound } from "next/navigation";

// import connectDB from "@/lib/mongodb";
// import Guest from "@/models/Guest";
// import Wedding from "@/models/Wedding";
// import InvitationEngine from "@/components/invitation/InvitationEngine";

// export default async function InvitePage({
//   params,
// }: {
//   params: Promise<{ token: string }>;
// }) {
//   await connectDB();

//   const { token } = await params;

//   const guest = await Guest.findOne({ token }).lean();

//   if (!guest) {
//     notFound();
//   }

//   const wedding = await Wedding.findById(
//     guest.weddingId
//   ).lean();

//   if (!wedding) {
//     notFound();
//   }

//   const invitationData = {
//     groomName: String(wedding.groomName),
//     brideName: String(wedding.brideName),
//     weddingDate: wedding.weddingDate
//       ? String(wedding.weddingDate)
//       : undefined,
//   };

//   return (
//     <InvitationEngine
//       wedding={invitationData}
//       guest={{
//         guestName: guest.guestName,
//         familyCount: guest.familyCount,
//       }}
//     />
//   );
// }

import { notFound } from "next/navigation";

import connectDB from "@/lib/mongodb";

import Guest from "@/models/Guest";

import Wedding from "@/models/Wedding";

import InvitationEngine from "@/components/invitation/InvitationEngine";

export default async function InvitePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  await connectDB();

  const { token } = await params;

  /* =========================================
     FIND GUEST
  ========================================== */

  const guest = await Guest.findOne({
    token,
  }).lean();

  if (!guest) {
    notFound();
  }

  /* =========================================
     FIND WEDDING
  ========================================== */

  const wedding = await Wedding.findById(
    guest.weddingId
  ).lean();

  if (!wedding) {
    notFound();
  }

  /* =========================================
     WEDDING DATA
  ========================================== */

  const invitationData = {
    groomName: String(wedding.groomName),

    brideName: String(wedding.brideName),

    weddingDate: wedding.weddingDate
      ? String(wedding.weddingDate)
      : undefined,

    weddingTime: wedding.weddingTime
      ? String(wedding.weddingTime)
      : undefined,

    poruwaCeremonyTime:
      wedding.poruwaCeremonyTime
        ? String(wedding.poruwaCeremonyTime)
        : undefined,

    venue: wedding.venue
      ? String(wedding.venue)
      : undefined,
  };

  /* =========================================
     GUEST + RSVP DATA
  ========================================== */

  const guestData = {
    guestName: String(guest.guestName),

    familyCount: Number(guest.familyCount),

    token: String(guest.token),

    attending:
      typeof guest.attending === "boolean"
        ? guest.attending
        : null,

    hasResponded: Boolean(
      guest.respondedAt
    ),

    respondedAt: guest.respondedAt
      ? new Date(
          guest.respondedAt
        ).toISOString()
      : null,

    message: guest.message
      ? String(guest.message)
      : "",
  };

  /* =========================================
     INVITATION
  ========================================== */

  return (
    <InvitationEngine
      wedding={invitationData}
      guest={guestData}
    />
  );
}