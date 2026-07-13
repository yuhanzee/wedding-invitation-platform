// import Image from "next/image";

// export default function Flowers() {
//   return (
//     <Image
//       src="/assets/envelope/flowers.png"
//       alt="Flowers"
//       width={145}
//       height={145}
//       priority
//       className="absolute bottom-[-26px] right-0 z-40 pointer-events-none select-none"
//     />
//   );
// }


import Image from "next/image";

export default function Flowers() {
  return (
    <Image
      src="/assets/envelope/flowers.png"
      alt="Flowers"
      width={135}
      height={135}
      priority
      className="
        absolute
        right-[-15px]
        bottom-[-18px]
        z-40
        w-auto
        h-auto
      "
    />
  );
}