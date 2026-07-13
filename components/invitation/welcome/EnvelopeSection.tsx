// // // // // // // // // import Envelope from "./envelope/Envelope";
// // // // // // // // // import TapToOpen from "./TapToOpen";

// // // // // // // // // type EnvelopeSectionProps = {
// // // // // // // // //   isOpen: boolean;
// // // // // // // // //   onOpen: () => void;
// // // // // // // // //   weddingDate?: string;
// // // // // // // // // };

// // // // // // // // // export default function EnvelopeSection({
// // // // // // // // //   isOpen,
// // // // // // // // //   onOpen,
// // // // // // // // //   weddingDate,
// // // // // // // // // }: EnvelopeSectionProps) {
// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col items-center justify-start mt-6">
// // // // // // // // //       <Envelope
// // // // // // // // //         isOpen={isOpen}
// // // // // // // // //         onOpen={onOpen}
// // // // // // // // //         weddingDate={weddingDate}
// // // // // // // // //       />

// // // // // // // // //       <div
// // // // // // // // //         className="mt-6 transition-all duration-[600ms] ease-in-out select-none"
// // // // // // // // //         style={{
// // // // // // // // //           opacity: isOpen ? 0 : 1,
// // // // // // // // //           transform: isOpen ? "translateY(12px)" : "translateY(0)",
// // // // // // // // //           pointerEvents: isOpen ? "none" : "auto",
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <TapToOpen />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import Envelope from "./envelope/Envelope";
// // // // // // // // import TapToOpen from "./TapToOpen";

// // // // // // // // type EnvelopeSectionProps = {
// // // // // // // //   isOpen: boolean;
// // // // // // // //   onOpen: () => void;
// // // // // // // //   weddingDate?: string;
// // // // // // // // };

// // // // // // // // export default function EnvelopeSection({
// // // // // // // //   isOpen,
// // // // // // // //   onOpen,
// // // // // // // //   weddingDate,
// // // // // // // // }: EnvelopeSectionProps) {
// // // // // // // //   return (
// // // // // // // //     <section className="w-full flex flex-col items-center mt-[38px]">
// // // // // // // //       <Envelope
// // // // // // // //         isOpen={isOpen}
// // // // // // // //         onOpen={onOpen}
// // // // // // // //         weddingDate={weddingDate}
// // // // // // // //       />

// // // // // // // //       {!isOpen && (
// // // // // // // //         <div className="mt-5">
// // // // // // // //           <TapToOpen />
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import Envelope from "./envelope/Envelope";
// // // // // // // import TapToOpen from "./TapToOpen";

// // // // // // // type EnvelopeSectionProps = {
// // // // // // //   isOpen: boolean;
// // // // // // //   onOpen: () => void;
// // // // // // //   weddingDate?: string;
// // // // // // // };

// // // // // // // export default function EnvelopeSection({
// // // // // // //   isOpen,
// // // // // // //   onOpen,
// // // // // // //   weddingDate,
// // // // // // // }: EnvelopeSectionProps) {
// // // // // // //   return (
// // // // // // //     <section className="w-full flex flex-col items-center -mt-[10px]">
// // // // // // //       <Envelope
// // // // // // //         isOpen={isOpen}
// // // // // // //         onOpen={onOpen}
// // // // // // //         weddingDate={weddingDate}
// // // // // // //       />

// // // // // // //       {!isOpen && (
// // // // // // //         <div className="mt-5">
// // // // // // //           <TapToOpen />
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import Envelope from "./envelope/Envelope";
// // // // // // import TapToOpen from "./TapToOpen";

// // // // // // type EnvelopeSectionProps = {
// // // // // //   weddingDate?: string;
// // // // // // };

// // // // // // export default function EnvelopeSection({
// // // // // //   weddingDate,
// // // // // // }: EnvelopeSectionProps) {
// // // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // // //   return (
// // // // // //     <section className="flex flex-col items-center">
// // // // // //       <Envelope
// // // // // //         isOpen={isOpen}
// // // // // //         onOpen={() => setIsOpen(true)}
// // // // // //         weddingDate={weddingDate}
// // // // // //       />

