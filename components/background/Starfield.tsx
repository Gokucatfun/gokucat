const stars = Array.from({ length: 70 }).map((_, idx) => ({
  id: idx,
  size: `${(idx % 3) + 1}px`,
  left: `${(idx * 37) % 100}%`,
  top: `${(idx * 53) % 100}%`,
  delay: `${(idx % 12) * 0.4}s`,
  duration: `${3 + (idx % 6)}s`,
  opacity: 0.3 + ((idx % 5) * 0.1)
}));

export function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            ["--delay" as string]: star.delay,
            ["--duration" as string]: star.duration
          }}
        />
      ))}
    </div>
  );
}
