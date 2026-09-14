"use client";

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#FFF9F3]">
      {/* SOFT IVORY / BLUSH BASE */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 12% 12%, rgba(231,174,184,0.13), transparent 28%),
            radial-gradient(circle at 90% 78%, rgba(9,39,91,0.07), transparent 30%),
            linear-gradient(
              180deg,
              #FFFDF9 0%,
              #FFF9F4 48%,
              #FFF7F2 100%
            )
          `,
        }}
      />

      {/* ==========================================
          TOP LEFT ORCHID
      ========================================== */}
      <svg
        className="
          absolute
          -left-[12%]
          -top-[5%]
          h-[clamp(210px,45vw,350px)]
          w-[clamp(210px,45vw,350px)]
          opacity-75
        "
        viewBox="0 0 300 300"
        fill="none"
      >
        {/* STEM */}
        <path
          d="M22 255 C70 218 72 150 124 109 C166 76 218 71 278 31"
          stroke="#C69A48"
          strokeWidth="1.3"
        />

        {/* ORCHID 1 */}
        <g transform="translate(105 95)">
          <path
            d="M45 48 C2 25 5 -15 38 -20 C63 -24 71 13 58 39"
            stroke="#DDA7AF"
            strokeWidth="1.6"
          />

          <path
            d="M48 48 C72 3 116 5 118 35 C120 62 82 70 57 57"
            stroke="#DDA7AF"
            strokeWidth="1.6"
          />

          <path
            d="M49 48 C26 75 30 111 56 111 C80 110 79 78 59 57"
            stroke="#DDA7AF"
            strokeWidth="1.5"
          />

          <path
            d="M47 45 C33 28 35 13 48 8 C61 14 65 29 55 46"
            stroke="#B9848D"
            strokeWidth="1.3"
          />

          <path
            d="M43 51 C47 43 54 43 60 51 C56 65 48 67 43 51Z"
            stroke="#C69A48"
            strokeWidth="1.4"
          />

          <circle
            cx="51"
            cy="50"
            r="3"
            fill="#C69A48"
          />
        </g>

        {/* SMALL BUD */}
        <path
          d="M213 69 C199 50 206 33 221 31 C239 31 244 49 230 66 C224 72 219 73 213 69Z"
          stroke="#DDA7AF"
          strokeWidth="1.3"
        />

        {/* LEAVES */}
        <path
          d="M85 160 C44 137 34 164 78 180 C94 185 101 173 85 160Z"
          stroke="#0A2D63"
          strokeWidth="1.4"
        />

        <path
          d="M146 100 C131 66 151 55 165 83 C171 97 160 107 146 100Z"
          stroke="#C69A48"
          strokeWidth="1.2"
        />
      </svg>

      {/* ==========================================
          TOP RIGHT NAVY ORCHID
      ========================================== */}
      <svg
        className="
          absolute
          -right-[17%]
          top-[3%]
          h-[clamp(180px,40vw,310px)]
          w-[clamp(180px,40vw,310px)]
          rotate-[12deg]
          opacity-55
        "
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M280 20 C220 72 203 117 188 171 C177 213 144 248 91 282"
          stroke="#0A2D63"
          strokeWidth="1.5"
        />

        <g transform="translate(130 88)">
          <path
            d="M54 54 C5 34 6 -7 40 -14 C68 -18 74 19 63 46"
            stroke="#0A2D63"
            strokeWidth="1.7"
          />

          <path
            d="M57 52 C79 9 120 12 121 42 C121 70 85 74 65 61"
            stroke="#0A2D63"
            strokeWidth="1.7"
          />

          <path
            d="M54 56 C30 79 35 111 59 112 C82 112 83 82 65 61"
            stroke="#0A2D63"
            strokeWidth="1.5"
          />

          <path
            d="M48 56 C53 45 61 45 68 54 C63 68 54 70 48 56Z"
            stroke="#C69A48"
            strokeWidth="1.4"
          />
        </g>

        <path
          d="M188 171 C219 150 234 163 212 186 C201 197 190 189 188 171Z"
          stroke="#DDA7AF"
          strokeWidth="1.3"
        />

        <path
          d="M155 223 C126 198 108 211 130 238 C141 250 154 241 155 223Z"
          stroke="#C69A48"
          strokeWidth="1.2"
        />
      </svg>

      {/* ==========================================
          LEFT MIDDLE BLUSH ORCHID LINE
      ========================================== */}
      <svg
        className="
          absolute
          -left-[24%]
          top-[38%]
          h-[clamp(190px,45vw,340px)]
          w-[clamp(190px,45vw,340px)]
          -rotate-[15deg]
          opacity-35
        "
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M15 280 C83 226 88 159 151 112 C195 79 231 61 288 38"
          stroke="#DDA7AF"
          strokeWidth="1.5"
        />

        <g transform="translate(105 90)">
          <path
            d="M50 52 C2 31 8 -12 40 -16 C67 -20 76 19 62 47"
            stroke="#DDA7AF"
            strokeWidth="1.7"
          />

          <path
            d="M55 53 C76 7 119 9 121 40 C122 67 84 75 65 61"
            stroke="#DDA7AF"
            strokeWidth="1.7"
          />

          <path
            d="M53 57 C28 80 34 115 60 115 C84 114 84 82 65 61"
            stroke="#DDA7AF"
            strokeWidth="1.5"
          />

          <path
            d="M48 56 C52 46 61 44 68 55 C63 69 54 70 48 56Z"
            stroke="#C69A48"
            strokeWidth="1.3"
          />
        </g>
      </svg>

      {/* ==========================================
          RIGHT MIDDLE GOLD CURVE
      ========================================== */}
      <svg
        className="
          absolute
          -right-[18%]
          top-[41%]
          h-[300px]
          w-[190px]
          opacity-45
        "
        viewBox="0 0 190 300"
        fill="none"
      >
        <path
          d="M186 5 C97 51 165 113 93 150 C38 178 85 240 7 294"
          stroke="#C69A48"
          strokeWidth="1.3"
        />

        <path
          d="M158 67 C125 48 116 69 145 87 C158 95 169 83 158 67Z"
          stroke="#DDA7AF"
          strokeWidth="1.3"
        />

        <path
          d="M98 149 C72 123 55 140 78 164 C89 175 102 166 98 149Z"
          stroke="#0A2D63"
          strokeWidth="1.3"
        />
      </svg>

      {/* ==========================================
          BOTTOM LEFT NAVY + GOLD ORCHID
      ========================================== */}
      <svg
        className="
          absolute
          -bottom-[10%]
          -left-[18%]
          h-[clamp(230px,55vw,390px)]
          w-[clamp(230px,55vw,390px)]
          opacity-55
        "
        viewBox="0 0 320 320"
        fill="none"
      >
        <path
          d="M13 309 C78 267 78 210 127 167 C168 131 220 113 306 67"
          stroke="#0A2D63"
          strokeWidth="1.5"
        />

        <g transform="translate(104 119)">
          <path
            d="M53 53 C4 31 6 -9 40 -16 C67 -21 77 17 63 46"
            stroke="#0A2D63"
            strokeWidth="1.8"
          />

          <path
            d="M56 53 C78 7 120 10 122 40 C123 68 85 75 65 61"
            stroke="#0A2D63"
            strokeWidth="1.8"
          />

          <path
            d="M53 57 C28 80 34 114 60 115 C84 114 84 82 65 61"
            stroke="#0A2D63"
            strokeWidth="1.6"
          />

          <path
            d="M48 56 C52 45 61 44 68 54 C63 69 54 70 48 56Z"
            stroke="#C69A48"
            strokeWidth="1.5"
          />
        </g>

        <path
          d="M212 120 C189 89 207 76 226 101 C237 115 227 127 212 120Z"
          stroke="#DDA7AF"
          strokeWidth="1.3"
        />
      </svg>

      {/* ==========================================
          BOTTOM RIGHT BLUSH ORCHID
      ========================================== */}
      <svg
        className="
          absolute
          -bottom-[7%]
          -right-[23%]
          h-[clamp(240px,58vw,400px)]
          w-[clamp(240px,58vw,400px)]
          opacity-65
        "
        viewBox="0 0 320 320"
        fill="none"
      >
        <path
          d="M308 308 C259 258 256 211 209 167 C169 129 117 110 18 68"
          stroke="#C69A48"
          strokeWidth="1.5"
        />

        <g transform="translate(92 112)">
          <path
            d="M53 53 C4 31 6 -9 40 -16 C67 -21 77 17 63 46"
            stroke="#DDA7AF"
            strokeWidth="1.8"
          />

          <path
            d="M56 53 C78 7 120 10 122 40 C123 68 85 75 65 61"
            stroke="#DDA7AF"
            strokeWidth="1.8"
          />

          <path
            d="M53 57 C28 80 34 114 60 115 C84 114 84 82 65 61"
            stroke="#DDA7AF"
            strokeWidth="1.6"
          />

          <path
            d="M48 56 C52 45 61 44 68 54 C63 69 54 70 48 56Z"
            stroke="#C69A48"
            strokeWidth="1.5"
          />
        </g>

        <path
          d="M204 128 C229 97 244 113 224 140 C214 152 201 145 204 128Z"
          stroke="#0A2D63"
          strokeWidth="1.4"
        />
      </svg>

      {/* ==========================================
          ELEGANT FLOWING LINES
      ========================================== */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 430 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* NAVY */}
        <path
          d="M-30 180 C95 110 89 263 213 181 C305 121 347 48 466 111"
          stroke="#0A2D63"
          strokeWidth="1"
        />

        {/* GOLD */}
        <path
          d="M-45 191 C85 130 108 280 225 195 C321 126 365 72 470 133"
          stroke="#C69A48"
          strokeWidth="0.8"
        />

        {/* BLUSH */}
        <path
          d="M-28 696 C83 633 129 760 225 695 C312 635 360 606 469 671"
          stroke="#DDA7AF"
          strokeWidth="1"
        />

        {/* GOLD */}
        <path
          d="M-38 710 C79 649 129 782 236 707 C323 647 372 627 468 690"
          stroke="#C69A48"
          strokeWidth="0.8"
        />
      </svg>

      {/* ==========================================
          GOLD DUST
      ========================================== */}
      <div className="absolute left-[8%] top-[28%] h-[3px] w-[3px] rounded-full bg-[#C69A48]/60" />
      <div className="absolute left-[14%] top-[31%] h-[2px] w-[2px] rounded-full bg-[#C69A48]/50" />
      <div className="absolute right-[11%] top-[25%] h-[2px] w-[2px] rounded-full bg-[#C69A48]/60" />
      <div className="absolute right-[8%] top-[68%] h-[3px] w-[3px] rounded-full bg-[#C69A48]/50" />
      <div className="absolute left-[9%] top-[74%] h-[2px] w-[2px] rounded-full bg-[#C69A48]/60" />
      <div className="absolute right-[17%] top-[81%] h-[2px] w-[2px] rounded-full bg-[#C69A48]/50" />
    </div>
  );
}