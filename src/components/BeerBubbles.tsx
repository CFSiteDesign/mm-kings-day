import { useEffect, useRef } from "react";

const BUBBLE_COUNT = 80;

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  opacity: number;
  phase: number;
}

const BeerBubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    const createBubble = (): Bubble => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: 2 + Math.random() * 4,
      speed: 0.3 + Math.random() * 0.7,
      wobbleSpeed: 0.005 + Math.random() * 0.01,
      wobbleAmp: 10 + Math.random() * 20,
      opacity: 0.04 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
    });

    bubblesRef.current = Array.from({ length: BUBBLE_COUNT }, createBubble);

    let t = 0;
    const animate = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const b of bubblesRef.current) {
        b.y -= b.speed;
        const wx = Math.sin(t * b.wobbleSpeed + b.phase) * b.wobbleAmp;

        if (b.y < -20) {
          Object.assign(b, createBubble());
        }

        ctx.beginPath();
        ctx.arc(b.x + wx, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(32, 100%, 65%, ${b.opacity})`;
        ctx.fill();

        // tiny highlight
        ctx.beginPath();
        ctx.arc(b.x + wx - b.size * 0.3, b.y - b.size * 0.3, b.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(38, 90%, 85%, ${b.opacity * 1.5})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
};

export default BeerBubbles;
