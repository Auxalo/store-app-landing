import { PRICES, SIGNUP_URL, taka } from "@/config/site";
import type { Content } from "@/content/types";
import { Icon } from "./icon";

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 size-4 shrink-0 text-brand"
      fill="currentColor"
    >
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

export function Pricing({ c }: { c: Content }) {
  const { pricing } = c;
  return (
    <section id="pricing" className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{pricing.sub}</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-4 rounded-2xl bg-brand px-5 py-4 text-brand-fg shadow-lg shadow-green-700/20">
          <Icon name="sparkles" className="size-8 shrink-0" />
          <div>
            <p className="text-lg font-extrabold">{pricing.freeBanner}</p>
            <p className="text-sm opacity-90">{pricing.freeBannerSub}</p>
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {pricing.plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-[1.5rem] border p-7 ${
                plan.featured
                  ? "border-brand bg-card shadow-2xl shadow-green-700/20 ring-2 ring-brand md:-my-3 md:py-10"
                  : "border-line bg-card"
              }`}
            >
              {plan.badge ? (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold ${
                    plan.featured
                      ? "bg-brand text-brand-fg"
                      : "bg-tint-strong text-brand"
                  }`}
                >
                  {plan.badge}
                </span>
              ) : null}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-4 text-5xl font-extrabold tracking-tight">
                {taka(PRICES[plan.id], c.locale)}
              </p>
              <p className="mt-1 text-sm text-muted">{plan.period}</p>
              <div className="mt-3 space-y-1 md:min-h-14">
                {plan.per ? (
                  <p className="text-sm font-semibold text-brand">{plan.per}</p>
                ) : null}
                {plan.save ? (
                  <p className="inline-block rounded-md bg-tint-strong px-2 py-0.5 text-sm font-bold text-brand">
                    {plan.save}
                  </p>
                ) : null}
              </div>
              <a
                href={SIGNUP_URL}
                className={`mt-6 inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-bold transition ${
                  plan.featured
                    ? "bg-brand text-brand-fg shadow-lg shadow-green-700/25 hover:bg-brand-hover"
                    : "border border-line hover:border-brand"
                }`}
              >
                {pricing.cta}
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                {pricing.pay}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-card border border-line bg-card p-6 sm:p-8">
          <h3 className="text-lg font-bold">{pricing.includesTitle}</h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {pricing.includes.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
