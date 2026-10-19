import { SIGNUP_URL } from "@/config/site";
import type { Content } from "@/content/types";
import { Icon } from "./icon";
import { PhoneFrame } from "./phone-frame";

export function Hero({ c }: { c: Content }) {
  const { hero } = c;
  return (
    <section className="relative overflow-hidden">
      {/* Soft green glow and a faint grid, drawn in CSS so they cost no download. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_32rem_at_80%_-10%,var(--tint-strong),transparent_70%),radial-gradient(40rem_28rem_at_0%_30%,var(--tint),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-brand shadow-sm sm:text-sm">
            <span
              className="size-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleA}
            <span className="mt-1 block bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent dark:from-green-400 dark:to-green-500">
              {hero.titleB}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-7 py-4 text-base font-bold text-brand-fg shadow-lg shadow-green-700/25 transition hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              {hero.cta}
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-2xl border border-line bg-card px-7 py-4 text-base font-semibold transition hover:border-brand"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-3 text-sm text-muted">{hero.note}</p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {hero.chips.map((chip) => (
              <li
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full bg-tint-strong px-3.5 py-2 text-sm font-semibold text-brand"
              >
                <Icon name={chip.icon} className="size-4" />
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
          <div className="relative w-[56%] -rotate-3 sm:w-[48%] lg:w-[52%]">
            <PhoneFrame
              src="/shots/pos.png"
              alt={hero.shotAlt.pos}
              preload
              sizes="(min-width: 1024px) 260px, 50vw"
            />
          </div>
          <div className="floaty relative -ml-6 mt-12 w-[56%] rotate-3 sm:w-[48%] lg:w-[52%]">
            <PhoneFrame
              src="/shots/dashboard.png"
              alt={hero.shotAlt.dashboard}
              sizes="(min-width: 1024px) 260px, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
