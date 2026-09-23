import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { builtAround } from "@/lib/content";

export function BuiltAround() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{builtAround.eyebrow}</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {builtAround.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              {builtAround.intro}
            </p>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              {builtAround.closingLine}
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="rounded-3xl border border-hairline bg-paper-alt p-8">
              <p className="mb-5 text-sm font-semibold text-ink">
                {builtAround.lead}
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {builtAround.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-ink-soft"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Icon name="Checkmark20Regular" className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
