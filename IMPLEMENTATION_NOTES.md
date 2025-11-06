# 🔧 IMPLEMENTÁCIÓS JEGYZETEK
## AgroLab Website - Technikai Dokumentáció

**Verzió:** v0.7
**Utolsó frissítés:** 2025. November 6.

---

## 📋 TARTALOMJEGYZÉK

1. [Technológiai Stack](#technológiai-stack)
2. [Projekt Struktúra](#projekt-struktúra)
3. [Implementált Funkciók](#implementált-funkciók)
4. [Email Setup](#email-setup)
5. [Többnyelvűség (i18n)](#többnyelvűség-i18n)
6. [Animációk & UX](#animációk--ux)
7. [Design System](#design-system)
8. [Deployment](#deployment)

---

## 🛠️ TECHNOLÓGIAI STACK

### Core
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.11

### Libraries
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Utilities:** clsx, tailwind-merge

### Dev Tools
- **Linting:** ESLint
- **Package Manager:** npm

---

## 📁 PROJEKT STRUKTÚRA

```
website_app_v3/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Főoldal
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles + design system
│   ├── arlista/                 # Árlista oldal
│   ├── kapcsolat/               # Kapcsolat oldal
│   ├── rolunk/                  # Rólunk oldal
│   ├── szolgaltatasok/          # Szolgáltatások
│   │   ├── page.tsx            # Szolgáltatások áttekintő
│   │   ├── laboratorium/       # Labor oldal
│   │   ├── szaktanacsadas/     # Tanácsadás oldal
│   │   └── dron/               # Drón oldal
│   └── api/
│       └── send-email/          # Email API endpoint
│           └── route.ts
│
├── components/                   # React komponensek
│   ├── Header.tsx               # Fejléc + navigáció
│   ├── Footer.tsx               # Lábléc
│   ├── MobileMenu.tsx           # Mobil menü
│   ├── QuoteModal.tsx           # Ajánlatkérő modal (multi-step)
│   ├── FormInput.tsx            # Újrafelhasználható input
│   ├── ProgressBar.tsx          # Form progress bar
│   ├── ScrollReveal.tsx         # Scroll animáció wrapper
│   ├── PriceCalculator.tsx      # Ár kalkulátor
│   ├── BeforeAfterSlider.tsx    # NDVI előtte/utána
│   ├── LiveStats.tsx            # Élő statisztikák
│   └── TrustBadges.tsx          # Bizalmi jelvények
│
├── lib/                          # Utility funkciók
│   └── i18n/                    # Többnyelvűség
│       ├── LanguageContext.tsx  # Language provider
│       └── translations.ts      # HU/EN fordítások
│
├── hooks/                        # Custom React hooks
│   └── useQuoteModal.tsx        # Quote modal hook
│
├── public/                       # Statikus fájlok
│   └── robots.txt
│
└── Documentation/               # Markdown dokumentációk
    ├── COMPREHENSIVE_AUDIT_2025.md  # Teljes audit
    ├── IMPLEMENTATION_NOTES.md      # Ez a fájl
    ├── RESEND_SETUP.md              # Email konfiguráció
    ├── TODO.md                      # Feladatlista
    ├── README.md                    # Projekt README
    └── website-design-plan.md       # Eredeti tervezés
```

---

## ✅ IMPLEMENTÁLT FUNKCIÓK

### 1. Multi-Step Form (QuoteModal.tsx)

**3-lépéses wizard:**
1. **Alapadatok** - Név, email, telefon
2. **Szolgáltatás** - Labor, Drón, Tanácsadás, Egyéb
3. **Üzenet** - Részletek, GDPR checkbox

**Funkciók:**
- ✅ Progress bar (1/3, 2/3, 3/3)
- ✅ Real-time validáció (onBlur)
- ✅ Auto-save draft (LocalStorage, 1 sec debounce)
- ✅ Zöld checkmark validált mezőknél
- ✅ Piros hibaüzenetek
- ✅ Smooth scroll form tetejére
- ✅ Keyboard navigation (Enter, Tab)
- ✅ Accessibility (ARIA labels, screen reader)

**Használat:**
```typescript
import QuoteModal from '@/components/QuoteModal'

const [isOpen, setIsOpen] = useState(false)

<button onClick={() => setIsOpen(true)}>Ajánlatot Kérek</button>
<QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

---

### 2. Többnyelvűség (HU/EN)

**LanguageContext.tsx:**
- Client-side nyelvváltás
- LocalStorage perzisztencia
- Azonnali frissítés (nincs page reload)

**Használat:**
```typescript
import { useLanguage } from '@/lib/i18n/LanguageContext'

const { locale, setLocale, t } = useLanguage()

<button onClick={() => setLocale('en')}>EN</button>
<h1>{t.hero.title}</h1>
```

**Fordítások hozzáadása:**
```typescript
// lib/i18n/translations.ts
export const translations = {
  hu: {
    hero: {
      title: 'Üdvözöljük',
      // ...
    }
  },
  en: {
    hero: {
      title: 'Welcome',
      // ...
    }
  }
}
```

---

### 3. Email Küldés (Resend API)

**Setup:** Lásd `RESEND_SETUP.md`

**API Endpoint:** `/api/send-email/route.ts`

**Működés:**
1. POST request JSON body-val
2. Zod validáció
3. HTML email generálás
4. Resend API hívás
5. Success/error response

**Teszt mód:**
Ha nincs `RESEND_API_KEY`, a konzolba logol.

**Environment változók:**
```env
# .env.local
RESEND_API_KEY=re_YOUR_API_KEY_HERE
```

---

### 4. Animációk

**Scroll Reveal:**
```typescript
import ScrollReveal from '@/components/ScrollReveal'

<ScrollReveal delay={0.2} direction="up">
  <h2>Tartalom</h2>
</ScrollReveal>
```

**Framer Motion példák:**
```typescript
// Fade in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Tartalom
</motion.div>

// Stagger children
<motion.div className="stagger-children">
  {items.map(item => (
    <motion.div key={item.id}>{item.name}</motion.div>
  ))}
</motion.div>
```

**Icon animációk:**
```typescript
// globals.css -ben definiálva
<CheckCircle className="icon-pulse" />      // Pulzálás
<ArrowDown className="icon-bounce" />       // Ugrálás
<Loader className="icon-spin" />            // Forgás
<AlertCircle className="icon-shake" />      // Rázás

// Hover animációk
<Mail className="icon-hover-pulse" />
<Phone className="icon-hover-bounce" />
<Settings className="icon-hover-spin" />
```

---

## 🎨 DESIGN SYSTEM

### Színpaletta (tailwind.config.ts)

```typescript
colors: {
  primary: {
    DEFAULT: '#2D5016',    // Fő zöld
    medium: '#3A7D44',
    light: '#4A9D5F',
    dark: '#1F3810',
  },
  accent: {
    turquoise: '#00C9A7',
    cyan: '#4ECDC4',
    teal: '#1A936F',
  },
  neutral: {
    white: '#FFFFFF',
    offwhite: '#F9FAFB',
    lightgray: '#E5E7EB',
    mediumgray: '#6B7280',
    darkgray: '#374151',
    placeholder: '#9CA3AF',
  },
  status: {
    success: '#27AE60',
    error: '#E74C3C',
    warning: '#F39C12',
    info: '#3498DB',
  },
}
```

### Tipográfia

```css
/* globals.css */
h1 { font-size: 3rem; line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-size: 2.5rem; line-height: 1.2; letter-spacing: -0.02em; }
h3 { font-size: 1.875rem; line-height: 1.3; }
p  { line-height: 1.7; }
```

### Komponens Osztályok

```css
/* Gombok */
.btn-primary      /* Zöld, bold, shadow */
.btn-secondary    /* Outline, fehér border */
.btn-accent       /* Gradient turquoise */

/* Kártyák */
.card             /* Fehér bg, rounded, shadow */
.hover-glow       /* Hover state accent border */

/* Layout */
.container-custom  /* Max-width container, padding */
.section-padding   /* Vertical padding (py-16 md:py-24) */
```

---

## 🚀 DEPLOYMENT

### Netlify Deploy

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Environment Variables (Netlify Dashboard):**
```
RESEND_API_KEY=re_xxx...
```

### Build Parancsok

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

---

## 🐛 ISMERT PROBLÉMÁK & MEGOLDÁSOK

### 1. Dynamic Tailwind Classes
**Probléma:** `bg-${color}/10` nem működik production-ben
**Megoldás:** Statikus color mapping
```typescript
const colorClasses = {
  primary: { bg: 'bg-primary/10', text: 'text-primary' }
}
<div className={colorClasses[color].bg} />
```

### 2. Framer Motion Hydration
**Probléma:** Client/server mismatch
**Megoldás:** `'use client'` + mounted state
```typescript
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
```

### 3. LocalStorage SSR
**Probléma:** `window is not defined`
**Megoldás:** useEffect + type guard
```typescript
useEffect(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('key')
  }
}, [])
```

---

## 📝 KÓDOLÁSI KONVENCIÓK

### TypeScript
- Explicit típusok minden function-nél
- Interface névkonvenció: `PascalCase`
- Type guard használata ahol lehet

### React
- Functional components + hooks
- Props destructuring
- Named exports (nem default)

### Tailwind
- Mobile-first (pl: `text-sm md:text-lg`)
- Utility classes > custom CSS
- Design token használat (colors, spacing)

### Git Commit
```
feat: új feature hozzáadása
fix: bug javítás
docs: dokumentáció frissítés
style: formázás, CSS változás
refactor: kód átszervezés
test: tesztek hozzáadása
```

---

## 🔗 HASZNOS LINKEK

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **Resend API:** https://resend.com/docs
- **Lucide Icons:** https://lucide.dev

---

## 📞 SUPPORT & KÉRDÉSEK

Ha kérdésed van az implementációval kapcsolatban, nézd meg:
1. `COMPREHENSIVE_AUDIT_2025.md` - Teljes audit és javaslatok
2. `TODO.md` - Nyitott feladatok
3. `RESEND_SETUP.md` - Email konfiguráció

---

**Készítette:** Development Team
**Verzió:** 1.0
**Dátum:** 2025. November 6.
