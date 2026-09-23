import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent-soft)_0%,transparent_70%)]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-hairline-strong bg-paper-alt px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-ink-soft">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delayMs={190}>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink-soft">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delayMs={230}>
            <p className="mx-auto mt-4 max-w-xl text-base font-semibold text-ink">
              {hero.callout}
            </p>
          </Reveal>

          <Reveal delayMs={280}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                {hero.secondaryCta.label}
                <Icon name="ArrowRightRegular" className="h-4 w-4" />
              </a>
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-hairline-strong bg-paper px-7 text-sm font-semibold text-ink transition-colors hover:bg-paper-alt sm:w-auto"
              >
                <Icon name="PlayCircle24Regular" className="h-5 w-5 text-accent" />
                {hero.primaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={340}>
          <HeroCallCard />
        </Reveal>
      </Container>
    </section>
  );
}

function HeroCallCard() {
  return (
    <div className="relative mx-auto mt-16 max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-hairline bg-paper shadow-[0_1px_2px_rgba(20,19,15,0.04),0_24px_48px_-24px_rgba(20,19,15,0.18)]">
        <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-semibold text-ink">
              Incoming call, answered in 1 ring
            </span>
          </div>
          <span className="text-xs font-medium text-ink-faint">
            00:14
          </span>
        </div>

        <div className="px-6 pb-8 pt-7">
          <div className="flex h-16 items-end gap-1">
            {waveform.map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className="w-1.5 shrink-0 rounded-full bg-accent-soft-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const waveform = [
  22, 38, 54, 30, 70, 44, 60, 28, 48, 66, 34, 52, 40, 58, 26, 46, 62, 36, 50,
  24, 42, 56, 32, 48, 64, 28, 38,
];
