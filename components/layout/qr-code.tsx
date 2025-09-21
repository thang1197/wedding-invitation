"use client";

import { useState } from "react";

export function QrCodeCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative h-[300px] flex items-center justify-center">
        <img
          src="/0H3A9045.jpg"
          className="w-full h-full object-cover opacity-50 absolute z-0"
          alt="background"
        />

        <button
          type="button"
          className={`text-white bg-pink-600 hover:bg-pink-900 focus:ring-4 
            rounded-lg text-sm px-5 py-2.5 
            me-2 mb-2 focus:outline-none 
           z-10 uppercase font-bold`}
          onClick={() => setIsOpen(true)}
        >
          Gửi Mừng Cưới
        </button>
      </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

interface PopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
function Popup({ isOpen, setIsOpen }: PopupProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              {/* <h3 className="text-center font-serif text-xl text-gray-800 font-serif">
                Wedding Details
              </h3> */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center space-y-6 py-6 px-6">
              {/* QR Code */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                <div className="w-full h-[400px] bg-white border border-gray-200 rounded flex items-center justify-center">
                  <img
                    src="/qr-code.jpg"
                    alt="Wedding QR Code"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>

              {/* Decorative element */}
              <div className="flex items-center space-x-3 text-rose-400">
                <div className="w-12 h-px bg-rose-300/40" />
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="w-12 h-px bg-rose-300/40" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
