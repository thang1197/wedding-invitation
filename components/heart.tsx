"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RainHeart({
  delayStart,
  delayEnd,
}: {
  delayStart: number;
  delayEnd: number;
}) {
  const [annimation, setAnnimation] = useState("heart1"); // fixed
  const [duration, setDuration] = useState(100); // fixed
  const [delay, setDelay] = useState(0); // fixed

  useEffect(() => {
    // Randomize only on client after hydration
    if (typeof window !== "undefined") {
      const delayTime = getRandomInt(delayStart, delayEnd);
      setAnnimation(`heart${getRandomInt(1, 5)}`);
      setDuration(getRandomInt(30, 45));
      setDelay(delayTime);
      console.log("Aninimation:", annimation, duration);
    }
  }, []);

  useEffect(() => {
     console.log("Aninimation:", annimation, duration);
  },[annimation])

  const className = `${annimation} ${duration}s infinite ease`;

  return (
    <>
      <Image
        alt=""
        width={30}
        height={30}
        src={"/heart.png"}
        style={{
          animation: className,
          animationDelay: `${delay}s`,
          // display: display
        }}
        className="absolute z-50 top-[-5%] right-[50%]"
      />
    </>
  );
}
