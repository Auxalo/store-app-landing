import type { Content } from "@/content/types";
import { Icon } from "./icon";

export function Features({ c }: { c: Content }) {
  const { features } = c;
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {features.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{features.sub}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <li
              key={item.title}
              className="group rounded-card border border-line bg-card p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-green-700/10"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-tint-strong text-brand transition group-hover:bg-brand group-hover:text-brand-fg">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
