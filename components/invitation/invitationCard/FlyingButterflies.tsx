// "use client";

// import { motion } from "motion/react";

// const butterflies = [
//   {
//     top: "18%",
//     startX: -40,
//     endX: 430,
//     delay: 0,
//     duration: 14,
//     size: 16,
//     color: "#f5d9df",
//   },
//   {
//     top: "38%",
//     startX: 430,
//     endX: -50,
//     delay: 3,
//     duration: 17,
//     size: 13,
//     color: "#dbe8f2",
//   },
//   {
//     top: "68%",
//     startX: -45,
//     endX: 430,
//     delay: 7,
//     duration: 19,
//     size: 15,
//     color: "#f4eee8",
//   },
//   {
//     top: "82%",
//     startX: 430,
//     endX: -45,
//     delay: 10,
//     duration: 21,
//     size: 12,
//     color: "#e8cbd5",
//   },
// ];

// function Butterfly({
//   size,
//   color,
// }: {
//   size: number;
//   color: string;
// }) {
//   return (
//     <motion.div
//       className="relative"
//       style={{
//         width: size,
//         height: size,
//         filter: "drop-shadow(0 0 3px rgba(255,255,255,0.55))",
//       }}
//       animate={{
//         rotate: [-3, 3, -3],
//       }}
//       transition={{
//         duration: 1.8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       {/* Left wing */}
//       <motion.div
//         className="absolute left-[1px] top-[3px] origin-right rounded-[70%_30%_70%_30%] border"
//         style={{
//           width: size * 0.46,
//           height: size * 0.58,
//           borderColor: color,
//           background: `${color}33`,
//         }}
//         animate={{
//           rotateY: [0, 68, 0],
//           rotateZ: [-24, -8, -24],
//         }}
//         transition={{
//           duration: 0.55,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Right wing */}
//       <motion.div
//         className="absolute right-[1px] top-[3px] origin-left rounded-[30%_70%_30%_70%] border"
//         style={{
//           width: size * 0.46,
//           height: size * 0.58,
//           borderColor: color,
//           background: `${color}33`,
//         }}
//         animate={{
//           rotateY: [0, -68, 0],
//           rotateZ: [24, 8, 24],
//         }}
//         transition={{
//           duration: 0.55,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Lower wings */}
//       <div
//         className="absolute left-[2px] top-[8px] rounded-full border"
//         style={{
//           width: size * 0.34,
//           height: size * 0.34,
//           borderColor: color,
//           background: `${color}24`,
//           transform: "rotate(-20deg)",
//         }}
//       />

//       <div
//         className="absolute right-[2px] top-[8px] rounded-full border"
//         style={{
//           width: size * 0.34,
//           height: size * 0.34,
//           borderColor: color,
//           background: `${color}24`,
//           transform: "rotate(20deg)",
//         }}
//       />

//       {/* Body */}
//       <div
//         className="absolute left-1/2 top-[3px] -translate-x-1/2 rounded-full"
//         style={{
//           width: 1.5,
//           height: size * 0.72,
//           background: "#635452",
//         }}
//       />

//       {/* Antennae */}
//       <div
//         className="absolute left-[47%] top-0 h-[5px] w-px origin-bottom"
//         style={{
//           background: "#635452",
//           transform: "rotate(-28deg)",
//         }}
//       />

//       <div
//         className="absolute right-[47%] top-0 h-[5px] w-px origin-bottom"
//         style={{
//           background: "#635452",
//           transform: "rotate(28deg)",
//         }}
//       />
//     </motion.div>
//   );
// }

// export default function FlyingButterflies() {
//   return (
//     <div className="pointer-events-none absolute inset-0 z-[60] overflow-hidden">
//       {butterflies.map((butterfly, index) => (
//         <motion.div
//           key={index}
//           className="absolute"
//           style={{
//             top: butterfly.top,
//             left: 0,
//           }}
//           initial={{
//             x: butterfly.startX,
//             y: 0,
//             opacity: 0,
//           }}
//           animate={{
//             x: butterfly.endX,
//             y: [0, -18, 7, -13, 4, 0],
//             opacity: [0, 0.9, 1, 0.9, 0],
//             rotate: [-6, 5, -4, 6, -6],
//           }}
//           transition={{
//             duration: butterfly.duration,
//             delay: butterfly.delay,
//             repeat: Infinity,
//             repeatDelay: 2,
//             ease: "linear",
//           }}
//         >
//           <Butterfly
//             size={butterfly.size}
//             color={butterfly.color}
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";

type FlightPath = "left" | "right" | "center" | "tag";

type ButterflyProps = {
  color: string;
  delay: number;
  duration: number;
  path: FlightPath;
  startLeft: string;
  startTop: string;
  size: number;
};

