"use client"

import { Heart } from "lucide-react"

export function Calendar() {
  // February 2025 calendar data
  const month = "THÁNG 12"
  const year = "2025"

  const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]

  // February 2025 starts on Saturday (index 6) and has 28 days
  const firstDayOfMonth = 1 // Saturday
  const daysInMonth = 31

  // Special dates with hearts
  const heartDates = [14] // Filled hearts
//   const outlineHeartDates = [14]

  // Generate calendar grid
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-2 w-[80%] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-black text-gray-900 tracking-wider uppercase">{month}</h1>
        <span className="text-xl text-gray-700 font-bold">{year}</span>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-2 border-t border-b">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center py-2">
            <span className="text-xs text-gray-700 font-bold uppercase tracking-wide">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className="aspect-square flex items-center justify-center relative border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            {day && (
              <>
                <span className="text-base text-gray-800 font-bold">{day}</span>

                {/* Outline hearts */}
                {heartDates.includes(day) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
                    <span className="absolute text-sm text-white font-bold z-10">{day}</span>
                  </div>
                )}
                {/* {outlineHeartDates.includes(day) && <Heart className="absolute top-1 right-1 w-3 h-3 text-red-500" />} */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
