import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { whoIsThisFor } from "@/lib/content";

export function WhoIsThisFor() {
  return (
    <section className="border-t border-hairline bg-paper-alt py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{whoIsThisFor.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {whoIsThisFor.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {whoIsThisFor.reasons.map((reason, i) => (
            <Reveal key={reason.title} delayMs={i * 60}>
              <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-paper p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={reason.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {reason.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={260}>
          <div className="mt-10 rounded-2xl border border-hairline bg-paper p-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              {whoIsThisFor.examplesLabel}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {whoIsThisFor.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-hairline-strong bg-paper-alt px-4 py-1.5 text-sm font-medium text-ink-soft"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
