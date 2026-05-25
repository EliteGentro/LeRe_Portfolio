import { Section } from "./Section";
import { conclusions } from "../data/project";

type Tone = "positive" | "warning" | "accent";

interface BlockMeta {
  tone: Tone;
  eyebrow: string;
  display: string;
  toneLabel: string;
}

const blockMeta: BlockMeta[] = [
  { tone: "positive", eyebrow: "Capítulo I", display: "01", toneLabel: "Logros" },
  { tone: "warning", eyebrow: "Capítulo II", display: "02", toneLabel: "Retos" },
  { tone: "accent", eyebrow: "Capítulo III", display: "03", toneLabel: "Aprendizajes" },
];

export function Conclusions() {
  const totalPoints = conclusions.reduce((n, b) => n + b.items.length, 0);

  return (
    <Section
      id="conclusiones"
      number="08"
      eyebrow="Conclusiones y lecciones aprendidas"
      title="Reflexiones del equipo sobre el desarrollo del proyecto."
      lead="Síntesis de logros, retos y aprendizajes obtenidos durante la construcción de la arquitectura multiagente y la entrega del producto."
      leadSpacing="relaxed"
      bare
    >
      <header className="conclusion-ledger">
        <div className="conclusion-ledger-cell">
          <span className="conclusion-ledger-label">Áreas</span>
          <span className="conclusion-ledger-value conclusion-ledger-value--num tabular-nums">
            {String(conclusions.length).padStart(2, "0")}
          </span>
        </div>
        <span className="conclusion-ledger-divider" aria-hidden />
        <div className="conclusion-ledger-cell">
          <span className="conclusion-ledger-label">Puntos clave</span>
          <span className="conclusion-ledger-value conclusion-ledger-value--num tabular-nums">
            {String(totalPoints).padStart(2, "0")}
          </span>
        </div>
        <span className="conclusion-ledger-divider" aria-hidden />
        <div className="conclusion-ledger-cell">
          <span className="conclusion-ledger-label">Volumen</span>
          <span className="conclusion-ledger-value">Cierre del proyecto</span>
        </div>
      </header>

      <div className="conclusion-essay">
        {conclusions.map((block, index) => {
          const meta = blockMeta[index];
          return (
            <article
              key={block.title}
              className={`conclusion-chapter conclusion-chapter--${meta.tone}`}
            >
              <aside className="conclusion-chapter-aside">
                <span className="conclusion-display" aria-hidden>
                  {meta.display}
                </span>
                <div className="conclusion-chapter-tag">
                  <span className="conclusion-chapter-eyebrow">
                    {meta.eyebrow}
                  </span>
                  <span className="conclusion-chapter-tone">
                    {meta.toneLabel}
                  </span>
                </div>
                <span className="conclusion-chapter-rule" aria-hidden />
              </aside>

              <div className="conclusion-chapter-body">
                <h3 className="conclusion-chapter-title">{block.title}</h3>
                <ol className="conclusion-chapter-list">
                  {block.items.map((item, itemIdx) => (
                    <li key={item.title} className="conclusion-chapter-row">
                      <span
                        className="conclusion-row-index tabular-nums"
                        aria-hidden
                      >
                        {String(itemIdx + 1).padStart(2, "0")}
                      </span>
                      <div className="conclusion-row-content">
                        <h4 className="conclusion-row-title">{item.title}</h4>
                        <p className="conclusion-row-body">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="conclusion-mark" aria-hidden>
        <span className="conclusion-mark-rule" />
        <div className="conclusion-mark-seal">
          <span className="conclusion-mark-glyph">§</span>
          <span className="conclusion-mark-label">
            Equipo Cocoly · Vol. 08
          </span>
        </div>
        <span className="conclusion-mark-rule" />
      </footer>
    </Section>
  );
}
