import type { Content } from "@/content/types";
import { BrowserFrame } from "./browser-frame";
import { PhoneFrame } from "./phone-frame";

export function Showcase({ c }: { c: Content }) {
  const { showcase } = c;
  return (
    <section id="showcase" className="overflow-hidden bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {showcase.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{showcase.sub}</p>
        </div>

        <h3 className="mt-12 text-center text-base font-bold text-brand">
          {showcase.desktopTitle}
        </h3>
        <ul className="mt-5 grid gap-6 lg:grid-cols-2">
          {showcase.desktop.map((shot) => (
            <li key={shot.src}>
              <BrowserFrame src={shot.src} alt={shot.alt} />
              <p className="mt-3 text-center text-sm font-semibold">
                {shot.caption}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-center text-base font-bold text-brand">
          {showcase.mobileTitle}
        </h3>
      </div>
      {/* Swipe on a phone; on a wide screen all six fit in a row. */}
      <ul className="snap-row mt-5 flex gap-5 overflow-x-auto px-6 pb-6 lg:justify-center">
        {showcase.shots.map((shot) => (
          <li
            key={shot.src}
            className="w-[62%] shrink-0 sm:w-[38%] md:w-[26%] lg:w-[15.5%]"
          >
            <PhoneFrame
              src={shot.src}
              alt={shot.alt}
              sizes="(min-width: 1024px) 190px, (min-width: 768px) 26vw, 62vw"
            />
            <p className="mt-3 text-center text-sm font-semibold">
              {shot.caption}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
