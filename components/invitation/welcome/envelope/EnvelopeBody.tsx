// // import Image from "next/image";

// // export default function EnvelopeBody() {
// //   return (
// //     <div
// //       className="absolute inset-0 z-30 pointer-events-none select-none"
// //       style={{
// //         clipPath: "polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)",
// //       }}
// //     >
// //       <Image
// //         src="/assets/envelope/envelope-body.png"
// //         alt="Envelope front pocket"
// //         fill
// //         priority
// //         className="object-cover"
// //       />
// //     </div>
// //   );
// // }


// import Image from "next/image";

// export default function EnvelopeBody() {
//   return (
//     <div className="absolute inset-[-50] z-30 pointer-events-none select-none">
//       <Image
//         src="/assets/envelope/envelope-body.png"
//         alt="Envelope"
//         fill
//         priority
//         className="object-contain"
//       />
//     </div>
//   );
// }

import Image from "next/image";

export default function EnvelopeBody() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <Image
        src="/assets/envelope/envelope-front.png"
        alt="Envelope front pocket"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}