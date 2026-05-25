import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

export interface NavItem {
  id: string;
  number: string;
  label: string;
}

interface SidebarProps {
  items: NavItem[];
}

export function Sidebar({ items }: SidebarProps) {
  const ids = items.map((i) => i.id);
  const active = useScrollSpy(ids, 140);
  const [open, setOpen] = useState(false);

  function handleClick(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Mobile top bar */}
      <header
        className="lg:hidden fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-b border-bg-1"
        style={{
          borderTop: "3px solid var(--color-banorte-red)",
        }}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="font-heading font-bold text-dark-gray text-[15px]">
                LeRe
              </div>
              <div
                className="text-[10px] uppercase tracking-widest text-content-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Cocoly · Banorte
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="focusable inline-flex items-center justify-center w-10 h-10 rounded-md border border-bg-1 text-dark-gray"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-bg-1 bg-white px-3 py-3">
            <ul className="grid gap-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className={`focusable w-full text-left flex items-center gap-3 px-3 py-2 rounded-md text-[14px] transition-colors ${
                      active === item.id
                        ? "bg-bg-2 text-banorte-red"
                        : "text-dark-gray hover:bg-bg-2"
                    }`}
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                  >
                    <span
                      className="text-[11px] text-content-3"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.number}
                    </span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 h-screen w-72 z-40 flex-col bg-white border-r border-bg-1"
        style={{ borderTop: "3px solid var(--color-banorte-red)" }}
      >
        <div className="px-7 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div
                className="font-bold text-dark-gray text-[20px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                LeRe
              </div>
              <div
                className="text-[10px] uppercase tracking-[0.2em] text-content-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Cocoly · Banorte
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-6">
          <div
            className="px-3 pb-2 text-[10px] uppercase tracking-[0.2em] text-content-3"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Contenido
          </div>
          <ul className="grid gap-0.5">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className={`focusable w-full text-left group flex items-start gap-3 pl-3 pr-3 py-2.5 rounded-md text-[14px] transition-all ${
                      isActive
                        ? "bg-bg-2 text-banorte-red"
                        : "text-dark-gray hover:bg-bg-2 hover:text-banorte-red"
                    }`}
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                  >
                    <span
                      className={`mt-[3px] shrink-0 inline-block h-4 w-[3px] rounded-full transition-colors ${
                        isActive ? "bg-banorte-red" : "bg-transparent group-hover:bg-content-4"
                      }`}
                    />
                    <span
                      className="shrink-0 text-[11px] w-6 text-content-3 tabular-nums mt-[1px]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.number}
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-7 py-5 border-t border-bg-1 text-[11px] text-content-2"
             style={{ fontFamily: "var(--font-heading)" }}>
          <div className="flex items-center justify-between">
            <span className="uppercase tracking-[0.18em]">Mayo 2026</span>
            <span className="pill pill-positive">v1.0</span>
          </div>
        </div>
      </aside>
    </>
  );
}

function Logo() {
  return (
    <div
      className="relative w-10 h-10 rounded-lg flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, var(--color-banorte-red) 0%, var(--color-alert) 100%)",
        boxShadow: "0 4px 14px rgba(235, 0, 41, 0.30)",
      }}
      aria-hidden
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h7a4 4 0 014 4v0a4 4 0 01-4 4H4V5z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11 13l5 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
