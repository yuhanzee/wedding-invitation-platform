import connectDB from "@/lib/mongodb";
import Wedding from "@/models/Wedding";
import { notFound } from "next/navigation";

import InvitationEngine from "@/components/invitation/InvitationEngine";

export default async function GeneralInvitePage({
  params,
}: {
  params: Promise<{ weddingId: string }>;
}) {
  await connectDB();

  const { weddingId } = await params;

  /* =========================================
     FIND SPECIFIC WEDDING
  ========================================== */

  const wedding = await Wedding.findById(
    weddingId
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

    poruwaCeremonyTime: wedding.poruwaCeremonyTime
      ? String(wedding.poruwaCeremonyTime)
      : undefined,

    venue: wedding.venue
      ? String(wedding.venue)
      : undefined,
  };

  /* =========================================
     GENERAL INVITATION PLACEHOLDER DATA

     No actual guest is associated with this
     invitation, so there is no name, seat
     count or RSVP token.
  ========================================== */

  const guestData = {
    guestName: "",

    familyCount: 0,

    token: "",

    attending: null,

    hasResponded: false,

    respondedAt: null,

    message: "",
  };

  /* =========================================
     GENERAL INVITATION
  ========================================== */

  return (
    <InvitationEngine
      wedding={invitationData}
      guest={guestData}
      isGeneral={true}
    />
  );
}