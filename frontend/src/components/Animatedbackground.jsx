import { useEffect, useRef } from "react";

const ITEMS = [
  "< HTML />", "{ CSS }", "React.js", "Node.js", "Python", "SQL",
  "Git", "API", "TypeScript", "MongoDB", "Figma", "AWS",
  "🏢", "💼", "📊", "📈", "🎓", "💡", "🖥️", "📝",
  "Internship", "Full-Stack", "UI/UX", "Dev", "Portfolio",
  "Resume", "Career", "Offer", "Interview", "Team",
  "const", "async", "fetch()", "useEffect", "setState",
  "import", "export", "npm install", "git push",
];

// Fully saturated bright colours — no more muted tones
const COLORS = [
  "#c4b5fd", "#93c5fd", "#6ee7b7", "#f9a8d4",
  "#fde68a", "#fca5a5", "#67e8f9", "#fdba74",
  "#a78bfa", "#60a5fa", "#34d399", "#f472b6",
];

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("mouseleave", () => {
      mouseRef.current = { x: -9999, y: -9999 };
    });

    const REPEL = 130;

    // Mesh nodes
    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 1.8 + Math.random() * 2.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    // Text particles — brighter alpha range
    const particles = Array.from({ length: 22 }, (_, i) => ({
      text: ITEMS[i % ITEMS.length],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 13 + Math.random() * 10,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speedX: (Math.random() - 0.5) * 0.32,
      speedY: -0.22 - Math.random() * 0.32,
      alpha: 0.16 + Math.random() * 0.18,   // 0.16–0.34: lighter than before but still visible
      rotation: (Math.random() - 0.5) * 0.3,
      rotSpeed: (Math.random() - 0.5) * 0.003,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // update nodes with cursor repel
      nodes.forEach((n) => {
        const dx = n.x - mx, dy = n.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < REPEL && d > 0) {
          const f = (REPEL - d) / REPEL;
          n.vx += (dx / d) * f * 0.32;
          n.vy += (dy / d) * f * 0.32;
        }
        n.vx *= 0.97; n.vy *= 0.97;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x = W; if (n.x > W) n.x = 0;
        if (n.y < 0) n.y = H; if (n.y > H) n.y = 0;
      });

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(180,150,255,${(1 - d / 140) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // draw nodes
      nodes.forEach((n) => {
        const dx = n.x - mx, dy = n.y - my;
        const near = Math.sqrt(dx * dx + dy * dy) < REPEL * 1.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? n.r * 1.8 : n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = near ? 0.75 : 0.40;  // dimmed slightly from 1.0/0.65
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // draw text particles
      particles.forEach((p) => {
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const near = d < 200 && d > 0;
        if (near) { p.x += (dx / d) * 0.2; p.y += (dy / d) * 0.2; }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        // near cursor: boost to near 1.0 alpha; far: base 0.28–0.60
        ctx.globalAlpha = near ? Math.min(p.alpha + 0.22, 0.62) : p.alpha;
        ctx.fillStyle = p.color;
        ctx.font = `600 ${near ? p.size * 1.2 : p.size}px "DM Mono", monospace`;
        ctx.fillText(p.text, 0, 0);
        ctx.restore();

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.y < -40) { p.y = H + 20; p.x = Math.random() * W; }
        if (p.x < -120) p.x = W + 60;
        if (p.x > W + 120) p.x = -60;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}