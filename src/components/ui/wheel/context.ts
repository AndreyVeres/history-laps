import { createContext, useContext } from 'react';
import { EventMeta, TemporaryEvent } from '../../../timelaps';

type WheelContextProps = {
  items: EventMeta[];
  activeIndex: number;
  label: string;
  rotation: number;
  buttonRefs: React.RefObject<HTMLButtonElement[]>;
  dateRange: [number, number];
  slides: TemporaryEvent[];
  handleNextSlide: VoidFunction;
  handlePrevSlide: VoidFunction;
  handleSetActiveIndex: (index: number) => void;
};

export const WheelContext = createContext<WheelContextProps | null>(null);

export const useWheelContext = () => {
  const context = useContext(WheelContext);
  if (!context) {
    throw new Error('useWheelContext должен использоваться внутри Wheel провайдера');
  }
  return context;
};
