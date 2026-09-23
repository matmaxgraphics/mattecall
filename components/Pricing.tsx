import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {pricing.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delayMs={i * 90}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 ${
                  tier.highlighted
                    ? "border-ink bg-ink text-paper"
                    : "border-hairline bg-paper"
                }`}
              >
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

                <h3 className="mt-5 text-xl font-semibold">{tier.name}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    tier.highlighted ? "text-paper/75" : "text-ink-soft"
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
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
                  className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    tier.highlighted
                      ? "bg-paper text-ink"
                      : "bg-ink text-paper"
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
      </Container>
    </section>
  );
}
