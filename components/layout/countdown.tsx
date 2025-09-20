"use client";

import { useEffect, useState } from "react";
import { Sansita_Swashed } from "next/font/google";

const sansitaSwashed = Sansita_Swashed({
  subsets: ['latin'],
  weight: '700'
})

const weddingDate = new Date("2025-12-14T00:00:00");

export function CountDown() {
  const calculateCountDown = () => {
    const currentTimes = weddingDate.getTime() - new Date().getTime();
    const days = Math.floor(currentTimes / (1000 * 60 * 60 * 24));
    const hours = Math.floor((currentTimes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((currentTimes % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((currentTimes % (1000 * 60)) / 1000);

    return [
      { label: "Days", value: days.toString() },
      { label: "Hours", value: hours.toString() },
      { label: "Minutes", value: minutes.toString() },
      { label: "Seconds", value: seconds.toString() },
    ];
  };

  const [countDown, setCountDown] = useState<
    { label: string; value: string }[] | null
  >(null);

  useEffect(() => {
    // calculate immediately after mount
    setCountDown(calculateCountDown());

    const interval = setInterval(() => {
      setCountDown(calculateCountDown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!countDown) return null; // prevents SSR/CSR mismatch

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-rose-200 to-pink-200 text-pink-700">
      <div className="max-w-4xl mx-auto text-center scroll-animate">
        <h2 className={`text-3xl mb-8 ${sansitaSwashed.className}`}>Save the Date</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countDown.map((item, index) => (
            <div
              key={item.label}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl font-bold mb-2">{item.value}</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
