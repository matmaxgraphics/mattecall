import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { setupSteps } from "@/lib/content";

export function SetupSteps() {
  return (
    <section className="border-t border-hairline bg-paper-alt py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{setupSteps.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {setupSteps.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            {setupSteps.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {setupSteps.steps.map((step, i) => (
            <Reveal key={step.number} delayMs={i * 50}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-paper p-6">
                <span className="text-3xl font-bold tabular-nums text-accent-soft-2">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
