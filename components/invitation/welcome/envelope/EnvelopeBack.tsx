import Image from "next/image";

export default function EnvelopeBack() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <Image
        src="/assets/envelope/envelope-back.png"
        alt="Envelope back"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}