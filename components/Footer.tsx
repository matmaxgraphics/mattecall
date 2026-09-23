import { Container } from "./Container";
import { Icon } from "./icons";
import { nav, siteMeta } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-paper">
            <Icon name="CallFilled" className="h-3.5 w-3.5" />
          </span>
          {siteMeta.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {siteMeta.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
