import {
  APP_URL,
  BRAND,
  CONTACT,
  digits,
  LOGIN_URL,
  SIGNUP_URL,
} from "@/config/site";
import type { Content } from "@/content/types";
import { Logo } from "./logo";

export function Footer({ c }: { c: Content }) {
  const { footer, nav } = c;
  const year = digits(new Date().getFullYear(), c.locale);
  const link = "text-muted transition-colors hover:text-fg";
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo height={32} />
          <p className="mt-4 max-w-xs text-muted">{footer.tagline}</p>
        </div>
        <nav aria-label={footer.product}>
          <p className="font-bold">{footer.product}</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a className={link} href={APP_URL}>
                app.hishab.trade
              </a>
            </li>
            <li>
              <a className={link} href={LOGIN_URL}>
                {nav.login}
              </a>
            </li>
            <li>
              <a className={link} href={SIGNUP_URL}>
                {nav.cta}
              </a>
            </li>
            <li>
              <a className={link} href="#pricing">
                {nav.pricing}
              </a>
            </li>
          </ul>
        </nav>
        {CONTACT.whatsapp || CONTACT.email ? (
          <div>
            <p className="font-bold">{footer.contact}</p>
            <ul className="mt-3 space-y-2">
              {CONTACT.whatsapp ? (
                <li>
                  <a
                    className={link}
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                  >
                    {footer.whatsapp}
                  </a>
                </li>
              ) : null}
              {CONTACT.email ? (
                <li>
                  <a className={link} href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        © {year} {c.locale === "bn" ? BRAND.bn : BRAND.en}. {footer.rights}
      </div>
    </footer>
  );
}
