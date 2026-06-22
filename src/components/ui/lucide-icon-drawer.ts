import { animate, svg } from 'animejs';
import { useEffect, useRef } from 'react';

export function useLucideDrawerAnimation() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const svgElements = root.current.querySelectorAll(
      'svg path, svg circle, svg polyline, svg line, svg rect, svg polygon'
    );

    if (svgElements.length === 0) return;

    svgElements.forEach((el) => el.classList.add('tkh-icon-line'));

    animate(svg.createDrawable('.tkh-icon-line'), {
      draw: ['0 0.05', '0.05 1'],
      ease: 'inOutQuad',
      duration: 1200,
      loop: true,
      alternate: true,
    });
  }, []);

  return root;
}
