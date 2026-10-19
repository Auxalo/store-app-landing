import type { Viewport } from "next";
import type { ReactNode } from "react";
import { Shell } from "@/components/shell";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15803d" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function BanglaLayout({ children }: { children: ReactNode }) {
  return <Shell locale="bn">{children}</Shell>;
}
