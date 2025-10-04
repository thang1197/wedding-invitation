import Image from "next/image";
import { Fraunces, Charm } from "next/font/google";
import { useEffect, useRef } from "react";
import styles from './style.module.css'

const fraunces = Fraunces({ subsets: ["latin"], weight: "400" });
const charm = Charm({ subsets: ["latin"], weight: "400" });

export function ParentInformation() {
  const refBride = useRef<HTMLDivElement>(null)
  const refGroom = useRef<HTMLDivElement>(null)
  const refSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(refBride.current && refGroom.current && refSection.current){
      const listParentinfo : HTMLDivElement[] = [
        refBride.current,
        refGroom.current
      ];

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting){
              entry.target.classList.add(styles['show'])
            }
            if(entry.target.id === 'parent-infomation' && !entry.isIntersecting){
              listParentinfo.forEach((item) => {
                item.classList.remove(styles['show'])
              })
              // entry.target.classList.remove(styles['show'])
            }
          })
        }, {
          threshold: 0.1
        }
      )

      observer.observe(refBride.current)
      observer.observe(refGroom.current)
      observer.observe(refSection.current)

      return () => observer.disconnect();
    }
  },[refBride.current, refGroom.current])
  return (
    <section id="parent-infomation" ref={refSection} className="py-10 bg-[rgb(250,240,230)] overflow-hidden">
      <div className="w-full px-4">
        <div className="border-l h-[50px] border-black"></div>

        <div className="flex justify-between items-center relative">
          <div className={`${charm.className} text-4xl`}>
            <h2>Thư</h2>
            <h2>Mời</h2>
            <h2>Cưới</h2>
          </div>

          <Image 
          src={'/parent-information.png'}
          height={400}
          width={250}
          className="absolute right-[-20px] bottom-[-100px]"
          alt=""/>
        </div>
        <div
          className={`${fraunces.className} border-l border-black pt-4 pl-2 space-y-4`}
        >
          {/* Nhà Trai */}
          <div ref={refBride} 
          className={`space-y-2 scroll-animate font-bold uppercase flex flex-col text-black ${styles['bride-parent']}`}>
            <p className="leading-relaxed">Nhà Trai</p>
            <p className="leading-relaxed">Lê Tiến Thành (Cố Phụ)</p>
            <p className={`leading-relaxed`}>Lương Thị Tân</p>
            <p className="text-gray-600 leading-relaxed normal-case mt-auto font-bold">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>

          {/* Nhà Gái */}
          <div ref={refGroom} 
          className={`space-y-2 scroll-animate font-bold uppercase flex flex-col text-black ${styles['groom-parent']}`}>
            <p className=" leading-relaxed font-serif">Nhà Gái</p>
            <p className="leading-relaxed">Võ Thanh Sơn</p>
            <p className="leading-relaxed">Nguyễn Thị Tuyết Nga</p>
            <p className="text-gray-600 leading-relaxed font-bold normal-case mt-auto">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
