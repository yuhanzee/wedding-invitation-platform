import Image from "next/image";
import PhoneFrame from "@/components/common/PhoneFrame";

export default function EnvelopeScreen() {
  return (
    <PhoneFrame>

      <Image
        src="/assets/envelope/background.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

    </PhoneFrame>
  );
}