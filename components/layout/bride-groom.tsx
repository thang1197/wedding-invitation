import { Heart } from "lucide-react";
import Image from "next/image";
import { Gwendolyn } from 'next/font/google'

const gwendolyn = Gwendolyn({ subsets: ['latin'], weight: '700' });

export function BrideGroom () {
    return (
      <section className="bg-[url('/bride-groom.jpg')] bg-no-repeat bg-cover bg-center w-full h-[1000px] py-10">
         <div className="max-w-4xl mx-auto mt-40">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl font-light text-gray-800 mb-2 font-serif">
              Trân trọng báo tin
            </h2>
            <p className="text-3xl text-gray-800 mb-2 font-serif uppercase font-bold">Lễ THÀNH HÔN </p>
            <h2 className="text-3xl font-light text-gray-800 mb-2 font-serif">của con chúng tôi</h2>
            <div className="w-[70%] h-px bg-rose-400 mx-auto"></div>

            <div className="mt-3">
              <div className="py-1 tracking-widest">
                <p className={`${gwendolyn.className} font-bold text-4xl`}>Lê Hữu Thắng</p>
                <p className="font-serif">(Út Nam)</p>
              </div>
              <div className="text-2xl py-1 flex items-center justify-center">
                <Image src="/ring.png" alt="" width={70} height={70} />
              </div>
              <div className="py-2 tracking-widest">
                <p className={`${gwendolyn.className} font-bold text-4xl`}>Võ Thị Huế Anh</p>
                <p className="font-serif">(Ái Nữ)</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1 py-1">
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