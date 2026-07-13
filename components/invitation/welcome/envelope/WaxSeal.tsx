// import Image from "next/image";

// type WaxSealProps = {
//   isOpen?: boolean;
// };

// export default function WaxSeal({ isOpen = false }: WaxSealProps) {
//   return (
//     <Image
//       src="/assets/envelope/wax-seal.png"
//       alt="Wax seal"
//       width={70}
//       height={70}
//       className="absolute left-1/2 z-50 -translate-x-1/2 transition-all duration-[900ms] cubic-bezier(0.4, 0, 0.2, 1)"
//       style={{
//         top: isOpen ? "125px" : "110px",
//         transform: isOpen
//           ? "translateX(-50%) scale(0.92) rotate(-5deg)"
//           : "translateX(-50%) scale(1) rotate(0deg)",
//         filter: isOpen
//           ? "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))"
//           : "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))",
//       }}
//       priority
//     />
//   );
// }


import Image from "next/image";

type WaxSealProps = {
  isOpen: boolean;
};

export default function WaxSeal({
  isOpen,
}: WaxSealProps) {
  return (
    <Image
      src="/assets/envelope/wax-seal.png"
      alt="Wax seal"
      width={45}
      height={45}
      priority
      className="absolute left-1/2 top-[100px] -translate-x-1/ z-50 transition-all duration-500"
      style={{
        opacity: isOpen ? 0 : 1,
        transform: isOpen
          ? "translateX(-50%) scale(0.6)"
          : "translateX(-50%) scale(1)",
      }}
    />
  );
}