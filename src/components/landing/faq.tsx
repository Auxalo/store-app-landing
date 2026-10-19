import type { Content } from "@/content/types";

export function Faq({ c }: { c: Content }) {
  const { faq } = c;
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          {faq.title}
        </h2>
        <div className="mt-10 space-y-3">
          {faq.items.map((item) => (
            // `name` makes the group exclusive: opening one closes the others, with no script.
            <details
              key={item.q}
              name="faq"
              className="rounded-2xl border border-line bg-card px-5 py-1 open:border-brand/50 open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-bold sm:text-lg">
                {item.q}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="chev size-5 shrink-0 text-brand transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-5 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
