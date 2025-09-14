import Image from "next/image";
import { Aladin } from "next/font/google";
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

export function ParentInformation() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-200 to-white">
      <div className="w-fit mx-auto">
        <div className="grid md:grid-cols-2 gap-12 px-3">
          {/* Nhà Trai */}
          <div className="space-y-6 scroll-animate text-center font-bold uppercase flex flex-col">
            <p className="text-lg text-gray-600 leading-relaxed font-bebas">
              Nhà Trai
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lê Tiến Thành (Cố Phụ)
            </p>
            <p
              className={`text-lg text-gray-600 leading-relaxed`}
            >
              Lương Thị Tân
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light normal-case mt-auto">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>

          {/* Nhà Gái */}
          <div className="space-y-6 scroll-animate text-center font-bold uppercase flex flex-col">
            <p className="text-lg text-gray-600 leading-relaxed">Nhà Gái</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Võ Thanh Sơn
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nguyễn Thị Tuyết Nga
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light normal-case mt-auto">
              Bình Thạnh - Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
