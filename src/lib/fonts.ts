import { Inter, Noto_Sans_Bengali } from "next/font/google";

// Both are self-hosted at build time: no request to Google when a visitor opens the page.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
});
