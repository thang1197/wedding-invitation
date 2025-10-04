import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from './style.module.css';

export function Gallery() {
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);
  const img5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current && img5Ref.current) {
      const observer  = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting){
              entry.target.classList.add(styles['show']);
            }else{
              entry.target.classList.remove(styles['show']);
            }
          })
        },
        {
          threshold: 0.1
        }
      )
      observer.observe(img1Ref.current);
      observer.observe(img2Ref.current);
      observer.observe(img3Ref.current);
      observer.observe(img4Ref.current);
      observer.observe(img5Ref.current);

      return () => {
        observer.disconnect();
      }
    }
  },[img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current, img5Ref.current]);
  return (
    <section className="py-4 px-2 bg-[rgb(250,240,230)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 scroll-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-4 font-serif">
            Album Cưới
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
          <div ref={img1Ref} className={`border border-pink-500 ${styles['img1']}`}>
            <Image src={"/0H3A8560.jpg"} width={400} height={400} alt={""} />
          </div>

          <div ref={img2Ref} className={`border border-pink-500 ${styles['img2']}`}>
            <Image src={"/0H3A8990.jpg"} width={400} height={400} alt={""} />
          </div>

          <div
            ref={img3Ref}
            className={`relative border border-pink-500 col-span-full h-[250px] ${styles['img3']}`}
          >
            <Image src="/0H3A8866.jpg" alt="wedding" fill />
          </div>

          <div
            ref={img4Ref}
            className={`border border-pink-500 ${styles['img4']}`}
            style={{ animationDelay: `` }}
          >
            <Image src={"/0H3A9655.jpg"} width={400} height={400} alt={""} />
          </div>

          <div
            ref={img5Ref}
            className={`border border-pink-500 ${styles['img5']}`}
            style={{ animationDelay: `` }}
          >
            <Image src={"/0H3A9422.jpg"} width={400} height={400} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
}
