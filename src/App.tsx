import React, { useEffect, useRef } from 'react';
import AppRoutes from './routes/AppRoutes'

export const App = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Posición real del mouse
    let mouseX = 0;
    let mouseY = 0;

    // Posición actual del dot (para animación)
    let dotX = 0;
    let dotY = 0;

    // Velocidad del lerp (0.1 = lento, 1 = instantáneo)
    const speed = 0.1;

    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    let animationFrameId: number;

    function animateCursor() {
      // Lerp (movimiento suave)
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;

      if (dot) {
        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;

        const el = document.elementFromPoint(mouseX, mouseY);

        if (el && getComputedStyle(el).cursor === "pointer") {
          dot.style.width = "80px";
          dot.style.height = "80px";
          dot.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        } else {
          dot.style.width = "10px";
          dot.style.height = "10px";
          dot.style.backgroundColor = "black";
        }
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    }

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <> 
      <div
        id="cursor-dot"
        ref={dotRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          left: 0,
          top: 0,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'black',
          zIndex: 9999,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s'
        }}
      ></div>
      <AppRoutes/>
    </>
  )
}
