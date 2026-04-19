import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  as?: "h2" | "h3";
  /** Optional trailing node rendered inline after the animated words (e.g. punctuation or extra span). */
  trailing?: ReactNode;
}

/**
 * Splits a heading into words and animates each word in sequence
 * the first time the element enters the viewport. Uses the existing
 * `word-pop` keyframe defined in tailwind.config.ts for a modern,
 * cinematic reveal.
 */
const AnimatedHeading = ({
  text,
  className,
  highlightWords = [],
  highlightClassName = "text-primary",
  as: Tag = "h2",
  trailing,
}: AnimatedHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn("[perspective:1000px]", className)}>
      {words.map((word, i) => {
        const cleaned = word.replace(/[¿?¡!.,:;]/g, "");
        const isHighlight = highlightWords.includes(cleaned);
        return (
          <span
            key={`${word}-${i}`}
            className={cn(
              "inline-block mr-[0.25em] opacity-0",
              visible && "animate-word-pop",
              isHighlight && highlightClassName
            )}
            style={visible ? { animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" } : undefined}
          >
            {word}
          </span>
        );
      })}
      {trailing}
    </Tag>
  );
};

export default AnimatedHeading;
