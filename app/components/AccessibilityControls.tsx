"use client";

import { useEffect, useState } from "react";

export function AccessibilityControls() {
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadSavedPreferences = window.setTimeout(() => {
      const savedScale = Number(localStorage.getItem("multicorretora-font-scale"));
      const savedContrast = localStorage.getItem("multicorretora-high-contrast");

      if ([1, 1.125, 1.25].includes(savedScale)) setFontScale(savedScale);
      setHighContrast(savedContrast === "true");
      setReady(true);
    }, 0);

    return () => window.clearTimeout(loadSavedPreferences);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.style.fontSize = `${fontScale * 100}%`;
    document.documentElement.toggleAttribute("data-high-contrast", highContrast);
    localStorage.setItem("multicorretora-font-scale", String(fontScale));
    localStorage.setItem("multicorretora-high-contrast", String(highContrast));
  }, [fontScale, highContrast, ready]);

  return (
    <>
      <div
        className="accessibility-controls"
        role="group"
        aria-label="Controles de acessibilidade"
      >
        <strong>Acessibilidade</strong>
        <button
          type="button"
          onClick={() => setFontScale((size) => Math.max(1, size - 0.125))}
          disabled={fontScale === 1}
          aria-label="Diminuir tamanho do texto"
        >
          A−
        </button>
        <button
          type="button"
          onClick={() => setFontScale((size) => Math.min(1.25, size + 0.125))}
          disabled={fontScale === 1.25}
          aria-label="Aumentar tamanho do texto"
        >
          A+
        </button>
        <button
          type="button"
          className="contrast-control"
          onClick={() => setHighContrast((active) => !active)}
          aria-pressed={highContrast}
        >
          Alto contraste
        </button>
      </div>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        Texto em {Math.round(fontScale * 100)} por cento.
        {highContrast ? " Alto contraste ativado." : " Alto contraste desativado."}
      </span>
    </>
  );
}
