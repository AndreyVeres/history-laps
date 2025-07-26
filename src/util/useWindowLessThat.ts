import { useSyncExternalStore } from 'react';

const subscribe = (callback: VoidFunction) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};
const getSnapshot = (breakpoint: number) => window.innerWidth < breakpoint;

export function useWindowLessThat(breakpoint: number) {
  return useSyncExternalStore(subscribe, () => getSnapshot(breakpoint));
}
