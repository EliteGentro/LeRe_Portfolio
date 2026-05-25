import { Section } from "./Section";
import { modules, techStack } from "../data/project";

export function Development() {
  return (
    <Section
      id="desarrollo"
      number="06"
      eyebrow="Desarrollo e implementación"
      title="Stack institucional y arquitectura modular multi-agente."
      lead="Construido sobre tecnologías aprobadas por Banorte. El backend orquesta agentes IA en paralelo; el frontend ofrece edición granular con streaming en tiempo real."
    >
      {/* Tech stack */}
      <div className="grid gap-5">
        {techStack.map((group) => (
          <div key={group.title} className="card p-7">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
              <div>
                <div className="eyebrow mb-2">{group.title}</div>
                <p className="text-[14px] text-banorte-gray max-w-xl">
                  {group.description}
                </p>
              </div>
              <span
                className="text-[11px] text-content-3 uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {group.items.length} tecnologías
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {group.items.map((t) => (
                <div
                  key={t.name}
                  className="group relative rounded-lg border border-bg-1 bg-bg-3 p-4 transition-all hover:border-banorte-red/30 hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4
                      className="text-[13.5px] text-dark-gray leading-tight truncate"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {t.name}
                    </h4>
                    {t.version && (
                      <span
                        className="text-[10px] text-content-2 shrink-0 px-1.5 py-0.5 rounded bg-bg-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {t.version}
                      </span>
                    )}
                  </div>
                  <p className="text-[12.5px] leading-[1.5] text-banorte-gray">
                    {t.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div className="mt-10">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <div>
            <div className="eyebrow mb-2">Descripción de módulos</div>
            <h3
              className="text-[22px] text-dark-gray"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {modules.length} módulos cooperando en una sola plataforma
            </h3>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m, i) => (
            <article
              key={m.title}
              className="card card-hover p-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 h-[3px] w-12"
                style={{ background: "var(--color-banorte-red)" }}
                aria-hidden
              />
              <div
                className="text-[11px] text-content-3 mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                MOD-{String(i + 1).padStart(2, "0")}
              </div>
              <h4
                className="text-[15px] text-dark-gray mb-2 leading-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {m.title}
              </h4>
              <p className="text-[13.5px] leading-[1.6] text-banorte-gray">
                {m.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
