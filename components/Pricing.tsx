import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { pricing, hero } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            {pricing.intro}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[3fr_2fr] lg:items-start">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delayMs={i * 90}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border ${
                  tier.highlighted
                    ? "border-ink bg-ink p-8 text-paper shadow-[0_24px_48px_-16px_rgba(20,19,15,0.35)] sm:p-10 lg:scale-[1.03]"
                    : "border-hairline bg-paper p-6 sm:p-8"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-paper shadow-sm">
                    {tier.badge}
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] ${
                      tier.highlighted
                        ? "bg-paper/15 text-paper"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    {tier.kind}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      tier.highlighted ? "text-paper/70" : "text-ink-faint"
                    }`}
                  >
                    {tier.cadence}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-semibold ${
                    tier.highlighted ? "text-2xl" : "text-xl"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    tier.highlighted ? "text-paper/75" : "text-ink-soft"
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`font-bold tracking-tight ${
                      tier.highlighted ? "text-5xl" : "text-4xl"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlighted ? "text-paper/70" : "text-ink-faint"
                    }`}
                  >
                    {tier.priceSuffix}
                  </span>
                </div>

                {tier.foundingOffer && (
                  <div className="mt-5 rounded-2xl border border-accent-soft-2/40 bg-paper/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent-soft-2">
                      {tier.foundingOffer.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/90">
                      {tier.foundingOffer.line}
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-paper/60">
                      {tier.foundingOffer.spotsNote}
                    </p>
                  </div>
                )}

                {tier.featuresIntro && (
                  <p
                    className={`mt-6 text-sm font-semibold ${
                      tier.highlighted ? "text-paper" : "text-ink"
                    }`}
                  >
                    {tier.featuresIntro}
                  </p>
                )}

                <ul className={`${tier.featuresIntro ? "mt-3" : "mt-6"} space-y-2.5`}>
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlighted
                            ? "bg-paper/15 text-paper"
                            : "bg-accent-soft text-accent"
                        }`}
                      >
                        <Icon name="Checkmark20Regular" className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={
                          tier.highlighted ? "text-paper/90" : "text-ink-soft"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.cta.href}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform hover:-translate-y-0.5 ${
                    tier.highlighted
                      ? "h-14 bg-paper px-7 text-base text-ink"
                      : "h-12 bg-ink px-6 text-sm text-paper"
                  }`}
                >
                  {tier.cta.label}
                  <Icon name="ArrowRightRegular" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-ink-faint">
            {pricing.note}
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-sm font-medium text-ink-soft">
              Want to hear it before you decide?
            </p>
            <a
              href={hero.primaryCta.href}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-ink px-8 text-base font-semibold text-paper shadow-[0_12px_24px_-8px_rgba(20,19,15,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <Icon name="CallFilled" className="h-5 w-5 text-accent-soft-2" />
              {hero.primaryCta.label}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
