# 🌾 AgroLab Website

Modern, professzionális weboldal mezőgazdasági labor és tanácsadó szolgáltatásokhoz.

**Verzió:** v0.7
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## 🚀 Gyors Kezdés

### Előfeltételek
- Node.js 18+
- npm vagy yarn

### Telepítés

```bash
# Függőségek telepítése
npm install

# Environment változók beállítása
cp .env.example .env.local
# Szerkeszd a .env.local fájlt és add hozzá a RESEND_API_KEY-t

# Development szerver indítása
npm run dev

# Megnyitás böngészőben
# http://localhost:3000
```

---

## 📚 DOKUMENTÁCIÓ

Az összes dokumentáció a projekt gyökerében található:

### 🎯 Főbb Dokumentumok

| Dokumentum | Leírás |
|------------|--------|
| **[COMPREHENSIVE_AUDIT_2025.md](./COMPREHENSIVE_AUDIT_2025.md)** | 🔍 Teljes weboldal audit, UX elemzés, fejlesztési javaslatok |
| **[IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md)** | 🔧 Technikai implementációs útmutató, design system |
| **[TODO.md](./TODO.md)** | 📋 Aktuális feladatlista, roadmap |
| **[RESEND_SETUP.md](./RESEND_SETUP.md)** | 📧 Email küldés beállítása (Resend API) |
| **[QUICK_ANIMATION_GUIDE.md](./QUICK_ANIMATION_GUIDE.md)** | 🎬 Animációk használati útmutató |
| **[website-design-plan.md](./website-design-plan.md)** | 🎨 Eredeti design terv |

### 📖 Ajánlott Olvasási Sorrend

**Új fejlesztőknek:**
1. Ez a README
2. `IMPLEMENTATION_NOTES.md` - Technikai áttekintés
3. `COMPREHENSIVE_AUDIT_2025.md` - Megérteni a jelenlegi állapotot
4. `TODO.md` - Mit kell még fejleszteni

**UX/Design szakembereknek:**
1. `COMPREHENSIVE_AUDIT_2025.md` - Teljes UX audit
2. `website-design-plan.md` - Eredeti tervezés
3. `TODO.md` - Tervezett fejlesztések

---

## ✨ Funkciók

### ✅ Implementált

- 🎨 **Modern, responsive design** - Mobile-first approach
- 🌍 **Többnyelvű** - Magyar/English támogatás
- 📝 **Multi-step ajánlatkérő form** - 3 lépéses wizard
- 💾 **Auto-save draft** - LocalStorage alapú piszkozat mentés
- ✅ **Real-time validáció** - Azonnali visszajelzés
- 📧 **Email integráció** - Resend API
- 🎭 **Smooth animációk** - Framer Motion
- ♿ **Accessibility** - WCAG 2.1 AA alapok
- 📱 **PWA ready** - Progressive Web App alap

### 🔨 Fejlesztés alatt

Lásd: `TODO.md` és `COMPREHENSIVE_AUDIT_2025.md`

---

## 🏗️ Projekt Struktúra

```
website_app_v3/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Főoldal
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── api/               # API endpoints
│   ├── arlista/           # Árlista
│   ├── kapcsolat/         # Kapcsolat
│   ├── rolunk/            # Rólunk
│   └── szolgaltatasok/    # Szolgáltatások
│
├── components/             # React komponensek
│   ├── Header.tsx         # Navigáció
│   ├── Footer.tsx         # Lábléc
│   ├── QuoteModal.tsx     # Ajánlatkérő (multi-step)
│   └── ...
│
├── lib/                    # Utility funkciók
│   └── i18n/              # Többnyelvűség
│
├── hooks/                  # Custom React hooks
└── public/                 # Statikus fájlok
```

Részletes struktúra: `IMPLEMENTATION_NOTES.md`

---

## 🎨 Design System

### Színpaletta

```typescript
primary: '#2D5016'      // Főszín - zöld
accent-teal: '#1A936F'  // Másodlagos - türkiz
accent-cyan: '#4ECDC4'  // Kiemelés - cyan
```

