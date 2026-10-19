import type { ReactNode } from "react";
import type { Locale } from "@/config/site";
import { bengali, inter } from "@/lib/fonts";

/** The <html> and <body> for one language. Each language has its own root layout. */
export function Shell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  // The English page never shows Bangla text, so it does not load the Bangla font at all.
  const fonts =
    locale === "bn" ? `${inter.variable} ${bengali.variable}` : inter.variable;
  return (
    <html lang={locale} className={fonts}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
