import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { problem } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{problem.eyebrow}</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {problem.title}
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delayMs={60}>
              <div className="space-y-3 border-l-2 border-hairline-strong pl-6">
                {problem.lines.map((line) => (
                  <p
                    key={line}
                    className="text-lg leading-relaxed text-ink-soft"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-lg leading-relaxed text-ink-soft">
                {problem.closingLine}
              </p>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="text-xl font-semibold text-ink">
                {problem.resolution}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
