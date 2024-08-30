import {
  Titillium_Web as FontMono,
  // IBM_Plex_Mono as FontMono,
  Titillium_Web as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
