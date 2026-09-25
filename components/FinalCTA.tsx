import Script from "next/script";
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

              <div className="mt-9 flex flex-col items-center justify-center gap-4">
                <a
                  href={finalCta.primaryCta.href}
                  className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-paper px-8 text-base font-semibold text-ink shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <Icon name="CallFilled" className="h-5 w-5 text-accent" />
                  {finalCta.primaryCta.label}
                </a>
                <a
                  href={finalCta.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-paper/60 underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper/85"
                >
                  {finalCta.secondaryCta.label}
                </a>
              </div>

              <p className="mt-8 text-sm font-medium text-paper/60">
                {finalCta.footerLine}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-3xl border border-hairline bg-paper p-6 sm:p-10">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {finalCta.booking.heading}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                {finalCta.booking.subheading}
              </p>
            </div>

            <div
              className="calendly-inline-widget mx-auto mt-6 w-full"
              data-url={finalCta.booking.calendlyUrl}
              style={{ minWidth: 280, height: 700 }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />

            <div className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-2.5 border-t border-hairline pt-6 text-center">
              <p className="text-sm font-medium text-ink-faint">
                Prefer email?
              </p>
              <a
                href={finalCta.booking.emailCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hairline-strong bg-paper px-6 text-sm font-semibold text-ink transition-colors hover:bg-paper-alt"
              >
                <Icon name="MailRegular" className="h-4 w-4 text-accent" />
                {finalCta.booking.emailCta.label}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
