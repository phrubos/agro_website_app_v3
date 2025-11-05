'use client'

import { useState, useEffect } from 'react'
import { Calculator, ArrowRight } from 'lucide-react'

interface PriceCalculatorProps {
  onQuoteClick: () => void
}

export default function PriceCalculator({ onQuoteClick }: PriceCalculatorProps) {
  const [hectares, setHectares] = useState(10)
  const [services, setServices] = useState({
    labor: true,
    drone: false,
    consulting: false,
  })
  const [mounted, setMounted] = useState(false)

  // Fix hydration error
  useEffect(() => {
    setMounted(true)
  }, [])

  const prices = {
    labor: { min: 2800, max: 3500, unit: 'Ft/ha' },
    drone: { min: 3200, max: 4500, unit: 'Ft/ha' },
    consulting: { min: 15000, max: 25000, unit: 'Ft/alkalom' },
  }

  const calculatePrice = () => {
    let min = 0
    let max = 0

    if (services.labor) {
      min += prices.labor.min * hectares
      max += prices.labor.max * hectares
    }
    if (services.drone) {
      min += prices.drone.min * hectares
      max += prices.drone.max * hectares
    }
    if (services.consulting) {
      min += prices.consulting.min
      max += prices.consulting.max
    }

    return { min, max }
  }

  const { min, max } = calculatePrice()
  const hasAnyService = services.labor || services.drone || services.consulting

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 shadow-2xl hover-glow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
          <Calculator className="text-accent-cyan" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold">Árkalkulátor</h3>
          <p className="text-neutral-offwhite text-sm">Becsült költség azonnal</p>
        </div>
      </div>

      {/* Hectares Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">
          Gazdálkodási terület (hektár)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="1"
            max="500"
            value={hectares}
            onChange={(e) => setHectares(Number(e.target.value))}
            className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #1A936F 0%, #1A936F ${(hectares / 500) * 100}%, rgba(255,255,255,0.2) ${(hectares / 500) * 100}%, rgba(255,255,255,0.2) 100%)`
            }}
          />
          <div className="w-20 bg-white/10 rounded-lg px-4 py-2 text-center font-bold">
            {hectares}
          </div>
        </div>
        <div className="flex justify-between text-xs text-neutral-offwhite mt-2">
          <span>1 ha</span>
          <span>500 ha</span>
        </div>
      </div>

      {/* Services Checkboxes */}
      <div className="mb-6 space-y-3">
        <label className="block text-sm font-semibold mb-3">
          Válasszon szolgáltatást
        </label>

        <label className="flex items-center gap-3 p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/15 transition-all">
          <input
            type="checkbox"
            checked={services.labor}
            onChange={(e) => setServices({ ...services, labor: e.target.checked })}
            className="w-5 h-5 rounded accent-accent-cyan cursor-pointer"
          />
          <div className="flex-1">
            <div className="font-semibold">Laboratóriumi Vizsgálat</div>
            <div className="text-xs text-neutral-offwhite">
              {mounted ? `${prices.labor.min.toLocaleString()} - ${prices.labor.max.toLocaleString()}` : `${prices.labor.min} - ${prices.labor.max}`} {prices.labor.unit}
            </div>
          </div>
        </label>

        <label className="flex items-center gap-3 p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/15 transition-all">
          <input
            type="checkbox"
            checked={services.drone}
            onChange={(e) => setServices({ ...services, drone: e.target.checked })}
            className="w-5 h-5 rounded accent-accent-cyan cursor-pointer"
          />
          <div className="flex-1">
            <div className="font-semibold">Drónos NDVI Felmérés</div>
            <div className="text-xs text-neutral-offwhite">
              {mounted ? `${prices.drone.min.toLocaleString()} - ${prices.drone.max.toLocaleString()}` : `${prices.drone.min} - ${prices.drone.max}`} {prices.drone.unit}
            </div>
          </div>
        </label>

        <label className="flex items-center gap-3 p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/15 transition-all">
          <input
            type="checkbox"
            checked={services.consulting}
            onChange={(e) => setServices({ ...services, consulting: e.target.checked })}
            className="w-5 h-5 rounded accent-accent-cyan cursor-pointer"
          />
          <div className="flex-1">
            <div className="font-semibold">Szaktanácsadás</div>
            <div className="text-xs text-neutral-offwhite">
              {mounted ? `${prices.consulting.min.toLocaleString()} - ${prices.consulting.max.toLocaleString()}` : `${prices.consulting.min} - ${prices.consulting.max}`} {prices.consulting.unit}
            </div>
          </div>
        </label>
      </div>

      {/* Price Display */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
        <div className="text-sm text-neutral-offwhite mb-2">Becsült költség</div>
        {hasAnyService ? (
          <div className="text-4xl font-bold font-heading">
            {mounted ? `${min.toLocaleString()} - ${max.toLocaleString()} Ft` : `${min} - ${max} Ft`}
          </div>
        ) : (
          <div className="text-2xl text-neutral-offwhite/60 italic">
            Válasszon szolgáltatást
          </div>
        )}
        <div className="text-xs text-neutral-offwhite mt-2">
          {services.labor && services.drone && '✓ Labor + Drón csomag: Extra pontosság'}
          {!services.labor && !services.drone && services.consulting && '💡 Tanácsadás + vizsgálat javasolt'}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onQuoteClick}
        className="btn-accent w-full flex items-center justify-center gap-2 text-lg"
      >
        Ajánlatot Kérek
        <ArrowRight size={20} />
      </button>

      <p className="text-xs text-center text-neutral-offwhite mt-4">
        * Az árak tájékoztató jellegűek. Pontos árajánlatért töltse ki az űrlapot.
      </p>
    </div>
  )
}
