import { Container } from "./Container";
import { Icon } from "./icons";
import { nav, siteMeta, hero } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
            <Icon name="CallFilled" className="h-4 w-4" />
          </span>
          {siteMeta.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={hero.secondaryCta.href}
          className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          {hero.secondaryCta.label}
        </a>
      </Container>
    </header>
  );
}
