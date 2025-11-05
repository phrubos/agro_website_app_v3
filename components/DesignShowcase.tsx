'use client'

import { CheckCircle, ArrowDown, Loader, Mail, Phone, Settings, Sparkles, Zap, TrendingUp } from 'lucide-react'

/**
 * Design Showcase Component
 * Demonstrates all new design improvements
 */
export default function DesignShowcase() {
  return (
    <div className="container-custom py-16 space-y-16">
      
      {/* Section 1: Enhanced Buttons */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Enhanced CTA Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">
            Primary Button
          </button>
          <button className="btn-secondary">
            Secondary Button
          </button>
          <button className="btn-accent">
            Accent Button
          </button>
          <button className="btn-secondary-light">
            Secondary Light
          </button>
        </div>
        <p className="text-sm text-neutral-mediumgray mt-4">
          ✨ Hover over buttons to see ripple effect and enhanced shadows
        </p>
      </section>

      {/* Section 2: Animated Icons */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Animated Icons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Continuous Animations */}
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-4">Continuous Animations</h3>
            <div className="flex justify-center gap-6 mb-4">
              <CheckCircle className="icon-pulse text-status-success" size={40} />
              <ArrowDown className="icon-bounce text-primary" size={40} />
              <Loader className="icon-spin text-accent-teal" size={40} />
            </div>
            <p className="text-sm text-neutral-mediumgray">
              Pulse • Bounce • Spin
            </p>
          </div>

          {/* Hover Animations */}
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-4">Hover Animations</h3>
            <div className="flex justify-center gap-6 mb-4">
              <Mail className="icon-hover-pulse text-primary cursor-pointer" size={40} />
              <Phone className="icon-hover-bounce text-accent-teal cursor-pointer" size={40} />
              <Settings className="icon-hover-spin text-neutral-mediumgray cursor-pointer" size={40} />
            </div>
            <p className="text-sm text-neutral-mediumgray">
              Hover to animate
            </p>
          </div>

          {/* Icon with Glow */}
          <div className="card text-center hover-glow">
            <h3 className="text-xl font-semibold mb-4">Glow Effect</h3>
            <div className="flex justify-center mb-4">
              <Sparkles className="text-accent-purple" size={40} />
            </div>
            <p className="text-sm text-neutral-mediumgray">
              Hover card for glow
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Color Palette */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Expanded Color Palette</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Accent Colors */}
          <div className="card bg-accent-teal/10 border-accent-teal">
            <div className="w-12 h-12 bg-accent-teal rounded-lg mb-3"></div>
            <p className="font-semibold">Teal</p>
            <p className="text-xs text-neutral-mediumgray">#1A936F</p>
          </div>

          <div className="card bg-accent-blue/10 border-accent-blue">
            <div className="w-12 h-12 bg-accent-blue rounded-lg mb-3"></div>
            <p className="font-semibold">Blue</p>
            <p className="text-xs text-neutral-mediumgray">#2E86DE</p>
          </div>

          <div className="card bg-accent-purple/10 border-accent-purple">
            <div className="w-12 h-12 bg-accent-purple rounded-lg mb-3"></div>
            <p className="font-semibold">Purple</p>
            <p className="text-xs text-neutral-mediumgray">#5F27CD</p>
          </div>

          <div className="card bg-accent-orange/10 border-accent-orange">
            <div className="w-12 h-12 bg-accent-orange rounded-lg mb-3"></div>
            <p className="font-semibold">Orange</p>
            <p className="text-xs text-neutral-mediumgray">#FF6348</p>
          </div>
        </div>
      </section>

      {/* Section 4: Gradients */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Gradient Backgrounds</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-primary text-white p-8 rounded-xl">
            <Zap size={32} className="mb-3" />
            <h3 className="text-2xl font-bold mb-2">Primary Gradient</h3>
            <p className="opacity-90">Perfect for hero sections</p>
          </div>

          <div className="bg-gradient-accent text-white p-8 rounded-xl">
            <TrendingUp size={32} className="mb-3" />
            <h3 className="text-2xl font-bold mb-2">Accent Gradient</h3>
            <p className="opacity-90">Great for CTAs</p>
          </div>

          <div className="bg-gradient-warm text-white p-8 rounded-xl">
            <Sparkles size={32} className="mb-3" />
            <h3 className="text-2xl font-bold mb-2">Warm Gradient</h3>
            <p className="opacity-90">Energy and action</p>
          </div>

          <div className="bg-gradient-cool text-white p-8 rounded-xl">
            <Settings size={32} className="mb-3" />
            <h3 className="text-2xl font-bold mb-2">Cool Gradient</h3>
            <p className="opacity-90">Technology and trust</p>
          </div>
        </div>
      </section>

      {/* Section 5: Typography */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Improved Typography</h2>
        
        <div className="card space-y-6">
          <div>
            <h1 className="mb-2">Heading 1 - line-height: 1.1</h1>
            <p className="text-sm text-neutral-mediumgray">letter-spacing: -0.02em</p>
          </div>
          
          <div>
            <h2 className="mb-2">Heading 2 - line-height: 1.2</h2>
            <p className="text-sm text-neutral-mediumgray">letter-spacing: -0.02em</p>
          </div>
          
          <div>
            <h3 className="mb-2">Heading 3 - line-height: 1.3</h3>
            <p className="text-sm text-neutral-mediumgray">letter-spacing: -0.02em</p>
          </div>
          
          <div>
            <p className="mb-2">
              Paragraph text with improved line-height of 1.7 for better readability. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-neutral-mediumgray">line-height: 1.7</p>
          </div>
        </div>
      </section>

      {/* Section 6: Card Variations */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Enhanced Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">Standard Card</h3>
            <p className="text-neutral-mediumgray">
              Hover to see lift effect and enhanced shadow
            </p>
          </div>

          <div className="card hover-glow">
            <h3 className="text-xl font-semibold mb-3">Card with Glow</h3>
            <p className="text-neutral-mediumgray">
              Hover to see accent border and glow effect
            </p>
          </div>

          <div className="card bg-gradient-accent text-white">
            <h3 className="text-xl font-semibold mb-3">Gradient Card</h3>
            <p className="opacity-90">
              Using gradient backgrounds for special content
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Focus States */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8">Accessible Focus States</h2>
        
        <div className="card space-y-4">
          <p className="text-neutral-mediumgray mb-4">
            Press Tab to navigate and see the enhanced focus rings (3px accent teal outline)
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Focus Me</button>
            <button className="btn-secondary-light">Tab Here</button>
            <a href="#" className="text-primary hover:underline">Focus Link</a>
            <input 
              type="text" 
              placeholder="Focus input" 
              className="input-field"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