### Tipográfia
- **Heading Font:** Default system font
- **Body Font:** Default system font
- Responsive font sizing (mobile-first)

### Komponensek
- `btn-primary`, `btn-secondary`, `btn-accent` - Gombok
- `card`, `hover-glow` - Kártyák
- `section-padding`, `container-custom` - Layout

Teljes design system: `IMPLEMENTATION_NOTES.md` > Design System

---

## 📧 Email Konfiguráció

Az email küldéshez **Resend API** szükséges.

**Gyors setup (5 perc):**

1. Regisztráció: https://resend.com
2. API kulcs generálása
3. `.env.local` fájl létrehozása:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Szerver újraindítása

Részletes útmutató: `RESEND_SETUP.md`

---

## 🌍 Többnyelvűség

A weboldal támogatja a magyar és angol nyelvet.

**Nyelvváltás:**
- Client-side váltás (azonnali, nincs page reload)
- LocalStorage perzisztencia
- Header-ben található nyelválasztó

**Fordítások hozzáadása:**
```typescript
// lib/i18n/translations.ts
export const translations = {
  hu: { hero: { title: 'Üdvözöljük' } },
  en: { hero: { title: 'Welcome' } }
}
```

---

## 🚢 Deployment

### Netlify

A projekt Netlify-ra van optimalizálva.

**Automatikus deploy:**
```bash
git push origin main
# Netlify automatikusan build-eli és deploy-olja
```

**Environment változók (Netlify Dashboard):**
```
RESEND_API_KEY=re_xxx...
```

### Manuális Build

```bash
npm run build    # Production build
npm run start    # Production szerver
```

---

## 🧪 Scripts

```bash
npm run dev      # Development szerver
npm run build    # Production build
npm run start    # Production szerver indítás
npm run lint     # Linting
```

---

## 📊 Státusz

### UX Score: **7.5/10** ⭐

**Erősségek:**
- Modern design
- Kiváló form UX
- Responsive
- Többnyelvű

**Fejlesztendő területek:**
- Jogi oldalak hiányoznak (GDPR!)
- Placeholder tartalmak
- Analytics nincs beállítva
- Cookie consent hiányzik

Részletes elemzés: `COMPREHENSIVE_AUDIT_2025.md`

---

## 🐛 Hibajavítás

### Email nem érkezik meg
1. Ellenőrizd a `.env.local` fájlt
2. Resend Dashboard - ellenőrizd az API kulcsot
3. Nézd meg a spam mappát
4. Részletek: `RESEND_SETUP.md`

### Build error
```bash
# Cache törlése
rm -rf .next
npm install
npm run build
```

### Hydration error
- Ellenőrizd, hogy minden client komponens `'use client'` direktívával kezdődik
- Részletek: `IMPLEMENTATION_NOTES.md` > Ismert Problémák

---

## 📝 Hozzájárulás

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Commit konvenció:**
- `feat:` új funkció
- `fix:` hibajavítás
- `docs:` dokumentáció
- `style:` formázás
- `refactor:` kód átszervezés

---

## 📞 Kapcsolat & Support

### Dokumentáció Frissítés
- **Utolsó audit:** 2025. November 6.
- **Következő review:** 2025. December 1.

### Kérdések
Ha kérdésed van:
1. Nézd meg `IMPLEMENTATION_NOTES.md`-t
2. Olvasd el `COMPREHENSIVE_AUDIT_2025.md`-t
3. Ellenőrizd `TODO.md`-t

---

## 📄 Licensz

Privát projekt - Minden jog fenntartva

---

## 🎯 Következő Lépések

**Azonnal (1 hét):**
- ✅ Jogi oldalak létrehozása (GDPR compliance)
- ✅ Cookie consent banner
- ✅ Valódi céginformációk
- ✅ Analytics setup

**1 hónapon belül:**
- 📸 Valódi képek feltöltése
- 📝 Blog indítása
- 💬 Live chat
- 🧮 ROI kalkulátor

Részletes roadmap: `TODO.md` és `COMPREHENSIVE_AUDIT_2025.md`

---

**Készítette:** Development Team
**Verzió:** v0.7
**Dátum:** 2025. November 6.
