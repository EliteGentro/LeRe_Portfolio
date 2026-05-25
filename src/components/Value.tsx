import { Section } from "./Section";
import { valueProps } from "../data/project";

const icons = [
  // clock
  <path key="i" d="M12 7v5l3 2M12 21a9 9 0 110-18 9 9 0 010 18z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  // shield-check
  <path key="i" d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  // bolt
  <path key="i" d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  // network
  <g key="i" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round"><circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7.5 7.5L11 16M16.5 7.5L13 16M8 6h8"/></g>,
  // pencil
  <path key="i" d="M4 20l4-1 11-11-3-3L5 16l-1 4zM14 7l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  // lock
  <g key="i" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></g>,
];

export function Value() {
  return (
    <Section
      id="valor"
      number="04"
      eyebrow="Valor agregado"
      title="Una capa institucional sobre la IA generativa, no un wrapper."
      lead="LeRe traduce los lineamientos de Banorte en restricciones duras del agente. La gobernanza vive dentro del modelo, no como una validación de UI que se puede saltar."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {valueProps.map((v, i) => (
          <article
            key={v.title}
            className="card card-hover p-7 group"
          >
            <div
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-5 text-banorte-red"
              style={{
                background: "rgba(235, 0, 41, 0.08)",
                border: "1px solid rgba(235, 0, 41, 0.18)",
              }}
              aria-hidden
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {icons[i % icons.length]}
              </svg>
            </div>
            <h3
              className="text-[16px] text-dark-gray mb-2 leading-[1.3]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {v.title}
            </h3>
            <p className="text-[14px] leading-[1.6] text-banorte-gray">
              {v.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
