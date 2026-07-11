// import Image from "next/image";

// type TopFlapProps = {
//   isOpen: boolean;
// };

// export default function TopFlap({ isOpen }: TopFlapProps) {
//   return (
//     <div
//       className="absolute top-0 left-0 w-full h-full transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) select-none"
//       style={{
//         transformOrigin: "top center",
//         transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
//         zIndex: isOpen ? 10 : 40,
//         transformStyle: "preserve-3d",
//       }}
//     >
//       <div
//         className="w-full h-full relative"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 50% 50%)",
//         }}
//       >
//         <Image
//           src="/assets/envelope/envelope-body.png"
//           alt="Envelope top flap texture"
//           fill
//           priority
//           className="object-cover"
//         />
        
//         {/* Shadow overlay to create depth during the fold */}
//         <div
//           className="absolute inset-0 bg-black/40 transition-opacity duration-[1000ms] pointer-events-none"
//           style={{
//             opacity: isOpen ? 0.35 : 0,
//             clipPath: "polygon(0 0, 100% 0, 50% 50%)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }


import Image from "next/image";

type TopFlapProps = {
  isOpen: boolean;
};

export default function TopFlap({
  isOpen,
}: TopFlapProps) {
  return (
    <div
      className="
        absolute
        top-0
        left-0
        w-full
        h-[115px]
        select-none
        pointer-events-none
        transition-transform
        duration-[1000ms]
        ease-in-out
      "
      style={{
        transformOrigin: "top center",
        transform: isOpen
          ? "rotateX(180deg)"
          : "rotateX(0deg)",
        transformStyle: "preserve-3d",
        zIndex: isOpen ? 10 : 40,
      }}
    >
      <Image
        src="/assets/envelope/top-flap.png"
        alt="Envelope top flap"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}