import { useState, useCallback } from "react";
import type { RefObject } from "react";

const calculateMetrics = (
  sliderEl: HTMLElement,
  viewport: number,
  cardSelector: string,
) => {
  const sliderWidth = sliderEl.offsetWidth;
  const sliderOverflow = sliderWidth - viewport;
  const gap = parseFloat(
    window.getComputedStyle(sliderEl).getPropertyValue("gap"),
  );
  const card = sliderEl.querySelector<HTMLElement>(cardSelector);
  if (!card) return null;
  const stepWidth = card.offsetWidth + gap;
  return { sliderOverflow, stepWidth };
};

export const useSlider = (
  sliderRef: RefObject<HTMLElement | null>,
  viewport: number,
  cardSelector: string,
) => {
  const [offset, setOffset] = useState(0);

  const moveRight = useCallback(() => {
    if (!sliderRef.current) return;
    const metrics = calculateMetrics(sliderRef.current, viewport, cardSelector);
    if (!metrics) return;
    const { sliderOverflow, stepWidth } = metrics;

    setOffset((prev) => {
      const remaining = sliderOverflow + prev;
      if (remaining <= 0) return 0;
      if (remaining < stepWidth) return prev - remaining;
      return prev - stepWidth;
    });
  }, [sliderRef, viewport, cardSelector]);

  const moveLeft = useCallback(() => {
    if (!sliderRef.current) return;
    const metrics = calculateMetrics(sliderRef.current, viewport, cardSelector);
    if (!metrics) return;
    const { sliderOverflow, stepWidth } = metrics;

    setOffset((prev) => {
      if (prev >= 0) return -sliderOverflow;
      if (-prev < stepWidth) return 0;
      return prev + stepWidth;
    });
  }, [sliderRef, viewport, cardSelector]);

  return { offset, moveLeft, moveRight };
};
