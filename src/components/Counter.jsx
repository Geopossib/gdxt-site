import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function Counter({ end, suffix = '', duration = 1400, label }) {
  const [ref, visible] = useReveal();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return (
    <div className="stat" ref={ref}>
      <span className="stat-number">{value}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
