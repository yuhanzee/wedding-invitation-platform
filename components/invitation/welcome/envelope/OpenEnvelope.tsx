// import EnvelopeBack from "./EnvelopeBack";
// import EnvelopeBody from "./EnvelopeBody";
// import CardSequence from "./CardSequence";
// import Flowers from "./Flowers";
// import WaxSeal from "./WaxSeal";
// import ButterflyMagic from "./ButterflyMagic";

// type OpenEnvelopeProps = {
//   weddingDate?: string;
// };

// export default function OpenEnvelope({
//   weddingDate,
// }: OpenEnvelopeProps) {
//   return (
//     <div className="relative w-full h-full">
//       <EnvelopeBack />

//       <CardSequence
//         isOpen={true}
//         weddingDate={weddingDate}
//       />

//       <EnvelopeBody />

//       <Flowers />

//       <WaxSeal isOpen={true} />

//       <ButterflyMagic isOpen={true} />
//     </div>
//   );
// }

"use client";

import EnvelopeBack from "./EnvelopeBack";
import EnvelopeBody from "./EnvelopeBody";
import CardSequence from "./CardSequence";
import TopFlap from "./TopFlap";
import Flowers from "./Flowers";
import WaxSeal from "./WaxSeal";
import ButterflyMagic from "./ButterflyMagic";

type OpenEnvelopeProps = {
  weddingDate?: string;
};

export default function OpenEnvelope({
  weddingDate,
}: OpenEnvelopeProps) {
  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* BACK OF ENVELOPE */}
      <div className="absolute inset-0 z-10">
        <EnvelopeBack />
      </div>

      {/* OPENED TOP FLAP */}
      <div className="absolute inset-0 z-20">
        <TopFlap isOpen={true} />
      </div>

      {/* CARDS INSIDE THE POCKET */}
      <div className="absolute inset-0 z-30">
        <CardSequence
          isOpen={true}
          weddingDate={weddingDate}
        />
      </div>

      {/* FRONT POCKET COVERS BOTTOM OF CARDS */}
      <div className="absolute inset-0 z-40">
        <EnvelopeBody />
      </div>

      {/* DECORATIONS */}
      <div className="absolute inset-0 z-50">
        <Flowers />
      </div>

      <div className="absolute inset-0 z-50">
        <WaxSeal isOpen={true} />
      </div>

      {/* MAGIC EFFECT */}
      <div className="absolute inset-0 z-60">
        <ButterflyMagic isOpen={true} />
      </div>
    </div>
  );
}