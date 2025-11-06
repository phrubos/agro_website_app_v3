'use client'

import { Award, Shield, CheckCircle, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function TrustBadges() {
  const { t } = useLanguage()
  const badges = [
    {
      icon: Award,
      title: t.trustBadges.accredited,
      subtitle: t.trustBadges.accreditedSubtitle,
      color: 'text-accent-teal'
    },
    {
      icon: Shield,
      title: t.trustBadges.iso,
      subtitle: t.trustBadges.isoSubtitle,
      color: 'text-primary'
    },
    {
      icon: CheckCircle,
      title: t.trustBadges.standards,
      subtitle: t.trustBadges.standardsSubtitle,
      color: 'text-accent-cyan'
    },
    {
      icon: TrendingUp,
      title: t.trustBadges.experience,
      subtitle: t.trustBadges.experienceSubtitle,
      color: 'text-status-success'
    }
  ]

  return (
    <div className="bg-neutral-offwhite py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold text-neutral-darkgray mb-2">
            {t.trustBadges.title}
          </h3>
          <p className="text-neutral-mediumgray">
            {t.trustBadges.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-neutral-offwhite to-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform ${badge.color}`}>
                  <badge.icon size={32} strokeWidth={2} />
                </div>
              </div>
              <h4 className="font-heading font-bold text-lg text-neutral-darkgray mb-1">
                {badge.title}
              </h4>
              <p className="text-sm text-neutral-mediumgray">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
