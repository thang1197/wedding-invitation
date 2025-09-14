import { Heart } from "lucide-react";

export function Header() {
  return (
    <div className="relative z-10 text-center text-white px-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto animate-in duration-1000">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-light text-gray-800 mb-4 tracking-wide">
          Hữu Thắng <span className="text-rose-500">&</span> Huế Anh
        </h1>

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-6"></div>

        {/* <p className="text-xl text-gray-600 font-light italic mb-8 text-balance">
          Together with our families, we joyfully invite you to celebrate our
          union
        </p>

        <div className="text-lg text-gray-700 font-medium">
          June 15th, 2024 • 4:00 PM
        </div> */}
      </div>
    </div>
  );
}
