import { useEffect, useRef } from "react";

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  // position reference
  const pos = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  // Track mouse movement
  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", move);

    let frame = 0;
    const follow = () => {
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.18;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      frame = requestAnimationFrame(follow);
    };

    follow();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Hover effect: enlarge glow when hovering interactive items
  useEffect(() => {
    const items = document.querySelectorAll("a, button, .interactive");

    const handleEnter = () => {
      document.body.classList.add("cursor-hover-active");
    };

    const handleLeave = () => {
      document.body.classList.remove("cursor-hover-active");
    };

    items.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      items.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer glowing ball */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-9999 w-20 h-20 rounded-full opacity-80"
        style={{ transform: "translate(-9999px, -9999px)" }}
      >
        <div className="w-full h-full rounded-full bg-purple-500/30 blur-3xl"></div>
      </div>

      {/* Inner small dot */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-9999 w-3 h-3 rounded-full bg-white shadow"
        style={{ transform: "translate(-9999px, -9999px)" }}
      />
    </>
  );
}
