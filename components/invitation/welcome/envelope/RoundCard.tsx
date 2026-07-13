import Image from "next/image";
import { Playfair_Display, Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

type RoundCardProps = {
  type: "save-the-date" | "date-details";
  dateText?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function RoundCard({
  type,
  dateText = "MONDAY\nJULY 07, 2026",
  size = 140,
  className = "",
  style,
}: RoundCardProps) {
  // Generate flowers for the wreath border
  const flowerCount = 6;
  const radius = size / 2 - 4; // place flowers on the edge of the circle
  const flowers = Array.from({ length: flowerCount }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / flowerCount;
    // Offset angle to rotate the starting point
    const offsetAngle = angle - Math.PI / 2;
    const x = Math.cos(offsetAngle) * radius + size / 2;
    const y = Math.sin(offsetAngle) * radius + size / 2;
    const rotation = (offsetAngle * 180) / Math.PI + 90; // orient flowers outwards

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: `${size * 0.42}px`,
          height: `${size * 0.42}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity: 0.9,
        }}
      >
        <Image
          src="/assets/envelope/flowers.png"
          alt="wreath flower"
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>
    );
  });

  return (
    <div
      className={`relative rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(212,185,185,0.45)] border border-[#EFEAE4]/70 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: type === "save-the-date"
          ? "radial-gradient(circle, #FAF6F0 0%, #F5EDE4 100%)"
          : "radial-gradient(circle, #FCF9F6 0%, #FAF2E9 100%)",
        ...style,
      }}
    >
      {/* Wreath Border */}
      <div className="absolute inset-0 z-0">{flowers}</div>

      {/* Inner Card content container */}
      <div 
        className="relative z-10 rounded-full border border-[#E9DFD3] flex flex-col items-center justify-center text-center p-3"
        style={{
          width: `${size - 14}px`,
          height: `${size - 14}px`,
        }}
      >
        {type === "save-the-date" ? (
          <div className="flex flex-col items-center justify-center select-none">
            <span
              className={`${greatVibes.className} text-[#7D6352] text-[28px] leading-none mb-1`}
            >
              Save
            </span>
            <span
              className={`${playfair.className} text-[#B1937F] text-[9px] tracking-[0.2em] font-semibold flex items-center gap-1 my-0.5`}
            >
              <span className="w-3 h-[1px] bg-[#B1937F]/50"></span>
              THE
              <span className="w-3 h-[1px] bg-[#B1937F]/50"></span>
            </span>
            <span
              className={`${greatVibes.className} text-[#7D6352] text-[28px] leading-none mt-1`}
            >
              Date
            </span>
          </div>
        ) : (
          <div
            className={`${playfair.className} text-[#7D6352] flex flex-col items-center justify-center leading-relaxed select-none`}
          >
            {dateText.split("\n").map((line, idx) => {
              const isDate = line.includes("07") || line.includes("JULY");
              return (
                <span
                  key={idx}
                  className={
                    isDate
                      ? "text-[10px] tracking-[0.15em] font-bold text-[#A88873]"
                      : "text-[9px] tracking-[0.2em] font-semibold text-[#8C7667]"
                  }
                >
                  {line}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
