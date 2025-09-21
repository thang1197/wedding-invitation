import { Camera } from "lucide-react";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="py-4 px-2 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 scroll-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-4 font-serif">Album</h2>
          <div className="w-24 h-px bg-rose-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 scroll-animate hover:scale-105"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-center text-gray-400">
                <Camera className="w-8 h-8 mx-auto mb-2" />
                <p className="text-xs">Photo {i}</p>
              </div>
            </div>
          ))} */}
          <div
            className="border border-pink-500"
            style={{ animationDelay: `` }}
          >
            <Image src={"/0H3A8560.jpg"} width={400} height={400} alt={""} />
          </div>

          <div className="border border-pink-500">
            <Image src={"/0H3A8990.jpg"} width={400} height={400} alt={""} />
          </div>

          <div className="relative border border-pink-500 col-span-full h-[250px]">
            <Image
              src="/0H3A8866.jpg"
              alt="wedding"
              fill
            />
          </div>

          <div
            className="border border-pink-500"
            style={{ animationDelay: `` }}
          >
            <Image src={"/0H3A9655.jpg"} width={400} height={400} alt={""} />
          </div>
          <div
            className="border border-pink-500"
            style={{ animationDelay: `` }}
          >
            <Image src={"/0H3A9422.jpg"} width={400} height={400} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
}
