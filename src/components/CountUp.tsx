import { useEffect, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  start?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  suffix = '',
  start = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // don’t start until told
    let startVal = 0;
    const increment = end / (duration / 16); // ~60fps
    const step = () => {
      startVal += increment;
      if (startVal < end) {
        setCount(Math.floor(startVal));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CountUp;
