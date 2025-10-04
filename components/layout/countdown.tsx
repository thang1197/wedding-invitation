"use client";

import { useEffect, useRef, useState } from "react";
import { Sansita_Swashed } from "next/font/google";
import styles from "./style.module.css";

const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: "700",
});

const weddingDate = new Date("2025-12-14T00:00:00");

interface CountDownProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CountDown() {
  const calculateCountDown = () => {
    const currentTimes = weddingDate.getTime() - new Date().getTime();
    const days = Math.floor(currentTimes / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (currentTimes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
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

  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ start countdown immediately
    setCountDown(calculateCountDown());

    const interval = setInterval(() => {
      setCountDown(calculateCountDown());
    }, 1000);

    // ✅ cleanup both
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // let observer: IntersectionObserver | null = null;
    if (ref.current && sectionRef.current) {
      const countDownContent = ref.current;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            // console.log("Counterdown: ", entry.isIntersecting);
            if (entry.target.id === 'countdown-section' && entry.isIntersecting) {
              countDownContent.classList.add(styles["show"]);
            }

            if (entry.target.id === 'countdown-section' && !entry.isIntersecting) {
              countDownContent.classList.remove(styles["show"]);
            }
          });
        },
        {
          threshold: 0.1
        }
      );

      observer.observe(ref.current);
      observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }
  }, [ref.current, sectionRef.current]);

  if (!countDown) return null; // prevent SSR mismatch

  return (
    <section
      id='countdown-section'
      ref={sectionRef}
      className={`py-36 px-4 bg-[url('/save_the_date.jpg')] bg-no-repeat bg-cover bg-center`}
    >
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center ${styles["count-down"]}`}
      >
        <h2 className={`text-3xl mb-8 ${sansitaSwashed.className}`}>
          Save the Date
        </h2>
        <div className="grid grid-cols-2 gap-6">
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
