import Image from "next/image";

export default function LeftPhotoCard() {
  return (
    <div className="relative w-[115px] h-[145px]">
      <Image
        src="/assets/envelope/left-photo-card.png"
        alt="Left photo card"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}