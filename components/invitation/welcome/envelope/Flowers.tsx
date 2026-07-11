import Image from "next/image";

export default function Flowers() {
  return (
    <Image
      src="/assets/envelope/flowers.png"
      alt="Flowers"
      width={145}
      height={145}
      priority
      className="absolute bottom-[-26px] right-0 z-40 pointer-events-none select-none"
    />
  );
}