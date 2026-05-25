import { Section } from "./Section";

interface EmptySectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  hint: string;
}

export function EmptySection({
  id,
  number,
  eyebrow,
  title,
  hint,
}: EmptySectionProps) {
  return (
    <Section id={id} number={number} eyebrow={eyebrow} title={title} bare>
      <div
        className="card relative overflow-hidden p-10 sm:p-14"
        style={{
          background:
            "linear-gradient(180deg, var(--color-white) 0%, var(--color-bg-3) 100%)",
        }}
      >
        <div
          className="absolute inset-0 dot-bg opacity-50 pointer-events-none"
          aria-hidden
        />
        <div className="relative flex flex-col items-center text-center max-w-xl mx-auto">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(235,0,41,0.10), rgba(255,164,0,0.10))",
              border: "1px solid rgba(235, 0, 41, 0.18)",
            }}
            aria-hidden
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5h12l4 4v10a1 1 0 01-1 1H4V5z"
                stroke="var(--color-banorte-red)"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M8 11h8M8 15h5"
                stroke="var(--color-banorte-red)"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="eyebrow mb-2">Contenido pendiente</div>
          <h3
            className="text-[20px] text-dark-gray mb-3 leading-[1.3]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Sección reservada para entrega posterior
          </h3>
          <p className="text-[14px] leading-[1.6] text-banorte-gray">{hint}</p>
        </div>
      </div>
    </Section>
  );
}