const flightPaths = {
  left: {
    x: [0, 28, 55, 34, 75, 48, 90],
    y: [0, -35, -75, -115, -155, -195, -250],
    rotate: [-10, 12, -8, 15, -12, 9, -6],
  },

  right: {
    x: [0, -30, -58, -35, -80, -52, -105],
    y: [0, -40, -82, -122, -165, -205, -255],
    rotate: [10, -12, 8, -15, 12, -9, 6],
  },

  center: {
    x: [0, 18, -18, 24, -15, 20, 0],
    y: [0, -40, -85, -130, -175, -215, -265],
    rotate: [-5, 10, -10, 12, -8, 8, 0],
  },

  tag: {
    x: [0, -20, -45, -62, -58, -60, -32, 5],
    y: [0, -35, -70, -100, -105, -105, -60, -15],
    rotate: [8, -10, 8, -6, 0, 0, 10, -8],
  },
};

function ButterflyShape({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size * 0.84}
      viewBox="0 0 24 20"
      overflow="visible"
      animate={{
        scaleX: [1, 0.42, 1, 0.48, 1],
      }}
      transition={{
        duration: 0.38,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        filter: `drop-shadow(0 0 4px ${color}88)`,
      }}
    >
      <path
        d="M11 10C7 2 1 2 2 8C3 13 8 14 11 11Z"
        fill={color}
        opacity="0.95"
      />

      <path
        d="M13 10C17 2 23 2 22 8C21 13 16 14 13 11Z"
        fill={color}
        opacity="0.95"
      />

      <path
        d="M10.8 11C7 10 4 13 6 16C8 18 10 15 11.4 12Z"
        fill={color}
        opacity="0.72"
      />

      <path
        d="M13.2 11C17 10 20 13 18 16C16 18 14 15 12.6 12Z"
        fill={color}
        opacity="0.72"
      />

      <ellipse
        cx="12"
        cy="11"
        rx="1"
        ry="5"
        fill="#69545D"
      />

      <path
        d="M11.8 6C10.8 3.8 9.8 3 8.8 2.5"
        fill="none"
        stroke="#69545D"
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      <path
        d="M12.2 6C13.2 3.8 14.2 3 15.2 2.5"
        fill="none"
        stroke="#69545D"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function Butterfly({
  color,
  delay,
  duration,
  path,
  startLeft,
  startTop,
  size,
}: ButterflyProps) {
  const selectedPath = flightPaths[path];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: startLeft,
        top: startTop,
        transformOrigin: "center",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        x: selectedPath.x,
        y: selectedPath.y,
        rotate: selectedPath.rotate,
        opacity: [0, 1, 1, 1, 1, 0.8, 0],
        scale: [0.25, 0.72, 1, 0.92, 1, 0.82, 0.55],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "easeInOut",
      }}
    >
      <ButterflyShape color={color} size={size} />
    </motion.div>
  );
}

const sparkles = [
  { left: "16%", top: "20%", delay: 0 },
  { left: "78%", top: "18%", delay: 1.1 },
  { left: "24%", top: "47%", delay: 2.3 },
  { left: "82%", top: "55%", delay: 0.8 },
  { left: "18%", top: "74%", delay: 1.7 },
  { left: "70%", top: "82%", delay: 2.8 },
];

export default function FlyingButterflies() {
  return (
    <div className="absolute inset-0 z-[60] overflow-hidden pointer-events-none">
      {/* From left orchids */}
      <Butterfly
        color="#D99AAA"
        delay={0}
        duration={8}
        path="center"
        startLeft="22%"
        startTop="72%"
        size={25}
      />

      <Butterfly
        color="#7583A7"
        delay={3.5}
        duration={9}
        path="left"
        startLeft="24%"
        startTop="60%"
        size={21}
      />

      <Butterfly
        color="#E8B7C3"
        delay={7}
        duration={8.5}
        path="right"
        startLeft="28%"
        startTop="52%"
        size={23}
      />

      {/* From top orchids */}
      <Butterfly
        color="#F2DFCE"
        delay={10.5}
        duration={9}
        path="left"
        startLeft="76%"
        startTop="18%"
        size={22}
      />

      <Butterfly
        color="#C7B4DA"
        delay={14}
        duration={8.5}
        path="right"
        startLeft="70%"
        startTop="20%"
        size={20}
      />

      {/* Across the card */}
      <Butterfly
        color="#E5C5CF"
        delay={17.5}
        duration={9.5}
        path="center"
        startLeft="50%"
        startTop="70%"
        size={19}
      />

      {/* Near Save-the-Date tag */}
      <Butterfly
        color="#AFC7DC"
        delay={21}
        duration={10}
        path="tag"
        startLeft="80%"
        startTop="78%"
        size={18}
      />

      {sparkles.map((sparkle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: index % 2 === 0 ? 3 : 2,
            height: index % 2 === 0 ? 3 : 2,
            boxShadow:
              "0 0 5px rgba(255,255,255,0.95), 0 0 10px rgba(244,194,211,0.7)",
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.6, 1.5, 0.6],
          }}
          transition={{
            duration: 2.4,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}