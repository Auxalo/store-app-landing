import { SIGNUP_URL } from "@/config/site";
import type { Content } from "@/content/types";

export function FinalCta({ c }: { c: Content }) {
  const { final } = c;
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 to-green-900 px-6 py-14 text-center text-white sm:py-20">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 size-80 rounded-full bg-green-400/20 blur-3xl"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {final.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
            {final.sub}
          </p>
          <a
            href={SIGNUP_URL}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-extrabold text-green-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-green-50"
          >
            {final.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
