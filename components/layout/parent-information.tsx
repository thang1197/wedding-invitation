import Image from "next/image";
import { Aladin } from "next/font/google";
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

export function ParentInformation() {
  return (
    <section className="py-12 px-4 bg-[url('/parent-information.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="w-fit mx-auto">
        <div className="grid md:grid-cols-2 gap-12 px-3">
          {/* Nhà Trai */}
          <div className="space-y-3 scroll-animate text-center font-bold uppercase flex flex-col text-black">
            <p className="text-lg leading-relaxed font-serif">
              Nhà Trai
            </p>
            <p className="text-lg leading-relaxed">
              Lê Tiến Thành (Cố Phụ)
            </p>
            <p
              className={`text-lg leading-relaxed`}
            >
              Lương Thị Tân
            </p>
            <p className="text-lg text-gray-600 leading-relaxed normal-case mt-auto font-bold">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>

          {/* Nhà Gái */}
          <div className="space-y-3 scroll-animate text-center font-bold uppercase flex flex-col text-black">
            <p className="text-lg  leading-relaxed font-serif">Nhà Gái</p>
            <p className="text-lg leading-relaxed">
              Võ Thanh Sơn
            </p>
            <p className="text-lg leading-relaxed">
              Nguyễn Thị Tuyết Nga
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-bold normal-case mt-auto">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
