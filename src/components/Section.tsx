import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface SectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  bare?: boolean;
}

export function Section({
  id,
  number,
  eyebrow,
  title,
  lead,
  children,
  bare,
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section
      id={id}
      className="scroll-mt-24 px-6 sm:px-10 lg:px-16 py-20 lg:py-28"
    >
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} max-w-6xl mx-auto`}
      >
        <div className="flex items-baseline gap-4 mb-3">
          <span
            className="font-mono text-[12px] tracking-widest text-content-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {number}
          </span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="section-title mb-5">{title}</h2>
        {lead && <p className="section-lead mb-12">{lead}</p>}
        {!lead && <div className="mb-10" />}
        <div className={bare ? "" : "space-y-8"}>{children}</div>
      </div>
    </section>
  );
}
