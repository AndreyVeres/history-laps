import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import type { EventMeta } from '../../../timelaps';
import { WheelControls } from './wheel-controls';
import { WheelCore } from './wheel-core';
import { WheelSlider } from './wheel-slider';
import { WheelContext } from './context';
import { WheelTimeRange } from './wheel-timerange';
import { WheelTitle } from './wheel-title';
import { WheelLabel } from './wheel-label';

const DEFAULT_WHEEL_ANGLE = 295;

type WheelProps = {
  items: EventMeta[];
  defaultAngle?: number;
  children: ReactNode;
};

type WheelCompoundProps = {
  Controls: typeof WheelControls;
  Core: typeof WheelCore;
  Slider: typeof WheelSlider;
  TimeRange: typeof WheelTimeRange;
  Title: typeof WheelTitle;
  Label: typeof WheelLabel;
};

export const Wheel: FC<WheelProps> & WheelCompoundProps = ({ items, defaultAngle = DEFAULT_WHEEL_ANGLE, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(defaultAngle);

  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const dateRange = items[activeIndex].range;
  const slides = items[activeIndex].events;

  const handleNextSlide = useCallback(() => setActiveIndex(prev => (prev + 1 >= items.length ? 0 : prev + 1)), [items.length]);
  const handlePrevSlide = useCallback(() => setActiveIndex(prev => (prev - 1 < 0 ? items.length - 1 : prev - 1)), [items.length]);
  const handleSetActiveIndex = useCallback((idx: number) => setActiveIndex(idx), []);

  useEffect(() => {
    const totalSlots = items.length;
    const anglePerSlot = 360 / totalSlots;
    const newRotation = defaultAngle - activeIndex * anglePerSlot;

    setRotation(newRotation);
  }, [activeIndex, items]);

  const ctxValue = useMemo(
    () => ({
      items,
      activeIndex,
      rotation,
      buttonRefs,
      dateRange,
      slides,
      label: items[activeIndex].label,
      handleNextSlide,
      handleSetActiveIndex,
      handlePrevSlide,
    }),
    [items, rotation]
  );

  return <WheelContext.Provider value={ctxValue}>{children}</WheelContext.Provider>;
};

Wheel.Controls = WheelControls;
Wheel.Core = WheelCore;
Wheel.Slider = WheelSlider;
Wheel.TimeRange = WheelTimeRange;
Wheel.Title = WheelTitle;
Wheel.Label = WheelLabel;
