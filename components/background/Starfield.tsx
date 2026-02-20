const stars = Array.from({ length: 90 }).map((_, idx) => ({
  id: idx,
  size: `${(idx % 3) + 1}px`,
  left: `${(idx * 31) % 100}%`,
  top: `${(idx * 47) % 100}%`,
  delay: `${(idx % 11) * 0.45}s`,
  duration: `${3 + (idx % 7)}s`,
  opacity: 0.24 + ((idx % 6) * 0.1)
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
