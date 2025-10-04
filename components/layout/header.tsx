import { Heart } from "lucide-react";
import { Imperial_Script, Gluten } from "next/font/google";

const imperialScript = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

const gluten = Gluten({
  subsets: ["latin"],
  weight: "400"
})

export function Header() {
  return (
    <div className="relative z-10 text-center text-white px-4 pt-56">
      <div className="flex flex-col gap-2 text-6xl mb-8">
        <h1
          className={`text-black tracking-wide ${imperialScript.className}`}
        >
          Hữu Thắng
        </h1>
         <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
        <h1
          className={`text-black tracking-wide ${imperialScript.className}`}
        >
          Huế Anh
        </h1>
      </div>

      <div className="w-full h-3 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-6"></div>

      <p className={`text-xl text-black font-bold uppercase mb-8 text-balance ${gluten.className}`}>
          ARE GETTING MARRIED
        </p>

        <div className="text-3xl text-black font-semibold">
          14 • 12 • 2025
        </div>
    </div>
  );
}
