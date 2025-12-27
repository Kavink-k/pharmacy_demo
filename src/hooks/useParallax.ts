import { useScrollPosition } from './useScrollPosition';

export const useParallax = (speed: number = 0.5) => {
  const scrollY = useScrollPosition();
  return scrollY * speed;
};
