import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});