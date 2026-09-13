
// import Header from "./Header";
// import InvitationTitle from "./InvitationTitle";
// import DateBlock from "./DateBlock";
// import VenueBlock from "./VenueBlock";

// type InvitationContentProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   venue?: string;
// };

// export default function InvitationContent({
//   groomName,
//   brideName,
//   weddingDate,
//   weddingTime,
//   venue,
// }: InvitationContentProps) {
//   return (
//     <div className="absolute inset-2">

//       <Header />

//       <InvitationTitle
//         groomName={groomName}
//         brideName={brideName}
//       />

//       <DateBlock
//         weddingDate={weddingDate}
//         weddingTime={weddingTime}
//       />

//       <VenueBlock venue={venue} />

//     </div>
//   );
// }

import Header from "./Header";
import InvitationTitle from "./InvitationTitle";
import DateBlock from "./DateBlock";
import VenueBlock from "./VenueBlock";

type InvitationContentProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
  weddingTime?: string;
  poruwaCeremonyTime?: string;
  venue?: string;
};

export default function InvitationContent({
  groomName,
  brideName,
  weddingDate,
  weddingTime,
  poruwaCeremonyTime,
  venue,
}: InvitationContentProps) {
  return (
    <div className="absolute inset-2">
      <Header />

      <InvitationTitle
        groomName={groomName}
        brideName={brideName}
      />

      <DateBlock
        weddingDate={weddingDate}
        weddingTime={weddingTime}
        poruwaCeremonyTime={poruwaCeremonyTime}
      />

      <VenueBlock venue={venue} />
    </div>
  );
}