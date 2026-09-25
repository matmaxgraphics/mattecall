"use client";

// Fluent UI icon components render Griffel-generated styles that only run
// on the client, so this module (and everything that renders a raw Fluent
// icon element) must be a Client Component. Wrapping every icon behind
// this single lookup lets the rest of the site's Server Components render
// icons by name without themselves becoming Client Components.
import {
  PhoneRegular,
  PersonChatRegular,
  QuestionCircleRegular,
  CalendarCheckmarkRegular,
  WeatherMoonRegular,
  ArrowForwardRegular,
  CheckmarkCircleFilled,
  MailCheckmarkRegular,
  MailRegular,
  MoneyRegular,
  WarningRegular,
  PersonRegular,
  TagRegular,
  AlertRegular,
  ClipboardTaskRegular,
  WrenchScrewdriverRegular,
  CallFilled,
  ArrowRightRegular,
  PlayCircle24Regular,
  ArrowDown24Regular,
  ArrowRight24Regular,
  Checkmark20Regular,
  ShieldCheckmark24Regular,
  ArrowClockwiseRegular,
  ChevronDownRegular,
} from "@fluentui/react-icons";
import type { FluentIcon } from "@fluentui/react-icons";

export const iconRegistry: Record<string, FluentIcon> = {
  PhoneRegular,
  PersonChatRegular,
  QuestionCircleRegular,
  CalendarCheckmarkRegular,
  WeatherMoonRegular,
  ArrowForwardRegular,
  CheckmarkCircleFilled,
  MailCheckmarkRegular,
  MailRegular,
  MoneyRegular,
  WarningRegular,
  PersonRegular,
  TagRegular,
  AlertRegular,
  ClipboardTaskRegular,
  WrenchScrewdriverRegular,
  CallFilled,
  ArrowRightRegular,
  PlayCircle24Regular,
  ArrowDown24Regular,
  ArrowRight24Regular,
  Checkmark20Regular,
  ShieldCheckmark24Regular,
  ArrowClockwiseRegular,
  ChevronDownRegular,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconRegistry[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
