# 📋 TODO Lista - AgroLab Website

**Utolsó frissítés:** 2024. November 5.  
**Státusz:** Aktív fejlesztés alatt

---

## ✅ BEFEJEZETT FELADATOK (2024 Nov)

### UX Fejlesztések
- [x] UX elemzés készítése - jelenlegi állapot áttekintése
- [x] Kritikus UX problémák azonosítása és dokumentálása
- [x] Fejlesztési ajánlások kidolgozása prioritási sorrendben
- [x] Design továbbfejlesztési lehetőségek felvázolása
- [x] Részletes UX audit dokumentum létrehozása (`UX_AUDIT_FINAL.md`)

### Form UX Implementáció
- [x] Multi-step form wizard (3 lépés)
- [x] Progress bar komponens
- [x] Auto-save draft LocalStorage-ba
- [x] Real-time validáció (onBlur)
- [x] FormInput újrafelhasználható komponens
- [x] Scroll optimalizálás (form tetejére)
- [x] Navigációs gombok (Vissza/Következő)

### Technikai Javítások
- [x] Dinamikus Tailwind osztályok javítása
- [x] Resend API implementálása
- [x] Email template létrehozása
- [x] Mobile UX javítások (blur effect)
- [x] Dokumentációk készítése

---

## 🚨 KRITIKUS PRIORITÁS (Sprint 1 - 1 hét)

### Jogi Compliance
- [ ] **Adatvédelmi tájékoztató** oldal létrehozása
  - Jogi szöveg beszerzése ügyvédtől
  - `/app/adatvedelem/page.tsx` létrehozása
  - Footer link ellenőrzése
  
- [ ] **ÁSZF** (Általános Szerződési Feltételek) oldal
  - Jogi szöveg beszerzése
  - `/app/aszf/page.tsx` létrehozása
  
- [ ] **Cookie Policy** oldal
  - Cookie használat dokumentálása
  - `/app/cookie/page.tsx` létrehozása
  
- [ ] **Impresszum** oldal
  - Céginformációk
  - `/app/impresszum/page.tsx` létrehozása

### Cookie Consent
- [ ] **Cookie Consent Banner** implementálása
  - CookieYes vagy OneTrust integráció
  - GDPR compliant popup
  - Cookie beállítások mentése
  - Analytics consent kezelése

### Alapfunkciók
- [ ] **Google Maps** integráció
  - Kapcsolat oldalon térkép beágyazása
  - Iroda címének megjelenítése
  - Útvonaltervező link
  
- [ ] **PDF letöltések** működővé tétele
  - Árlista PDF készítése
  - Minta jelentés PDF készítése
  - Akkreditációs dokumentum PDF
  - Fájlok feltöltése `public/downloads/` mappába
  - Download gombok implementálása

### Email Konfiguráció
- [ ] **Resend API kulcs** beállítása
  - Resend fiók létrehozása
  - API kulcs generálása
  - `.env.local` fájl frissítése
  - Email teszt végrehajtása

---

## 🔶 MAGAS PRIORITÁS (Sprint 2 - 1-2 hét)

### Navigáció
- [ ] **Breadcrumb komponens** létrehozása
  - `components/Breadcrumb.tsx`
  - Minden szolgáltatás oldalra
  - Accessibility support
  
- [ ] **Anchor link smooth scroll**
  - `#laboratorium`, `#dron`, `#tanacsadas` linkek
  - Smooth scroll behavior
  - Offset beállítása (header miatt)

### Vizuális Feedback
- [ ] **Focus visible states** javítása
  - Egységes focus ring
  - Keyboard navigation tesztelése
  - Accessibility audit
  
- [ ] **Loading states** minden interakcióhoz
  - Oldal váltásnál loading spinner
  - Lazy loaded komponenseknél skeleton
  - API hívások loading state

### Keresés
- [ ] **Site-wide keresés** funkció
  - Search input header-ben
  - Client-side keresés implementálása
  - Vagy Algolia integráció
  - Keresési eredmények oldal

---

## 🟢 KÖZEPES PRIORITÁS (Sprint 3 - 2-3 hét)

### Tartalom
- [ ] **Valódi képek** feltöltése
  - Labor fotók
  - Drón felvételek
  - Mezőgazdasági képek
  - Next.js Image optimalizálás
  - `public/images/` struktúra
  
- [ ] **Blog/Hírek szekció**
  - `/app/blog/page.tsx` létrehozása
  - MDX alapú blog rendszer
  - Blog post template
  - RSS feed
  
- [ ] **Központi FAQ oldal**
  - `/app/gyakori-kerdesek/page.tsx`
  - Kategorizált FAQ-k
  - Keresés funkció
  - Accordion komponens
  
- [ ] **Projekt galéria**
  - `/app/projektek/page.tsx`
  - Galéria komponens
  - Lightbox
  - Esettanulmányok

### Analytics
- [ ] **Google Analytics 4** implementálása
  - `components/Analytics.tsx` kitöltése
  - GA4 property létrehozása
  - Tracking code beágyazása
  - Event tracking beállítása
  
- [ ] **Google Tag Manager**
  - GTM container létrehozása
  - Tag-ek konfigurálása
  - Conversion tracking

