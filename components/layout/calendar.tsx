"use client"

import { Heart } from "lucide-react"
import { useEffect, useRef } from "react"
import styles from './style.module.css';

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

  const calendarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if(calendarRef.current && headerRef.current && heartRef.current){
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting){
              entry.target.classList.add(styles['show'])
            }
            if(!entry.isIntersecting){           
              entry.target.classList.remove(styles['show'])
            }
          })
        }, {
          threshold: 0.01
        }
      )

      observer.observe(calendarRef.current)
      observer.observe(headerRef.current)
      observer.observe(heartRef.current)

      return () => observer.disconnect();
    }
  },[calendarRef.current, heartRef.current, headerRef.current])

  return (
    <div 
    ref={calendarRef}
    className={`bg-[rgb(245,214,185)] rounded-lg shadow-sm p-2 w-[90%] mx-auto overflow-hidden ${styles['calendar']}`}>
      {/* Header */}
      <div
      ref={headerRef} 
      className={`flex justify-between items-center mb-6 ${styles['calendar-header']}`}>
        <h1 className="text-3xl font-black text-gray-900 tracking-wider uppercase">{month}</h1>
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
                    <Heart 
                    ref={heartRef}
                    className={`w-10 h-10 text-pink-500 fill-pink-500 ${styles['calendar-heart']}`} />
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
