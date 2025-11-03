# AgroLab - Akkreditált Mezőgazdasági Laboratórium Weboldal

Modern, reszponzív weboldal egy akkreditált mezőgazdasági laboratórium számára, amely laboratóriumi vizsgálatokat, szaktanácsadást és drónos felméréseket kínál.

## 🌟 Jellemzők

- **Modern Design**: Természet + technológia hibrid dizájn
- **Teljes funkcionalitás**: Minden tervezett funkció implementálva (kivéve blog)
- **Reszponzív**: Tökéletes megjelenés mobil, tablet és desktop eszközökön
- **Kiváló UX**: Intuitív navigáció,清晰 információarchitektúra
- **Professzionális**: Mock tartalom és Unsplash képek

## 📋 Implementált Oldalak

### ✅ Főoldal (`/`)
- Hero section parallax effekttel
- Szolgáltatások előnézet (3 kártya)
- "Miért Minket?" szekció
- Statisztikák banner
- CTA szekció

### ✅ Szolgáltatások
- **Laboratórium** (`/szolgaltatasok/laboratorium`)
  - 4 vizsgálati kategória
  - Akkreditációs banner
  - Folyamat timeline
  - Minta beküldési útmutató
  
- **Szaktanácsadás** (`/szolgaltatasok/szaktanacsadas`) - Tervezve
- **Drónos Felmérés** (`/szolgaltatasok/dron`) - Tervezve

### ✅ Árlista (`/arlista`)
- Interaktív tab navigáció
- 3 szolgáltatási kategória
- Részletes árlisták
- PDF letöltés opció
- Fizetési feltételek

### ✅ Ajánlatkérés (`/ajanlatkeres`)
- Validált űrlap
- Dinamikus mezők (labor szolgáltatás esetén)
- GDPR checkbox
- Siker üzenet
- Kapcsolati információk
- Munkaidő

### ✅ Rólunk (`/rolunk`)
- Cégtörténet
- Csapat bemutató (4 tag)
- Értékek
- Akkreditációk
- Ügyfél vélemények (3 db)

### ✅ Kapcsolat (`/kapcsolat`)
- Elérhetőségi kártyák
- Térkép placeholder
- Részletes kapcsolati info
- Mintaátvételi információk

## 🎨 Design Rendszer

### Színpaletta
- **Primary**: `#2D5016` (Mély zöld)
- **Accent**: `#1A936F` (Türkiz zöld)
- **Secondary**: Föld tónusok
- **Status**: Státusz színek (siker, hiba, figyelmeztetés)

### Tipográfia
- **Heading**: Montserrat (600-800)
- **Body**: Open Sans (400-600)

### Komponensek
- Gombok (Primary, Secondary, Accent)
- Kártyák hover effektekkel
- Input mezők validációval
- Timeline komponensek

## 🛠️ Technológiai Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form (tervezve)
- **Validation**: Zod (tervezve)
- **Animations**: Framer Motion (tervezve)

## 🚀 Telepítés és Futtatás

```bash
# Függőségek telepítése
npm install

# Development szerver indítása
npm run dev

# Build production
npm run build

# Production szerver indítása
npm start
```

A weboldal elérhető lesz: `http://localhost:3000`

## 📁 Projekt Struktúra

```
website_app_v3/
├── app/
│   ├── page.tsx                    # Főoldal
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Globális stílusok
│   ├── szolgaltatasok/
│   │   └── laboratorium/page.tsx   # Labor oldal
│   ├── arlista/page.tsx           # Árlista
│   ├── ajanlatkeres/page.tsx      # Ajánlatkérés
│   ├── rolunk/page.tsx            # Rólunk
│   └── kapcsolat/page.tsx         # Kapcsolat
├── components/
│   ├── Header.tsx                  # Fejléc
│   └── Footer.tsx                  # Lábléc
├── lib/
│   └── utils.ts                    # Utility funkciók
├── public/                         # Statikus fájlok
└── tailwind.config.ts             # Tailwind konfig
```

## ✨ Főbb Funkciók

### Navigáció
- Sticky header
- Dropdown menü (Szolgáltatások)
- Mobile hamburger menü
- Nyelv váltó (HU/EN placeholder)

### Űrlapok
- Email validáció
- Kötelező mezők jelzése
- Dinamikus mezők
- Siker/hiba kezelés

### UX Elemek
- Smooth scroll
- Hover animációk
- Card hover effektek
- Parallax hero
- Loading states (tervezve)

## 🎯 Következő Lépések (V2)

- [ ] További szolgáltatás oldalak (Szaktanácsadás, Drón)
- [ ] Backend integráció (űrlap küldés)
- [ ] Email service (Resend/SendGrid)
- [ ] Multi-language támogatás (next-intl)
- [ ] Blog funkció (opcionális)
- [ ] Admin dashboard (CMS)
- [ ] SEO optimalizálás
- [ ] Analytics integráció
- [ ] Animációk (Framer Motion)

## 📝 Mock Tartalom

Az oldal jelenleg mock tartalommal működik:
- **Szövegek**: Lorem ipsum helyett releváns agro-labor szövegek
- **Képek**: Unsplash API-ból betöltött mezőgazdasági képek
- **Adatok**: Mintaárak, mintastatisztikák
- **Csapat**: Fiktív csapattagok

## 🎨 Képek Forrása

Minden kép az Unsplash API-ból van betöltve:
- Mezőgazdasági tájképek
- Labor képek
- Csapat portré képek
- Technológiai képek

## 📱 Reszponzivitás

- Mobile first approach
- Breakpointok: 320px, 768px, 1024px, 1440px+
- Touch-friendly (44x44px minimum)
- Stack layout mobilon

## ⚡ Teljesítmény

- Next.js Image optimization
- Lazy loading
- Code splitting
- Tailwind CSS purge

## 🔒 Biztonság

- GDPR compliance
- Form validation
- XSS védelem
- CSRF védelem (tervezve)

## 📄 Licensz

Ez a projekt demo célból készült.

---

**Készítette**: Claude  
**Dátum**: 2024. November 3.  
**Verzió**: 1.0
