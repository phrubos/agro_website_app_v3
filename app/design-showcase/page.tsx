import DesignShowcase from '@/components/DesignShowcase'

export const metadata = {
  title: 'Design Showcase - AgroLab',
  description: 'Design system showcase with all new improvements',
}

export default function DesignShowcasePage() {
  return (
    <main className="min-h-screen bg-neutral-offwhite">
      {/* Hero Section with Gradient */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Design System Showcase
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore all the new design improvements including enhanced buttons, 
            animated icons, gradients, and micro-interactions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <DesignShowcase />
    </main>
  )
}
