import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import Wedding from "@/models/Wedding";
import { notFound } from "next/navigation";
import RSVPButtons from "@/components/RSVPButtons";
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

  const wedding = await Wedding.findById(guest.weddingId).lean();

  if (!wedding) {
    notFound();
  }

  return (
    // <main className="min-h-screen bg-gray-100 flex items-center justify-center">

    //   <div className="bg-white shadow-xl rounded-xl p-10 w-[700px]">

    //     <h1 className="text-4xl font-bold text-center">
    //       💍 {wedding.groomName} & {wedding.brideName}
    //     </h1>

    //     <p className="text-center text-gray-500 mt-2">
    //       Wedding Invitation
    //     </p>

    //     <hr className="my-8" />

    //     <h2 className="text-2xl font-semibold">
    //       Dear {guest.guestName},
    //     </h2>

    //     <p className="mt-5">
    //       We are delighted to invite you to celebrate our special day with us.
    //     </p>

    //     <div className="mt-8 space-y-3">

    //       <p>
    //         <strong>Date:</strong> {wedding.weddingDate}
    //       </p>

    //       <p>
    //         <strong>Venue:</strong> {wedding.venue}
    //       </p>

    //       <p>
    //         <strong>Reserved Seats:</strong> {guest.familyCount}
    //       </p>

    //       <RSVPButtons token={guest.token} />

    //     </div>

    //   </div>

    // </main>

  <InvitationEngine
    guest={guest}
    wedding={wedding}
  />
);
  
}