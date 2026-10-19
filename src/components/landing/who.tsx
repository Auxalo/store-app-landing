import type { Content } from "@/content/types";
import { Icon } from "./icon";

export function Who({ c }: { c: Content }) {
  const { who } = c;
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {who.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{who.sub}</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {who.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center gap-3 rounded-card border border-line bg-card px-3 py-6 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-tint-strong text-brand">
                <Icon name={item.icon} className="size-6" />
              </span>
              <span className="font-semibold">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
