import { Heart } from "lucide-react";
import Image from "next/image";
import { Gwendolyn } from "next/font/google";
import styles from "./style.module.css";
import { useEffect, useRef } from "react";

const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: "700" });

export function BrideGroom() {
  const titleRef = useRef<HTMLDivElement>(null);
  const brideRef = useRef<HTMLDivElement>(null);
  const groomRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      titleRef.current &&
      brideRef.current &&
      groomRef.current &&
      sectionRef.current &&
      imgRef1.current &&
      imgRef2.current &&
      ringRef.current
    ) {
      const listBrideGroomInfo: HTMLDivElement[] = [
        brideRef.current,
        groomRef.current,
        titleRef.current,
        imgRef1.current,
        imgRef2.current,
        ringRef.current
      ];

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              listBrideGroomInfo.forEach((item) => {
                item.classList.add(styles["show"]);
              });
            }

            if (!entry.isIntersecting) {
              listBrideGroomInfo.forEach((item) => {
                item.classList.remove(styles["show"]);
              });
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
      observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }
  }, [
    titleRef.current,
    brideRef.current,
    groomRef.current,
    sectionRef.current,
    imgRef1.current,
    imgRef2.current,
    ringRef.current
  ]);

  return (
    <section
      id="bride-groom-section"
      ref={sectionRef}
      className="bg-[url('/bride-groom.jpg')] bg-no-repeat bg-cover bg-center w-full h-[1000px] py-10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto mt-40">
        <div className="text-center mb-8 scroll-animate">
          <div ref={titleRef} className={`${styles["bride-groom-title"]}`}>
            <h2 className="text-3xl font-light text-gray-800 mb-2 font-serif">
              Trân trọng báo tin
            </h2>
            <p className="text-3xl text-gray-800 mb-2 font-serif uppercase font-bold">
              Lễ THÀNH HÔN{" "}
            </p>
            <h2 className="text-3xl font-light text-gray-800 mb-2 font-serif">
              của con chúng tôi
            </h2>
            <div className="w-[70%] h-px bg-rose-400 mx-auto"></div>
          </div>

          <div className="mt-3">
            <div
              ref={brideRef}
              className={`py-1 tracking-widest ${styles["bride"]}`}
            >
              <p className={`${gwendolyn.className} font-bold text-4xl`}>
                Lê Hữu Thắng
              </p>
              <p className="font-serif">(Út Nam)</p>
            </div>

            <div 
            ref={ringRef}
            className={`text-2xl py-1 flex items-center justify-center ${styles['ring']}`}>
              <Image src="/ring.png" alt="" width={70} height={70} />
            </div>

            <div
              ref={groomRef}
              className={`py-1 tracking-widest ${styles["groom"]}`}
            >
              <p className={`${gwendolyn.className} font-bold text-4xl`}>
                Võ Thị Huế Anh
              </p>
              <p className="font-serif">(Ái Nữ)</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-1 py-1">
            <div ref={imgRef1} className={`${styles["bride-groom-img"]}`}>
              <Image
                src="/image1.jpg"
                alt=""
                width={190}
                height={500}
                className="max-h-[60vh] object-contain"
              />
            </div>

            <div ref={imgRef2} className={`${styles["bride-groom-img"]}`}>
              <Image
                src="/image2.jpg"
                alt=""
                width={190}
                height={500}
                className="max-h-[60vh] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
