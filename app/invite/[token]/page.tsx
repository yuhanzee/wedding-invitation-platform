// import connectDB from "@/lib/mongodb";
// import Guest from "@/models/Guest";
// import Wedding from "@/models/Wedding";
// import { notFound } from "next/navigation";
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

//  const invitationData = {
//   groomName: String(wedding.groomName),
//   brideName: String(wedding.brideName),

//   weddingDate: wedding.weddingDate
//     ? String(wedding.weddingDate)
//     : undefined,

//   weddingTime: wedding.weddingTime
//     ? String(wedding.weddingTime)
//     : undefined,

//   venue: wedding.venue
//     ? String(wedding.venue)
//     : undefined,
// };

//   return (
//     <InvitationEngine
//   wedding={invitationData}
//   guest={{
//     guestName: guest.guestName,
//     familyCount: guest.familyCount,
//   }}
// />
//   );
// }

// import connectDB from "@/lib/mongodb";

// import Guest from "@/models/Guest";
// import Wedding from "@/models/Wedding";

// import { notFound } from "next/navigation";

// import InvitationEngine from "@/components/invitation/InvitationEngine";

// export default async function InvitePage({
//   params,
// }: {
//   params: Promise<{ token: string }>;
// }) {
//   await connectDB();

//   const { token } = await params;

//   // Find guest using invitation token
//   const guest = await Guest.findOne({ token }).lean();

//   if (!guest) {
//     notFound();
//   }

//   // Find wedding connected to guest
//   const wedding = await Wedding.findById(
//     guest.weddingId
//   ).lean();

//   if (!wedding) {
//     notFound();
//   }

//   // Prepare wedding data for invitation
//   const invitationData = {
//     groomName: String(wedding.groomName),

//     brideName: String(wedding.brideName),

//     weddingDate: wedding.weddingDate
//       ? String(wedding.weddingDate)
//       : undefined,

//     weddingTime: wedding.weddingTime
//       ? String(wedding.weddingTime)
//       : undefined,

//     poruwaCeremonyTime: wedding.poruwaCeremonyTime
//       ? String(wedding.poruwaCeremonyTime)
//       : undefined,

//     venue: wedding.venue
//       ? String(wedding.venue)
//       : undefined,
//   };

//   return (
//     <InvitationEngine
//       wedding={invitationData}
//       guest={{
//         guestName: String(guest.guestName),
//         familyCount: Number(guest.familyCount),
//       }}
//     />
//   );
// }

import connectDB from "@/lib/mongodb";

import Guest from "@/models/Guest";
import Wedding from "@/models/Wedding";

import { notFound } from "next/navigation";

import InvitationEngine from "@/components/invitation/InvitationEngine";

export default async function InvitePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  await connectDB();

  const { token } = await params;

  /* =========================================
     FIND GUEST USING INVITATION TOKEN
  ========================================== */

  const guest = await Guest.findOne({ token }).lean();

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
     PREPARE WEDDING DATA
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
     PREPARE GUEST + RSVP DATA
  ========================================== */

  const guestData = {
    guestName: String(guest.guestName),

    familyCount: Number(guest.familyCount),

    // Invitation token needed by RSVP API
    token: String(guest.token),

    // null = guest has not responded yet
    // true = accepted
    // false = declined
    attending:
      typeof guest.attending === "boolean"
        ? guest.attending
        : null,

    // If respondedAt exists, RSVP has already
    // been submitted.
    hasResponded: Boolean(guest.respondedAt),

    respondedAt: guest.respondedAt
      ? new Date(guest.respondedAt).toISOString()
      : null,

    // Previous message
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