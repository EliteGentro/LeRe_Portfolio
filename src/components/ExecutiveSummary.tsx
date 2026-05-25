import { Section } from "./Section";

export function ExecutiveSummary() {
  return (
    <Section
      id="resumen"
      number="02"
      eyebrow="Resumen ejecutivo"
      title="Documentación base de proyectos, generada por agentes IA."
      lead="LeRe convierte una idea de proyecto descrita en lenguaje natural en un set completo de artefactos institucionales: contexto, requerimientos, stack tecnológico validado, hitos y diagramas — todo en minutos y bajo los lineamientos de Banorte."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <Card title="Descripción">
          Plataforma multi-agente que coordina la generación de documentación de
          proyectos de software para el ecosistema tecnológico de Banorte.
          Backend en FastAPI + LangGraph, frontend en React/TypeScript, ambos
          contenedorizados y desplegados en GCP. Comunicación en tiempo real
          mediante Server-Sent Events.
        </Card>
        <Card title="Propósito">
          Reducir el tiempo de arranque de un proyecto y estandarizar la
          documentación inicial, eliminando la heterogeneidad entre equipos y
          asegurando el cumplimiento de los lineamientos tecnológicos
          institucionales desde la primera iteración.
        </Card>
        <Card title="Usuario objetivo">
          Analistas, desarrolladores y líderes técnicos de Banorte que necesitan
          producir documentación base completa y consistente sin invertir horas
          en redacción manual ni en validar cumplimiento técnico de forma
          tardía.
        </Card>
      </div>
    </Section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="card card-hover p-7">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-banorte-red)" }}
        />
        <h3
          className="text-[11px] uppercase tracking-[0.18em] text-banorte-red"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          {title}
        </h3>
      </div>
      <p className="text-[15px] leading-[1.65] text-dark-gray">{children}</p>
    </article>
  );
}
