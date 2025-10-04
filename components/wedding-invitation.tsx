"use client";
// import { Heart } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Header } from "./layout/header";
import { CountDown } from "./layout";
import { ParentInformation } from "./layout/parent-information";
import { BrideGroom } from "./layout/bride-groom";
import { WeddingInformation } from "./layout/wedding-information";
import { Gallery } from "./layout/gallery";
import styles from "./style.module.css";
import { QrCodeCard } from "./layout/qr-code";
import { RainHeart } from "./heart";
import { Heart } from "lucide-react";

export function WeddingInvitation() {

  const heartList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {heartList.map((item) => {
        return (
          <RainHeart key={item}/>
        )
      })}
      {/* Hero Section with Image Placeholder */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/header.jpg"
          className="w-full h-full object-cover opacity-45 absolute"
          alt="background"
        />

        <Header />

        <div
          className={`${styles["float-animation"]} absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full bg-rose-200/70`}
        ></div>
        <div
          className={`${styles["float-animation-delayed"]} absolute bottom-32 right-30 w-24 h-24 border border-white/20 rounded-full bg-rose-200/50`}
        ></div>
        <div
          className={`${styles["float-animation"]} absolute top-1/2 right-20 w-16 h-16 bg-rose-200/60 rounded-full`}
        ></div>
      </div>

      {/* CountDown */}
      <CountDown />

      {/* Parent Info */}
      <ParentInformation />

      {/* Bride Groom Info */}
      <BrideGroom />

      {/* Wedding Details */}
      <WeddingInformation />

      {/* Gallery Section */}
      <Gallery />

      <QrCodeCard />
      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="mx-auto text-center scroll-animate">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400 float-animation" />
          </div>
          <p className="text-gray-300 mb-4 font-serif">
            Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi
          </p>
        </div>
      </footer>
    </div>
  );
}
