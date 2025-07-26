import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
  value: number;
  color: string;
};

export const AnimatedNumber: FC<Props> = ({ value, color }) => {
  const numberRef = useRef<HTMLParagraphElement>(null);
  const valueObj = useRef({ val: value });

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    gsap.to(valueObj.current, {
      val: value,
      duration: 1,
      ease: 'power2.out',
      onUpdate: () => {
        if (el) {
          el.textContent = Math.round(valueObj.current.val).toString();
        }
      },
    });
  }, [value]);

  return (
    <p ref={numberRef} style={{ color }}>
      {value}
    </p>
  );
};
