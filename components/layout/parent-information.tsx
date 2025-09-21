import Image from "next/image";
import { Fraunces, Charm } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], weight: "400" });
const charm = Charm({ subsets: ["latin"], weight: "400" });

export function ParentInformation() {
  return (
    <section className="py-10 bg-[rgb(250,240,230)]">
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
          <div className="space-y-2 scroll-animate font-bold uppercase flex flex-col text-black">
            <p className="leading-relaxed">Nhà Trai</p>
            <p className="leading-relaxed">Lê Tiến Thành (Cố Phụ)</p>
            <p className={`leading-relaxed`}>Lương Thị Tân</p>
            <p className="text-gray-600 leading-relaxed normal-case mt-auto font-bold">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>

          {/* Nhà Gái */}
          <div className="space-y-2 scroll-animate font-bold uppercase flex flex-col text-black">
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
