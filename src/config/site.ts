/** One place for the facts the whole page (and its SEO data) repeats. Change here, not in copy. */

export const SITE_URL = "https://hishab.trade";
export const APP_URL = "https://app.hishab.trade";
export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = `${APP_URL}/signup`;

export const BRAND = { en: "Trade Hishab", bn: "ট্রেড হিসাব" } as const;

/** Taka. Keep in step with the plans in the app (store-app: src/billing/plans.ts). */
export const PRICES = { m1: 599, m6: 2999, m12: 5999 } as const;
export const TRIAL_DAYS = 30;

export const SAVINGS = {
  m6: PRICES.m1 * 6 - PRICES.m6,
  m12: PRICES.m1 * 12 - PRICES.m12,
} as const;

/** Optional contact details, set as environment variables at build time. Hidden when empty. */
export const CONTACT = {
  whatsapp: process.env.SUPPORT_WHATSAPP ?? "", // digits with country code, e.g. 8801XXXXXXXXX
  email: process.env.SUPPORT_EMAIL ?? "",
} as const;

export type Locale = "bn" | "en";

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

/** 599 -> "৫৯৯" for Bangla, unchanged for English. */
export function digits(value: string | number, locale: Locale): string {
  const s = String(value);
  return locale === "bn" ? s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : s;
}

/** 2999 -> "৳২,৯৯৯" / "৳2,999". */
export function taka(value: number, locale: Locale): string {
  return `৳${digits(value.toLocaleString("en-US"), locale)}`;
}
