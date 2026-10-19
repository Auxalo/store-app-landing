import type { Content } from "@/content/types";
import { buildJsonLd } from "@/lib/seo";
import { Faq } from "./faq";
import { Features } from "./features";
import { FinalCta } from "./final-cta";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Install } from "./install";
import { JsonLd } from "./json-ld";
import { Offline } from "./offline";
import { Pricing } from "./pricing";
import { Showcase } from "./showcase";
import { Who } from "./who";

/** The whole one-page site for one language. Server components only: it ships as plain HTML. */
export function Landing({ c }: { c: Content }) {
  return (
    <>
      <Header c={c} />
      <main>
        <Hero c={c} />
        <Install c={c} />
        <Features c={c} />
        <Showcase c={c} />
        <Offline c={c} />
        <Who c={c} />
        <Pricing c={c} />
        <Faq c={c} />
        <FinalCta c={c} />
      </main>
      <Footer c={c} />
      <JsonLd data={buildJsonLd(c)} />
    </>
  );
}
