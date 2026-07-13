import Image from "next/image";

type PhotoCardProps = {
  imageSrc?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function PhotoCard({
  imageSrc,
  className = "",
  style,
}: PhotoCardProps) {
  return (
    <div
      className={`bg-[#FCFBF9] p-2 pb-5 rounded-[2px] shadow-[0_8px_20px_rgba(224,196,196,0.35)] border border-[#EAE4DC] ${className}`}
      style={{
        width: "115px",
        height: "145px",
        ...style,
      }}
    >
      <div className="relative w-full h-[110px] bg-[#FAF8F5] overflow-hidden rounded-[1px] border border-[#F2ECE5]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Wedding portrait preview"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-[#FAF4EF] to-[#EBE2D9] flex flex-col items-center justify-center p-2 opacity-90">
            {/* Elegant placeholder silhouette or floral path */}
            <svg 
              className="w-8 h-8 text-[#D1C3B4] mb-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" 
              />
            </svg>
            <span className="text-[7px] tracking-wider text-[#A89889] font-medium uppercase">
              Photo Slot
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
