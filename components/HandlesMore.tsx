import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { handlesMore } from "@/lib/content";

export function HandlesMore() {
  return (
    <section className="border-t border-hairline bg-paper-alt py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{handlesMore.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {handlesMore.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            {handlesMore.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {handlesMore.cases.map((item, i) => (
            <Reveal key={item.label} delayMs={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-paper p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  {item.label}
                </p>
                <p className="mt-3 rounded-xl bg-paper-alt px-4 py-3 text-sm font-medium italic text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {item.response}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
