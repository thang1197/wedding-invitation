import { Heart } from "lucide-react";
import Image from "next/image";

export function BrideGroom () {
    return (
      <section className="bg-[url('/bride-groom.jpg')] bg-no-repeat bg-cover bg-center w-full h-[1200px] py-10">
         <div className="max-w-4xl mx-auto mt-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl font-light text-gray-800 mb-4 font-serif">
              Trân Trọng Báo Tin{" "}
              <span className="uppercase">Lễ THÀNH HÔN </span>
              Của Con Chúng Tôi
            </h2>
            <div className="w-[70%] h-px bg-rose-400 mx-auto"></div>

            <div className="my-5">
              <div className="text-3xl py-2 tracking-widest">
                <p>Lê Hữu Thắng</p>
                <p>(Út Nam)</p>
              </div>
              <div className="text-2xl py-2 flex items-center justify-center">
                <Image src="/heart.png" alt="" width={80} height={80} />
              </div>
              <div className="text-3xl py-2 tracking-widest">
                <p>Võ Thị Huế Anh</p>
                <p>(Ái Nữ)</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1">
              <div>
                <Image
                src="/image1.jpg"
                alt=""
                width={190}
                height={500}
                className="w-full max-h-[60vh] object-contain"
              />
              </div>
             <div>
              <Image
                src="/image2.jpg"
                alt=""
                width={190}
                height={500}
                className="w-full max-h-[60vh] object-contain"
              />
             </div>
            </div>
          </div>
        </div>
      </section>
    )
}