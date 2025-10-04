"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RainHeart() {
  const [annimation, setAnnimation] = useState("heart1"); // fixed
  const [duration, setDuration] = useState(60); // fixed
  const [delay, setDelay] = useState(0); // fixed

  useEffect(() => {
    // Randomize only on client after hydration
    setAnnimation(`heart${getRandomInt(1, 7)}`);
    setDuration(getRandomInt(50, 90));
    setDelay(getRandomInt(1, 20));
  }, []);

  const className = `${annimation} ${duration}s infinite ease-in-out`;

  return (
    <Image
      alt=""
      width={30}
      height={30}
      src={"/heart.png"}
      style={{
        animation: className,
        animationDelay: `${delay}s`,
      }}
      className="absolute z-50"
    />
  );
}
