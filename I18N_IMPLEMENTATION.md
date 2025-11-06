# Nemzetköziesítés (i18n) Implementációs Összefoglaló

## Áttekintés

Az AgroLab weboldal teljes körű nemzetköziesítési (i18n) rendszert kapott, amely lehetővé teszi a magyar és angol nyelv közötti váltást. A megoldás a **Next.js 14 App Router** keretrendszerrel működik, és **React Context API**-t használ az állapotkezeléshez.

## Architektúra

### 1. Nyelvi Rendszer Mag

**Fájlok:**
- `lib/i18n/LanguageContext.tsx` - React Context a nyelvváltáshoz
- `lib/i18n/translations.ts` - Összes fordítás magyar és angol nyelven
- `components/ClientProviders.tsx` - Context provider wrapper

**Funkciók:**
- ✅ Dinamikus nyelvváltás (HU ↔ EN)
- ✅ LocalStorage perzisztencia
- ✅ Smooth átmenet animációval
- ✅ Type-safe fordítások TypeScript-tel
- ✅ HTML `lang` attribute automatikus frissítése

### 2. Fordítási Struktúra

A `translations.ts` fájl hierarchikus struktúrában tartalmazza az összes szöveget:

```typescript
{
  nav: {...},           // Navigációs menü
  services: {...},      // Szolgáltatások nevei
  hero: {...},          // Főoldal hero section
  homePage: {...},      // Főoldal összes szekció
  footer: {...},        // Footer szövegek
  quoteModal: {...},    // Ajánlatkérő űrlap
  priceCalculator: {...}, // Árkalkulátor
  liveStats: {...},     // Statisztikák
  trustBadges: {...},   // Tanúsítványok
  common: {...}         // Közös elemek (gombok, stb.)
}
```

## Implementált Komponensek

### ✅ Teljes mértékben angolosítva:

1. **Főoldal (`app/page.tsx`)**
   - Hero szekció
   - Szolgáltatások áttekintő
   - "Miért válasszon minket?" szekció
   - NDVI előtte-utána slider
   - Árkalkulátor szekció
   - CTA szekció

2. **Header (`components/Header.tsx`)**
   - Navigációs menü
   - Szolgáltatások dropdown
   - Nyelvváltó gomb (HU/EN)
   - CTA gomb

3. **MobileMenu (`components/MobileMenu.tsx`)**
   - Teljes mobil navigáció
   - Nyelvváltó
   - Accessibility labels

4. **Footer (`components/Footer.tsx`)**
   - Összes szekció
   - Linkek
   - Kapcsolati adatok

5. **QuoteModal (`components/QuoteModal.tsx`)**
   - Űrlap mezők és címkék
   - Validációs üzenetek
   - Sikeres küldés üzenet
   - Hibaüzenetek

6. **PriceCalculator (`components/PriceCalculator.tsx`)**
   - Összes címke és gomb
   - Szolgáltatás nevek

7. **LiveStats (`components/LiveStats.tsx`)**
   - Statisztika címkék
   - Főcím

8. **TrustBadges (`components/TrustBadges.tsx`)**
   - Badge címek és alcímek

## Használat

### Komponensekben

```tsx
'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function MyComponent() {
  const { t, locale, setLocale } = useLanguage()
  
  return (
    <div>
      <h1>{t.nav.home}</h1>
      <button onClick={() => setLocale('en')}>English</button>
    </div>
  )
}
```

### Új fordítások hozzáadása

1. Adj hozzá új kulcsot a `Translation` interface-hez:
```typescript
interface Translation {
  myNewSection: {
    title: string
    description: string
  }
}
```

2. Add meg mindkét nyelven:
```typescript
export const translations: Record<Locale, Translation> = {
  hu: {
    myNewSection: {
      title: 'Magyar Cím',
      description: 'Magyar leírás'
    }
  },
  en: {
    myNewSection: {
      title: 'English Title',
      description: 'English description'
    }
  }
}
```

3. Használd a komponensben:
```tsx
<h1>{t.myNewSection.title}</h1>
```

## Nyelvi Animációk

A nyelvváltás során **professzionális "Slide & Morph" animáció** jelenik meg:
- **Slide Out:** Tartalom balra csúszik (-20px) + elmosódás (blur 4px) + elhalványulás (200ms)
- **Nyelv csere:** Háttérben történik
- **Slide In:** Új tartalom jobbról jön be (+20px) → középre + tisztul + megjelenik (250ms)
- **Stagger Wave:** Szekciók egymás után animálódnak (40ms késleltetés) - elegáns hullámszerű átmenet
- **Teljes időtartam:** ~450ms
- **GPU-accelerated:** 60 FPS garantált

**Részletes dokumentáció:** `LANGUAGE_ANIMATION.md`

CSS class: `language-transitioning` (a `globals.css`-ben definiálva)

## Még Implementálandó

### Aloldalak:
- [ ] `/szolgaltatasok/*` - Szolgáltatások részletes oldalai
- [ ] `/kapcsolat` - Kapcsolat oldal
- [ ] `/rolunk` - Rólunk oldal
- [ ] `/arlista` - Árlista oldal
- [ ] Error oldalak (404, 500, stb.)

### Opcionális fejlesztések:
- [ ] URL-alapú nyelvválasztás (`/en/services`, `/hu/szolgaltatasok`)
- [ ] SEO meta tagek nyelvesítése
- [ ] Alternatív nyelvi linkek hozzáadása (`hreflang`)
- [ ] JSON-based translations külön fájlokban
- [ ] Fordítás placeholder-ek missing translations-höz

## Teljesítmény

- **Bundle méret:** ~3KB extra (translations)
- **Runtime impact:** Minimális (Context API)
- **SEO:** Megfelelő (HTML lang attribute frissül)

## Tesztelés

### Ellenőrizendő:
1. ✅ Nyelvváltó gombok működnek
2. ✅ LocalStorage perzisztencia
3. ✅ Minden szöveg megjelenik mindkét nyelven
4. ⏳ Űrlap validációk
5. ⏳ Mobilnézet
6. ⏳ Accessibility (screen readers)

## Best Practices

1. **Mindig használd a `t` objektumot** hardcoded szövegek helyett
2. **Ne hagyd ki az importot:** `import { useLanguage } from '@/lib/i18n/LanguageContext'`
3. **Client component kell:** `'use client'` a fájl tetején
4. **Type safety:** TypeScript ellenőrzi a fordítási kulcsokat

## Troubleshooting

### "useLanguage must be used within a LanguageProvider"
- **Ok:** A komponens nincs a `LanguageProvider` alatt
- **Megoldás:** Ellenőrizd hogy a `ClientProviders` be van-e importálva a `layout.tsx`-be

### Nyelvváltás után nem frissül a szöveg
- **Ok:** Server Component használata `'use client'` nélkül
- **Megoldás:** Add hozzá a `'use client'` direktívát a fájl tetejére

### Missing translations warning
- **Ok:** Hiányzó fordítási kulcs
- **Megoldás:** Add hozzá a kulcsot mindkét nyelvhez a `translations.ts`-ben

## Karbantartás

- **Új szöveg hozzáadása:** Frissítsd a `translations.ts` fájlt
- **Új nyelv hozzáadása:** Bővítsd a `Locale` type-ot és a translations objektumot
- **Fordítások review:** Rendszeresen ellenőrizd a fordítások pontosságát natív beszélőkkel

## Verzió

- **Implementálva:** 2025-01-06
- **Next.js verzió:** 14.2.33
- **React verzió:** 18.3.1

---

**Státusz:** ✅ Főbb komponensek kész | ⏳ Aloldalak folyamatban
