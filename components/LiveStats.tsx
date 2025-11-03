'use client'

import { useEffect, useState, useRef } from 'react'
import { Beaker, Users, Clock, MapPin } from 'lucide-react'

interface StatProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-heading text-primary leading-none">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

export default function LiveStats() {
  const stats = [
    {
      icon: Beaker,
      value: 15000,
      suffix: '+',
      label: 'Elemzés Évente',
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Elégedett Ügyfél',
    },
    {
      icon: Clock,
      value: 24,
      suffix: 'h',
      label: 'Gyors Átfutás',
    },
    {
      icon: MapPin,
      value: 15,
      suffix: ' év',
      label: 'Tapasztalat',
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-offwhite via-white to-neutral-offwhite relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(45, 80, 22, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-neutral-darkgray">
            Számokban Kifejezve
          </h2>
          <p className="text-lg text-neutral-mediumgray max-w-2xl mx-auto">
            A tapasztalat és megbízhatóság, amire számíthat
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 bg-white rounded-xl border border-neutral-lightgray/30 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="text-primary" size={28} strokeWidth={2.5} />
                </div>
              </div>

              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2000}
              />

              <h3 className="text-base md:text-lg font-heading font-semibold mt-3 text-neutral-darkgray">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
