import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { keepControl } from "@/lib/content";

export function KeepControl() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <Icon name="ShieldCheckmark24Regular" className="h-6 w-6" />
          </span>
          <Eyebrow>{keepControl.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {keepControl.title}
          </h2>
          <div className="space-y-3">
            {keepControl.lines.map((line) => (
              <p key={line} className="text-base leading-relaxed text-ink-soft">
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
