"use client";

import { useEffect, useState } from "react";

const DAY = 1000 * 60 * 60 * 24;

export default function useDaysRemaining(
  weddingDate: string
) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const target = new Date(weddingDate).getTime();
      const now = Date.now();

      const remaining = Math.max(
        0,
        Math.ceil((target - now) / DAY)
      );

      setDays(remaining);
    };

    calculate();

    const timer = setInterval(
      calculate,
      60 * 1000
    );

    return () => clearInterval(timer);
  }, [weddingDate]);

  return days;
}