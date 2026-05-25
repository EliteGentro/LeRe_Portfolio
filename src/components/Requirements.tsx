import { useEffect, useMemo, useState } from "react";
import { Section } from "./Section";
import {
  functionalRequirements,
  nonFunctionalRequirements,
  userStories,
  type Requirement,
  type UserStory,
} from "../data/content";

type Tab = "functional" | "non-functional" | "stories";

const PAGE_SIZE = 10;

export function Requirements() {
  const [tab, setTab] = useState<Tab>("functional");
  const [query, setQuery] = useState("");

  const counts = {
    functional: functionalRequirements.length,
    "non-functional": nonFunctionalRequirements.length,
    stories: userStories.length,
  };

  return (
    <Section
      id="requerimientos"
      number="05"
      eyebrow="Análisis de requerimientos"
      title="Especificación funcional, no funcional e historias de usuario."
      lead="Cargados automáticamente desde los CSV institucionales del proyecto. Cada elemento conserva su identificador y descripción original, presentados como tarjetas expandibles."
    >
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-bg-2 border border-bg-1">
          <TabButton
            active={tab === "functional"}
            onClick={() => setTab("functional")}
            label="Funcionales"
            count={counts.functional}
          />
          <TabButton
            active={tab === "non-functional"}
            onClick={() => setTab("non-functional")}
            label="No funcionales"
            count={counts["non-functional"]}
          />
          <TabButton
            active={tab === "stories"}
            onClick={() => setTab("stories")}
            label="Historias de usuario"
            count={counts.stories}
          />
        </div>

        <div className="relative w-full sm:w-72">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-content-3"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M20 20l-3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            placeholder="Buscar por ID o texto…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focusable w-full h-11 pl-9 pr-3 bg-white border border-bg-1 rounded-lg text-[14px] text-dark-gray placeholder:text-content-3"
            aria-label="Buscar requerimientos"
          />
        </div>
      </div>

      <div className="mt-8">
        {tab === "functional" && (
          <RequirementGrid items={functionalRequirements} query={query} />
        )}
        {tab === "non-functional" && (
          <RequirementGrid items={nonFunctionalRequirements} query={query} />
        )}
        {tab === "stories" && <StoriesList items={userStories} query={query} />}
      </div>
    </Section>
  );
}

function TabButton({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focusable inline-flex items-center gap-2 px-4 h-10 rounded-lg text-[13.5px] transition-all ${
        active
          ? "bg-white text-banorte-red shadow-sm border border-bg-1"
          : "text-banorte-gray hover:text-dark-gray"
      }`}
      style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
    >
      {label}
      <span
        className={`inline-flex items-center justify-center min-w-[22px] px-1.5 h-5 rounded-full text-[11px] ${
          active ? "bg-banorte-red text-white" : "bg-bg-1 text-content-2"
        }`}
        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
      >
        {count}
      </span>
    </button>
  );
}

function RequirementGrid({
  items,
  query,
}: {
  items: Requirement[];
  query: string;
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (r) =>
        r.id.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => { setVisible(PAGE_SIZE); }, [filtered]);

  if (filtered.length === 0) {
    return (
      <div className="card p-10 text-center text-content-3 italic">
        Sin coincidencias para "{query}".
      </div>
    );
  }

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - visible;

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map((r) => (
          <article
            key={r.id}
            className="card card-hover p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className="text-[11px] text-banorte-red"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {r.id}
              </span>
              <span
                className={
                  r.type === "functional" ? "pill pill-red" : "pill pill-warning"
                }
              >
                {r.type === "functional" ? "Funcional" : "No funcional"}
              </span>
            </div>
            <p className="text-[14px] leading-[1.6] text-dark-gray">
              {r.description}
            </p>
          </article>
        ))}
      </div>

      {remaining > 0 && (
        <div className="flex items-center justify-center gap-4 pt-2">
          <div className="h-px flex-1 bg-bg-1" />
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-ghost focusable"
          >
            Ver más
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="text-[12px] text-content-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              ({remaining} más)
            </span>
          </button>
          <div className="h-px flex-1 bg-bg-1" />
        </div>
      )}
    </div>
  );
}

function StoriesList({ items, query }: { items: UserStory[]; query: string }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (s) =>
        s.id.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.acceptanceCriteria.some((c) => c.toLowerCase().includes(q))
    );
  }, [items, query]);

  useEffect(() => { setVisible(PAGE_SIZE); }, [filtered]);

  if (filtered.length === 0) {
    return (
      <div className="card p-10 text-center text-content-3 italic">
        Sin historias que coincidan con "{query}".
      </div>
    );
  }

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - visible;

  return (
    <div className="grid gap-3">
      {shown.map((s) => {
        const open = openId === s.id;
        return (
          <article
            key={s.id}
            className={`card ${open ? "card-accent" : "card-hover"} overflow-hidden`}
          >
            <button
              type="button"
              onClick={() => setOpenId(open ? null : s.id)}
              aria-expanded={open}
              className="focusable w-full text-left px-5 sm:px-6 py-5 flex items-start gap-4"
            >
              <span
                className="shrink-0 text-[11px] text-banorte-red mt-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {s.id}
              </span>
              <p className="flex-1 text-[14.5px] leading-[1.55] text-dark-gray">
                {s.description}
              </p>
              <span
                className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md border border-bg-1 text-content-2 transition-transform"
                style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            {open && (
              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-bg-1">
                <div className="eyebrow mt-5 mb-3">Criterios de aceptación</div>
                {s.acceptanceCriteria.length > 0 ? (
                  <ul className="grid gap-2">
                    {s.acceptanceCriteria.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--color-banorte-red)" }}
                          aria-hidden
                        />
                        <span className="text-[14px] leading-[1.55] text-dark-gray">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-content-3 italic text-[13px]">
                    Sin criterios definidos.
                  </p>
                )}
              </div>
            )}
          </article>
        );
      })}

      {remaining > 0 && (
        <div className="flex items-center justify-center gap-4 pt-1">
          <div className="h-px flex-1 bg-bg-1" />
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-ghost focusable"
          >
            Ver más
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="text-[12px] text-content-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              ({remaining} más)
            </span>
          </button>
          <div className="h-px flex-1 bg-bg-1" />
        </div>
      )}
    </div>
  );
}
