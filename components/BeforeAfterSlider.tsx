'use client'

import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Előtte',
  afterLabel = 'Utána'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <div className="relative w-full aspect-video bg-neutral-lightgray rounded-2xl overflow-hidden shadow-2xl group">
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-accent-teal text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground with clip) */}
      <div
        className="absolute inset-0 transition-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-status-warning text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
          {beforeLabel}
        </div>
      </div>

      {/* Interactive Slider */}
      <div
        className="absolute inset-0 cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl transition-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <MoveHorizontal className="text-primary" size={24} />
          </div>

          {/* Top Arrow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          
          {/* Bottom Arrow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      </div>

      {/* Instruction Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ← Húzza a csúszkát →
      </div>
    </div>
  )
}
