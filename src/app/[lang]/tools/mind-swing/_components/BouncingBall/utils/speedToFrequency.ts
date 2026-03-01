/**
 * Utility function to convert speed to frequency.
 * @param speed Speed value (1–10).
 * @returns Frequency value.
 */
export const speedToFrequency = (speed: number): number => {
  // Нормализуем скорость (1–10 → 0–1)
  const normalizedSpeed = (speed - 1) / 9;

  // Логарифмическое преобразование для плавного нарастания
  const logSpeed = Math.pow(normalizedSpeed, 1.5);

  // Диапазон частот: от 0,5 Гц (скорость = 1) до 2,5 Гц (скорость = 10)
  const minFrequency = 0.5;
  const maxFrequency = 2.5;

  return minFrequency + logSpeed * (maxFrequency - minFrequency);
};
