import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { finalCta } from "@/lib/content";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(209,83,29,0.28)_0%,transparent_70%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <Eyebrow>
                <span className="text-accent-soft-2">{finalCta.eyebrow}</span>
              </Eyebrow>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
                {finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/75">
                {finalCta.body}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={finalCta.secondaryCta.href}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-paper px-7 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  {finalCta.secondaryCta.label}
                  <Icon name="ArrowRightRegular" className="h-4 w-4" />
                </a>
                <a
                  href={finalCta.primaryCta.href}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-paper/25 px-7 text-sm font-semibold text-paper transition-colors hover:bg-paper/10 sm:w-auto"
                >
                  <Icon name="PlayCircle24Regular" className="h-5 w-5 text-accent-soft-2" />
                  {finalCta.primaryCta.label}
                </a>
              </div>

              <p className="mt-8 text-sm font-medium text-paper/60">
                {finalCta.footerLine}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
