import { LOGIN_URL, SIGNUP_URL } from "@/config/site";
import type { Content } from "@/content/types";
import { Logo } from "./logo";

const homeFor = (locale: Content["locale"]) => (locale === "bn" ? "/" : "/en");
const otherFor = (locale: Content["locale"]) => (locale === "bn" ? "/en" : "/");

export function Header({ c }: { c: Content }) {
  const { nav } = c;
  const link =
    "rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg";
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href={homeFor(c.locale)}
          aria-label="Trade Hishab"
          className="shrink-0"
        >
          <Logo height={32} />
        </a>
        <nav
          aria-label="Sections"
          className="hidden items-center gap-1 md:flex"
        >
          <a className={link} href="#features">
            {nav.features}
          </a>
          <a className={link} href="#how">
            {nav.how}
          </a>
          <a className={link} href="#pricing">
            {nav.pricing}
          </a>
          <a className={link} href="#faq">
            {nav.faq}
          </a>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={otherFor(c.locale)}
            hrefLang={c.locale === "bn" ? "en" : "bn"}
            lang={c.locale === "bn" ? "en" : "bn"}
            title={nav.switchTo}
            className="rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-fg sm:text-sm"
          >
            {nav.switchLabel}
          </a>
          <a
            href={LOGIN_URL}
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold sm:inline-block"
          >
            {nav.login}
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-xl bg-brand px-3.5 py-2 text-xs font-bold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">{nav.ctaShort}</span>
            <span className="hidden sm:inline">{nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
