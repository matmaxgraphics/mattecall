"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowClockwiseRegular,
  PersonRegular,
  CallFilled,
} from "@fluentui/react-icons";
import { Container, Eyebrow } from "./Container";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { chatDemo } from "@/lib/content";

type Phase = "idle" | "typing" | "shown";

// Typing duration scales gently with message length so longer replies
// feel like they took a moment to compose, short ones feel snappy.
function typingDurationFor(text: string) {
  const base = 500;
  const perChar = 14;
  const duration = base + Math.min(text.length, 90) * perChar;
  return Math.min(Math.max(duration, 650), 2000);
}

const PAUSE_AFTER_MESSAGE = 420;
const OUTCOME_STAGGER = 260;

export function ChatDemo() {
  const messages = chatDemo.messages;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [typingFrom, setTypingFrom] = useState<"customer" | "ai" | null>(
    null
  );
  const [outcomesShown, setOutcomesShown] = useState(0);
  const [closingShown, setClosingShown] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reducedMotion = useRef(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const runSequence = useCallback(() => {
    clearTimers();
    setVisibleCount(0);
    setOutcomesShown(0);
    setClosingShown(false);
    setPhase("idle");

    if (reducedMotion.current) {
      setVisibleCount(messages.length);
      setOutcomesShown(chatDemo.outcomes.length);
      setClosingShown(true);
      return;
    }

    let elapsed = 400;

    messages.forEach((message, index) => {
      const typingDuration = typingDurationFor(message.text);

      const startTyping = setTimeout(() => {
        setTypingFrom(message.from);
        setPhase("typing");
      }, elapsed);
      timers.current.push(startTyping);

      elapsed += typingDuration;

      const revealMessage = setTimeout(() => {
        setPhase("shown");
        setTypingFrom(null);
        setVisibleCount(index + 1);
      }, elapsed);
      timers.current.push(revealMessage);

      elapsed += PAUSE_AFTER_MESSAGE;
    });

    chatDemo.outcomes.forEach((_, index) => {
      const t = setTimeout(() => {
        setOutcomesShown(index + 1);
      }, elapsed + index * OUTCOME_STAGGER);
      timers.current.push(t);
    });

    const closingTimer = setTimeout(
      () => setClosingShown(true),
      elapsed + chatDemo.outcomes.length * OUTCOME_STAGGER + 250
    );
    timers.current.push(closingTimer);
  }, [messages]);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    // Deferred to the next frame so the state resets inside runSequence
    // happen outside this effect's synchronous execution.
    const raf = requestAnimationFrame(() => runSequence());
    return () => {
      cancelAnimationFrame(raf);
      clearTimers();
    };
  }, [started, runSequence]);

  const isDone =
    closingShown && outcomesShown === chatDemo.outcomes.length;

  return (
    <section id="demo" className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{chatDemo.eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {chatDemo.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            {chatDemo.description}
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <div
            ref={sectionRef}
            className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-hairline bg-paper shadow-[0_1px_2px_rgba(20,19,15,0.04),0_24px_48px_-24px_rgba(20,19,15,0.18)]"
          >
            <div className="flex items-center justify-between border-b border-hairline bg-paper-alt px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
                  <CallFilled className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-ink">
                  Live call transcript
                </span>
              </div>
              <button
                type="button"
                onClick={runSequence}
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
                aria-label="Replay the conversation"
              >
                <ArrowClockwiseRegular className="h-3.5 w-3.5" />
                Replay
              </button>
            </div>

            <div className="flex min-h-[360px] flex-col justify-end gap-3 px-5 py-6 sm:px-7">
              {messages.slice(0, visibleCount).map((message, index) => (
                <ChatBubble key={index} from={message.from} text={message.text} />
              ))}

              {phase === "typing" && typingFrom && (
                <TypingBubble from={typingFrom} />
              )}
            </div>

            <div className="border-t border-hairline bg-paper-alt px-5 py-5 sm:px-7">
              <div className="flex flex-wrap gap-2">
                {chatDemo.outcomes.map((outcome, index) => (
                  <span
                    key={outcome.label}
                    className={`inline-flex items-center gap-1.5 rounded-full border border-hairline-strong bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-all duration-300 ${
                      index < outcomesShown
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0"
                    }`}
                  >
                    <Icon
                      name={outcome.icon}
                      className="h-3.5 w-3.5 text-accent"
                    />
                    {outcome.label}
                  </span>
                ))}
              </div>

              <p
                className={`mt-4 text-sm font-medium text-ink-soft transition-opacity duration-500 ${
                  isDone ? "opacity-100" : "opacity-0"
                }`}
              >
                {chatDemo.closingLine}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ChatBubble({
  from,
  text,
}: {
  from: "customer" | "ai";
  text: string;
}) {
  const isCustomer = from === "customer";
  return (
    <div
      className={`flex animate-bubble-in items-end gap-2 ${
        isCustomer ? "flex-row-reverse self-end" : "self-start"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          isCustomer ? "bg-paper-deep text-ink-soft" : "bg-ink text-paper"
        }`}
      >
        {isCustomer ? (
          <PersonRegular className="h-3.5 w-3.5" />
        ) : (
          <CallFilled className="h-3 w-3" />
        )}
      </span>
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isCustomer
            ? "rounded-br-sm bg-paper-deep text-ink"
            : "rounded-bl-sm bg-ink text-paper"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function TypingBubble({ from }: { from: "customer" | "ai" }) {
  const isCustomer = from === "customer";
  return (
    <div
      className={`flex animate-bubble-in items-end gap-2 ${
        isCustomer ? "flex-row-reverse self-end" : "self-start"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          isCustomer ? "bg-paper-deep text-ink-soft" : "bg-ink text-paper"
        }`}
      >
        {isCustomer ? (
          <PersonRegular className="h-3.5 w-3.5" />
        ) : (
          <CallFilled className="h-3 w-3" />
        )}
      </span>
      <div
        className={`flex items-center gap-1 rounded-2xl px-4 py-3 ${
          isCustomer
            ? "rounded-br-sm bg-paper-deep"
            : "rounded-bl-sm bg-ink"
        }`}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
            className={`dot h-1.5 w-1.5 rounded-full ${
              isCustomer ? "bg-ink-faint" : "bg-paper/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