---

## 🔵 ALACSONY PRIORITÁS (Sprint 4 - 1 hónap)

### Konverzió Optimalizálás
- [ ] **Live Chat widget**
  - Tawk.to vagy Crisp integráció
  - Chat widget testreszabása
  - Automatikus üzenetek
  
- [ ] **Exit-intent popup**
  - Popup komponens
  - Exit detection
  - Lead capture form
  
- [ ] **Lead magnet tartalmak**
  - PDF útmutatók készítése
  - Letölthető tartalmak
  - Email cserébe tartalom

### Email Marketing
- [ ] **Newsletter feliratkozás**
  - Feliratkozó form
  - Mailchimp/SendGrid integráció
  - Double opt-in
  
- [ ] **Automatikus email sorozatok**
  - Welcome email
  - Nurture campaign
  - Re-engagement

### Fejlett Funkciók
- [ ] **A/B Testing** setup
  - Google Optimize
  - Variant tesztelése
  - Conversion tracking
  
- [ ] **Heatmap analitika**
  - Hotjar integráció
  - Session recording
  - User behavior analysis

---

## 🎨 DESIGN FEJLESZTÉSEK

### Vizuális Finomítások
- [ ] Mikro-interakciók hozzáadása
- [ ] Hover animációk finomítása
- [ ] Card flip animációk
- [ ] Button ripple effect

### Színpaletta
- [ ] Több accent színek definiálása
- [ ] Gradient variációk
- [ ] Dark mode support (opcionális)

### Tipográfia
- [ ] Heading scale optimalizálása
- [ ] Line-height javítása
- [ ] Font pairing review

### Ikonográfia
- [ ] Egyedi ikon set
- [ ] Animált ikonok
- [ ] Illusztrációk

---

## 🔧 TECHNIKAI FEJLESZTÉSEK

### Kód Minőség
- [ ] TypeScript strict mode
- [ ] ESLint szabályok szigorítása
- [ ] Prettier konfiguráció
- [ ] Pre-commit hooks (Husky)

### Tesztelés
- [ ] Unit tesztek (Vitest)
- [ ] E2E tesztek (Playwright)
- [ ] Visual regression testing
- [ ] Accessibility testing

### Performance
- [ ] Image CDN beállítása
- [ ] Code splitting optimalizálása
- [ ] Bundle size csökkentése
- [ ] Lighthouse audit 90+ score

### SEO
- [ ] Strukturált adatok bővítése
- [ ] XML sitemap generálása
- [ ] Meta descriptions optimalizálása
- [ ] Internal linking stratégia
- [ ] robots.txt finomítása

---

## 📊 GYORS GYŐZELMEK (Quick Wins - 1-2 óra)

- [ ] Smooth scroll CSS hozzáadása
- [ ] Focus ring színének egységesítése
- [ ] 404 oldal tartalom hozzáadása
- [ ] robots.txt létrehozása
- [ ] Favicon optimalizálás
- [ ] Open Graph képek hozzáadása

---

## 📈 MÉRŐSZÁMOK & CÉLOK

### Jelenlegi Állapot
- UX Score: **7.5/10**
- Form Conversion: ~5%
- Bounce Rate: ~60%
- Page Load Time: ~2.5s

### Célok (3 hónap)
- UX Score: **9.0/10**
- Form Conversion: **15%** (+10%)
- Bounce Rate: **45%** (-15%)
- Page Load Time: **1.5s** (-1s)
- Lighthouse Score: **90+**

---

## 🗓️ ÜTEMTERV

### November 2024
- ✅ UX Audit elkészítése
- ✅ Multi-step form implementálása
- 🔄 Jogi oldalak (folyamatban)
- 🔄 Cookie consent (folyamatban)

### December 2024
- Alapfunkciók (térkép, PDF-ek)
- Navigáció javítások
- Valódi képek feltöltése

### Január 2025
- Blog szekció
- FAQ oldal
- Analytics implementálása

### Február 2025
- Projekt galéria
- Live chat
- Konverzió optimalizálás

---

## 📝 MEGJEGYZÉSEK

### Függőségek
- Jogi szövegek → Ügyvéd
- Képek → Fotós/Drón operátor
- Tartalmak → Marketing csapat

### Erőforrások
- Fejlesztő: 1 fő
- Designer: 0.5 fő (részmunkaidő)
- Tartalomkészítő: 0.5 fő

### Költségbecslés
- Resend API: Ingyenes (100 email/nap)
- Cookie Consent: $0-50/hó
- Analytics: Ingyenes (GA4)
- Live Chat: $0-20/hó
- Hosting: Változatlan

---

## 🔗 KAPCSOLÓDÓ DOKUMENTUMOK

- `UX_AUDIT_FINAL.md` - Részletes UX audit
- `UX_FEJLESZTESEK.md` - Multi-step form dokumentáció
- `RESEND_SETUP.md` - Email API útmutató
- `GYORSJAVITAS.md` - Legutóbbi javítások
- `EMAIL_SETUP.md` - Email konfiguráció

---

**Következő review:** 2024. November 12.  
**Felelős:** Development Team
