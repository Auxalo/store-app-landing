import { digits } from "@/config/site";
import type { Content } from "@/content/types";
import { Icon } from "./icon";

export function Install({ c }: { c: Content }) {
  const { install } = c;
  return (
    <section id="how" className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {install.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{install.sub}</p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {install.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-card border border-line bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-lg font-extrabold text-brand-fg">
                {digits(i + 1, c.locale)}
              </span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {install.platforms.map((p) => (
            <li
              key={p.name}
              className="rounded-2xl border border-dashed border-brand/40 bg-card/60 px-5 py-4"
            >
              <p className="font-bold">{p.name}</p>
              <p className="text-sm text-muted">{p.how}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {install.perks.map((perk) => (
            <li
              key={perk.label}
              className="flex items-center gap-2 font-semibold text-brand"
            >
              <Icon name={perk.icon} className="size-5" />
              {perk.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
