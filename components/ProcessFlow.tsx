import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { processFlow } from "@/lib/content";

export function ProcessFlow() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{processFlow.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {processFlow.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            {processFlow.intro}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col items-stretch gap-0 lg:flex-row lg:items-center lg:gap-0">
          {processFlow.steps.map((step, i) => (
            <div key={step.title} className="flex flex-1 flex-col items-center lg:flex-row">
              <Reveal delayMs={i * 60} className="w-full">
                <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-hairline bg-paper p-6 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>

              {i < processFlow.steps.length - 1 && (
                <span
                  aria-hidden
                  className="my-2 flex shrink-0 items-center justify-center text-ink-faint lg:mx-1 lg:my-0"
                >
                  <Icon name="ArrowDown24Regular" className="h-5 w-5 lg:hidden" />
                  <Icon name="ArrowRight24Regular" className="hidden h-5 w-5 lg:block" />
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
