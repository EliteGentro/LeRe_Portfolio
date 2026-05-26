import { team, coverImages } from "../data/team";
import { useReveal } from "../hooks/useReveal";

export function Cover() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="portada"
      className="relative scroll-mt-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, var(--color-bg-3) 60%, var(--color-bg-1) 100%)",
      }}
    >
      {/* Decorative grid backdrop */}
      <div
        className="absolute inset-0 grid-bg opacity-60 pointer-events-none"
        aria-hidden
      />
      {/* Soft red glow */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(235,0,41,0.18) 0%, rgba(235,0,41,0) 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,164,0,0.16) 0%, rgba(255,164,0,0) 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden
      />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28`}
      >
        {/* Top meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="pill pill-red">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-banorte-red)" }}
            />
            Equipo Cocoly
          </span>
          <span className="pill">Reto Banorte · Mayo 2026</span>
          <span className="pill pill-positive">Producción</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p
              className="text-[12px] uppercase tracking-[0.22em] text-content-2 mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Portfolio de Proyecto
            </p>
            <h1
              className="font-heading font-bold text-dark-gray leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(56px, 10vw, 132px)",
              }}
            >
              LeRe
            </h1>
            <div className="red-strip w-32 mt-6 mb-8" />
            <p className="text-[18px] sm:text-[20px] leading-[1.55] text-banorte-gray max-w-2xl">
              Asistente de planeación de proyectos de software impulsado por
              inteligencia artificial. De una idea en lenguaje natural a
              documentación estructurada, alineada al ecosistema Banorte, en
              minutos.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="card p-6">
              <div className="eyebrow mb-3">Equipo · Cocoly</div>
              <ul className="grid gap-3">
                {team.map((m, i) => (
                  <li
                    key={m.name}
                    className="flex items-center gap-3 opacity-0"
                    style={{
                      animation: `fadeUp 0.6s cubic-bezier(0.2,0,0,1) both`,
                      animationDelay: `${200 + i * 90}ms`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-full text-white text-[12px] font-semibold shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-banorte-red), var(--color-alert))",
                        fontFamily: "var(--font-heading)",
                      }}
                      aria-hidden
                    >
                      {m.initials}
                    </div>
                    <div className="min-w-0">
                      <div
                        className="text-[14px] text-dark-gray truncate"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                      >
                        {m.name}
                      </div>
                      <div className="text-[12px] text-content-2 truncate">
                        {m.role}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p
                className="mt-5 pt-4 border-t border-bg-1 text-[11px] text-content-2 uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Placeholder · sustituir con nombres reales
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-10">
          <a
            href="#resumen"
            className="btn-primary focusable"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("resumen")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explorar el proyecto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#requerimientos"
            className="btn-ghost focusable"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("requerimientos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver requerimientos
          </a>
        </div>

        {/* Snapshot stat strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "41", l: "Requerimientos funcionales" },
            { k: "12", l: "No funcionales" },
            { k: "29", l: "Historias de usuario" },
            { k: "12", l: "Módulos del sistema" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="card p-5 opacity-0"
              style={{
                animation: `fadeUp 0.6s cubic-bezier(0.2,0,0,1) both`,
                animationDelay: `${400 + i * 90}ms`,
              }}
            >
              <div
                className="text-[28px] leading-none text-dark-gray"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                {s.k}
              </div>
              <div className="mt-2 text-[12px] text-content-2 uppercase tracking-[0.14em]"
                   style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Cover image cards */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
            <div>
              <div className="eyebrow mb-2">Vista general</div>
              <h3
                className="text-[22px] text-dark-gray"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                8 momentos clave de la experiencia
              </h3>
            </div>
            <span
              className="text-[11px] text-content-3 uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Flujo funcional del producto
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {coverImages.map((img, i) => (
              <article
                key={img.title}
                className="card card-hover overflow-hidden group"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg,
                      hsl(${img.hue}, 80%, 96%) 0%,
                      hsl(${(img.hue + 18) % 360}, 70%, 90%) 100%)`,
                  }}
                >
                  <div
                    className="absolute -right-8 -bottom-10 h-32 w-32 rounded-full opacity-30"
                    style={{ background: `hsl(${img.hue}, 78%, 56%)` }}
                    aria-hidden
                  />
                  <div
                    className="absolute left-5 top-5 h-14 w-14 rounded-2xl opacity-20"
                    style={{ background: `hsl(${(img.hue + 28) % 360}, 82%, 50%)` }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-[24px] border border-white/70 text-white shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg,
                          hsl(${img.hue}, 82%, 45%) 0%,
                          hsl(${(img.hue + 28) % 360}, 78%, 38%) 100%)`,
                      }}
                    >
                      <MomentIcon icon={img.icon} />
                    </div>
                  </div>
                  <span
                    className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-md bg-white/80 text-content-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <h4
                    className="text-[15px] text-dark-gray mb-1.5"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {img.title}
                  </h4>
                  <p className="text-[13px] text-banorte-gray leading-[1.55]">
                    {img.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MomentIcon({ icon }: { icon: (typeof coverImages)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      aria-hidden
      className="drop-shadow-sm"
    >
      {icon === "chat" && (
        <>
          <path {...common} d="M5 6.5h14a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-9l-4.5 3v-3H5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2Z" />
          <path {...common} d="M8 10h8M8 13h5" />
        </>
      )}
      {icon === "plan" && (
        <>
          <path {...common} d="M7 3.5h10a2 2 0 0 1 2 2v15l-3-2-3 2-3-2-3 2-3-2v-15a2 2 0 0 1 2-2Z" />
          <path {...common} d="M8 8h8M8 12h6M8 16h4" />
        </>
      )}
      {icon === "agents" && (
        <>
          <path {...common} d="M12 6v3M6.5 15.5l3-3M17.5 15.5l-3-3" />
          <circle {...common} cx="12" cy="4" r="2" />
          <circle {...common} cx="5" cy="17" r="2.5" />
          <circle {...common} cx="19" cy="17" r="2.5" />
          <circle {...common} cx="12" cy="11" r="2.5" />
        </>
      )}
      {icon === "requirements" && (
        <>
          <path {...common} d="M7 4h10a2 2 0 0 1 2 2v14H5V6a2 2 0 0 1 2-2Z" />
          <path {...common} d="m8 9 1.2 1.2L11.5 8M13.5 9.5H16M8 14l1.2 1.2 2.3-2.2M13.5 14.5H16" />
        </>
      )}
      {icon === "milestones" && (
        <>
          <path {...common} d="M6 21V4M6 5h10l-1.5 3L16 11H6" />
          <path {...common} d="M9 16h9M15 13l3 3-3 3" />
        </>
      )}
      {icon === "stack" && (
        <>
          <path {...common} d="m12 3 8 4-8 4-8-4 8-4Z" />
          <path {...common} d="m4 12 8 4 8-4M4 17l8 4 8-4" />
        </>
      )}
      {icon === "diagrams" && (
        <>
          <rect {...common} x="3" y="4" width="6" height="5" rx="1.5" />
          <rect {...common} x="15" y="4" width="6" height="5" rx="1.5" />
          <rect {...common} x="9" y="15" width="6" height="5" rx="1.5" />
          <path {...common} d="M9 6.5h6M6 9v2.5a2 2 0 0 0 2 2h4M18 9v2.5a2 2 0 0 1-2 2h-4" />
        </>
      )}
      {icon === "export" && (
        <>
          <path {...common} d="M6 20h12a2 2 0 0 0 2-2v-3M4 15v3a2 2 0 0 0 2 2" />
          <path {...common} d="M12 3v11M8 10l4 4 4-4" />
          <path {...common} d="M7 5h10" />
        </>
      )}
    </svg>
  );
}
