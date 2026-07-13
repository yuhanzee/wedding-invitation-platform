import Image from "next/image";

export default function Background() {
  return (
    <Image
      src="/assets/envelope/background.png"
      alt="Background"
      fill
      priority
      className="object-cover"
    />
  );
}