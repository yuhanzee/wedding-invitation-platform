// export default function InvitePage() {

//   return (

//     <div className="min-h-screen flex items-center justify-center">

//       <div className="text-center">

//         <h1 className="text-4xl font-bold">
//           Nimal ❤️ Kasuni
//         </h1>

//         <h2 className="mt-8 text-2xl">

//           Dear Dilmith Ranasinghe & Family

//         </h2>

//         <p className="mt-4">

//           Reserved Seats : 4

//         </p>

//       </div>

//     </div>

//   );

// }

import connectDB from "@/lib/mongodb";
import Guest from "@/models/Guest";
import Wedding from "@/models/Wedding";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    token: string;
  }>;
};

export default async function InvitePage({ params }: Props) {
  const { token } = await params;

  await connectDB();

  const guest = await Guest.findOne({ token }).lean();
  const wedding = await Wedding.findOne().lean();

  if (!guest || !wedding) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {wedding.groomName} ❤️ {wedding.brideName}
        </h1>

        <h2 className="mt-8 text-2xl">
          Dear {guest.guestName} & Family
        </h2>

        <p className="mt-4">
          Reserved Seats : {guest.familyCount}
        </p>

        <p className="mt-6 text-gray-300">
          {wedding.weddingDate}
        </p>

        <p className="mt-2 text-gray-300">
          {wedding.venue}
        </p>
      </div>
    </div>
  );
}