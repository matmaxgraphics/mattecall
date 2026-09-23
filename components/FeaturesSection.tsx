import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { features } from "@/lib/content";

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="border-t border-hairline bg-paper-alt py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{features.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {features.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 60}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-hairline bg-paper p-6 transition-shadow hover:shadow-[0_1px_2px_rgba(20,19,15,0.04),0_16px_32px_-20px_rgba(20,19,15,0.18)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