// // // // // //       {!isOpen && (
// // // // // //         <div className="mt-[28px]">
// // // // // //           <TapToOpen />
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import Envelope from "./envelope/Envelope";
// // // // // import TapToOpen from "./TapToOpen";

// // // // // type EnvelopeSectionProps = {
// // // // //   weddingDate?: string;
// // // // // };

// // // // // export default function EnvelopeSection({
// // // // //   weddingDate,
// // // // // }: EnvelopeSectionProps) {
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   return (
// // // // //     <section className="flex flex-col items-center">
// // // // //       <Envelope
// // // // //         isOpen={isOpen}
// // // // //         onOpen={() => setIsOpen(true)}
// // // // //         weddingDate={weddingDate}
// // // // //       />

// // // // //       {!isOpen && (
// // // // //         <div className="mt-[18px]">
// // // // //           <TapToOpen />
// // // // //         </div>
// // // // //       )}
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // import Envelope from "./envelope/Envelope";

// // // // type EnvelopeSectionProps = {
// // // //   isOpen: boolean;
// // // //   onOpen: () => void;
// // // //   weddingDate?: string;
// // // // };

// // // // export default function EnvelopeSection({
// // // //   isOpen,
// // // //   onOpen,
// // // //   weddingDate,
// // // // }: EnvelopeSectionProps) {
// // // //   return (
// // // //     <section
// // // //       className={`flex items-center justify-center ${
// // // //         isOpen ? "flex-1" : "flex-[3]"
// // // //       }`}
// // // //     >
// // // //       <Envelope
// // // //         isOpen={isOpen}
// // // //         onOpen={onOpen}
// // // //         weddingDate={weddingDate}
// // // //       />
// // // //     </section>
// // // //   );
// // // // }

// // // import Envelope from "./envelope/Envelope";

// // // type EnvelopeSectionProps = {
// // //   isOpen: boolean;
// // //   onOpen: () => void;
// // //   weddingDate?: string;
// // // };

// // // export default function EnvelopeSection({
// // //   isOpen,
// // //   onOpen,
// // //   weddingDate,
// // // }: EnvelopeSectionProps) {
// // //   return (
// // //     <section
// // //       className={
// // //         isOpen
// // //           ? "absolute inset-0 flex items-center justify-center"
// // //           : "absolute top-[175px] left-1/2 -translate-x-1/2"
// // //       }
// // //     >
// // //       <Envelope
// // //         isOpen={isOpen}
// // //         onOpen={onOpen}
// // //         weddingDate={weddingDate}
// // //       />
// // //     </section>
// // //   );
// // // }

// // import Envelope from "./envelope/Envelope";

// // type EnvelopeSectionProps = {
// //   isOpen: boolean;
// //   onOpen: () => void;
// //   weddingDate?: string;
// // };

// // export default function EnvelopeSection({
// //   isOpen,
// //   onOpen,
// //   weddingDate,
// // }: EnvelopeSectionProps) {
// //   return (
// //     <section
// //       className={`flex justify-center ${
// //         isOpen
// //           ? "flex-1 items-center"
// //           : "h-[430px] items-center"
// //       }`}
// //     >
// //       <Envelope
// //         isOpen={isOpen}
// //         onOpen={onOpen}
// //         weddingDate={weddingDate}
// //       />
// //     </section>
// //   );
// // }

// import Envelope from "./envelope/Envelope";

// type EnvelopeSectionProps = {
//   isOpen: boolean;
//   onOpen: () => void;
//   weddingDate?: string;
// };

// export default function EnvelopeSection({
//   isOpen,
//   onOpen,
//   weddingDate,
// }: EnvelopeSectionProps) {
//   return (
//     <div className="flex w-full items-center justify-center">
//       <Envelope
//         isOpen={isOpen}
//         onOpen={onOpen}
//         weddingDate={weddingDate}
//       />
//     </div>
//   );
// }

import Envelope from "./envelope/Envelope";

type EnvelopeSectionProps = {
  isOpen: boolean;
  onOpen: () => void;
  weddingDate?: string;
};

export default function EnvelopeSection({
  isOpen,
  onOpen,
  weddingDate,
}: EnvelopeSectionProps) {
  return (
    <Envelope
      isOpen={isOpen}
      onOpen={onOpen}
      weddingDate={weddingDate}
    />
  );
}