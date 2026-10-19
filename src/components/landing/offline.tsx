import type { Content } from "@/content/types";
import { Icon } from "./icon";

export function Offline({ c }: { c: Content }) {
  const { offline } = c;
  return (
    <section id="offline" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-green-800 px-6 py-12 text-white sm:px-12 sm:py-16 dark:bg-green-950 dark:ring-1 dark:ring-green-800">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 size-72 rounded-full bg-green-500/20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <span className="flex size-20 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20">
              <Icon name="wifi-off" className="size-10" />
            </span>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {offline.title}
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-green-100">
                {offline.body}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {offline.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/15"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
