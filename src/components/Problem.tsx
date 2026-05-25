import { Section } from "./Section";

const problems = [
  {
    title: "Tiempo elevado de arranque",
    body:
      "La generación manual de documentación inicial (requerimientos, stack, hitos, diagramas) puede tomar días y requiere múltiples perfiles trabajando en serie.",
  },
  {
    title: "Heterogeneidad documental",
    body:
      "Sin estructura estandarizada, los proyectos producen documentos inconsistentes en formato, profundidad y terminología.",
  },
  {
    title: "Riesgo de incumplimiento tecnológico",
    body:
      "Los equipos pueden proponer tecnologías no aprobadas por el banco, generando retrabajos en etapas tardías del ciclo de vida.",
  },
  {
    title: "Pérdida de contexto entre roles",
    body:
      "El conocimiento de analistas, arquitectos y desarrolladores no se consolida de forma estructurada al inicio del proyecto.",
  },
  {
    title: "Curva de adopción de LLMs genéricos",
    body:
      "El uso directo de LLMs no garantiza alineación con lineamientos institucionales ni produce artefactos en el formato esperado.",
  },
];

const specificObjectives = [
  "Implementar un flujo conversacional que evalúe la completitud de una idea y solicite aclaraciones antes de generar.",
  "Construir un orquestador que coordine subagentes especializados en paralelo: contexto, requerimientos (SRS), stack, hitos y diagramas.",
  "Restringir las recomendaciones tecnológicas al catálogo aprobado por Banorte, con validación por LLM de cualquier modificación.",
  "Proveer una interfaz de edición que permita ajustar o regenerar cualquier sección mediante lenguaje natural.",
  "Garantizar seguridad con JWT, RBAC granular y rate limiting sobre endpoints críticos.",
  "Soportar múltiples usuarios con generaciones concurrentes completamente aisladas entre sí.",
  "Permitir la exportación de la documentación generada en formato PDF y DOCX.",
];

export function Problem() {
  return (
    <Section
      id="problema"
      number="03"
      eyebrow="Problema y objetivos"
      title="Una fricción institucional al inicio de cada proyecto."
      lead="Iniciar un proyecto en un entorno bancario combina presión de tiempo, requisitos de gobernanza y la necesidad de producir documentación auditable. LeRe ataca esa fricción desde la primera línea."
    >
      {/* Problem cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((p, i) => (
          <article
            key={p.title}
            className="card card-hover p-6 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 h-full w-[3px]"
              style={{ background: "var(--color-banorte-red)" }}
              aria-hidden
            />
            <div
              className="text-[11px] mb-2 text-content-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              P-{String(i + 1).padStart(2, "0")}
            </div>
            <h3
              className="text-[15px] text-dark-gray mb-2 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {p.title}
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-banorte-gray">
              {p.body}
            </p>
          </article>
        ))}
      </div>

      {/* Objectives */}
      <div className="grid lg:grid-cols-12 gap-5 mt-10">
        <div className="lg:col-span-5">
          <div className="card-accent p-7 h-full">
            <div className="eyebrow mb-3">Objetivo general</div>
            <h3
              className="text-[20px] text-dark-gray leading-[1.3]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Automatizar la generación de documentación base de proyectos de
              software, alineada a los estándares tecnológicos y normativos de
              Banorte, reduciendo el tiempo de arranque y estandarizando los
              entregables desde la primera iteración.
            </h3>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="card p-7 h-full">
            <div className="eyebrow mb-4">Objetivos específicos</div>
            <ol className="grid gap-3">
              {specificObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] text-white"
                    style={{
                      background: "var(--color-banorte-red)",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] leading-[1.55] text-dark-gray">
                    {obj}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
