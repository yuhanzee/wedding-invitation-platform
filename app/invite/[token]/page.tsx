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

  const guest = await Guest.findOne({ token }).lean();

  if (!guest) {
    notFound();
  }

  const wedding = await Wedding.findById(
    guest.weddingId
  ).lean();

  if (!wedding) {
    notFound();
  }

 const invitationData = {
  groomName: String(wedding.groomName),
  brideName: String(wedding.brideName),

  weddingDate: wedding.weddingDate
    ? String(wedding.weddingDate)
    : undefined,

  weddingTime: wedding.weddingTime
    ? String(wedding.weddingTime)
    : undefined,

  venue: wedding.venue
    ? String(wedding.venue)
    : undefined,
};

  return (
    <InvitationEngine
      wedding={invitationData}
    />
  );
}