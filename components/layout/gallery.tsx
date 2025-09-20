import { Camera } from "lucide-react";

export function Gallery() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Photos</h2>
          <div className="w-24 h-px bg-rose-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
