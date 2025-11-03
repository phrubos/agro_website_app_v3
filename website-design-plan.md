# Akkreditált Agro-Laboratórium Weboldal - Design & Fejlesztési Terv

## Projekt Áttekintés

### Cég Profil
Akkreditált laboratórium és mezőgazdasági szaktanácsadó szolgáltatás, amely:
- **Laboratóriumi vizsgálatok**: talaj, növény, szerves-/műtrágyák, öntözővíz
- **Szaktanácsadás**: tápanyag-gazdálkodás, 5000 hektáron
- **Fókusz területek**: nagyértékű kultúrák, ipari zöldség, szőlő, gyümölcs, hajtatás
- **Technológia**: drónos szántóföldi növény állapot felmérés

### Célcsoport
- **B2B**: nagygazdaságok, agrár vállalkozások
- **B2C**: kisgazdák, családi gazdaságok, magánszemélyek
- **Nemzetközi piac**: angol nyelvű tartalom

### Design Filozófia
**Modern + Természet Hibrid**
- Technológia és mezőgazdaság harmonikus ötvözése
- Professzionális, ugyanakkor megközelíthető
- Tudományos precizitás természetes esztétikával

---

## 1. Oldal Struktúra (Sitemap)

```
🏠 Főoldal (Home)
│
├── 🔬 Szolgáltatások (Services)
│   ├── Laboratóriumi Vizsgálatok (Laboratory Testing)
│   ├── Szaktanácsadás (Consulting)
│   └── Drónos Felmérés (Drone Survey)
│
├── 💰 Árlista (Pricing)
│
├── 📝 Ajánlatkérés (Request Quote)
│
├── 📰 Blog / Szakcikkek (Blog / Articles)
│
├── 👥 Rólunk (About Us)
│   ├── Cég története
│   ├── Csapat
│   ├── Akkreditációk
│   └── Referenciák
│
└── 📞 Kapcsolat (Contact)
```

### Navigáció
**Header Navigation:**
- Logo (bal oldalt)
- Főoldal | Szolgáltatások | Árlista | Blog | Rólunk | Kapcsolat
- CTA gomb: "Ajánlatot Kérek"
- Language switcher: HU | EN (jobb felső sarok)

**Footer:**
- 4 oszlopos layout
  1. Céginfó + logo
  2. Gyors linkek (szolgáltatások, árlista)
  3. Jogi linkek (GDPR, Adatvédelem, ÁSZF)
  4. Kapcsolat (cím, email, telefon, social media)

---

## 2. Design Rendszer

### 2.1 Színvilág

#### Elsődleges Színek
```
Mély Zöld (Primary):
- #2D5016 - Sötét erdőzöld (header, footer, primary buttons)
- #3A7D44 - Közepes zöld (hover states, links)
- #4A9D5F - Világos zöld (backgrounds, accents)
```

#### Másodlagos Színek (Föld tónusok)
```
- #8B7355 - Meleg barna (section dividers)
- #A0826D - Világos terra (card backgrounds)
- #D4C5B9 - Krém (subtle backgrounds)
```

#### Akcentus Színek (Technológia)
```
- #00C9A7 - Türkiz zöld (drón, tech elements)
- #4ECDC4 - Ciánkék (interactive elements, icons)
- #1A936F - Tengerszínkék (CTA buttons, highlights)
```

#### Semleges Színek
```
- #FFFFFF - Fehér (fő háttér)
- #FAF9F6 - Off-white / Krémfehér (alternatív background)
- #E8E8E8 - Világosszürke (borders, dividers)
- #2C3E50 - Sötét antracit (fő szöveg)
- #5A6C7D - Közepes szürke (secondary text)
- #95A5A6 - Világos szürke (placeholder, disabled)
```

#### Státusz Színek
```
- #27AE60 - Siker zöld
- #E74C3C - Hiba piros
- #F39C12 - Figyelmeztetés narancs
- #3498DB - Információ kék
```

### 2.2 Tipográfia

#### Font Stack
```css
/* Headings */
font-family: 'Montserrat', 'Inter', -apple-system, sans-serif;
font-weight: 600-800;

/* Body Text */
font-family: 'Open Sans', 'Roboto', -apple-system, sans-serif;
font-weight: 400-600;

/* Accent / Quotes */
font-family: 'Merriweather', Georgia, serif;
font-weight: 400-700;
```

#### Méretskála
```
H1: 48px / 3rem (Desktop), 36px / 2.25rem (Mobile)
H2: 40px / 2.5rem (Desktop), 30px / 1.875rem (Mobile)
H3: 32px / 2rem (Desktop), 24px / 1.5rem (Mobile)
H4: 24px / 1.5rem
H5: 20px / 1.25rem
Body: 16px / 1rem
Small: 14px / 0.875rem
Tiny: 12px / 0.75rem
```

#### Sor-magasság
```
Headings: 1.2
Body: 1.6
Small: 1.4
```

### 2.3 Spacing Rendszer
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### 2.4 UI Elemek

#### Gombok
```css
/* Primary Button */
background: #2D5016 (zöld)
hover: #3A7D44
padding: 12px 32px
border-radius: 8px
font-weight: 600
transition: 300ms ease

/* Secondary Button */
background: transparent
border: 2px solid #2D5016
color: #2D5016
hover: background #2D5016, color white

/* CTA Button (Accent) */
background: #1A936F (türkiz-zöld)
hover: #00C9A7
box-shadow: 0 4px 12px rgba(26, 147, 111, 0.3)
```

#### Kártyák
```css
background: white
border: 1px solid #E8E8E8
border-radius: 12px
padding: 24px
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
hover: box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)
transition: 300ms ease
```

#### Input Mezők
```css
border: 2px solid #E8E8E8
border-radius: 8px
padding: 12px 16px
focus: border-color #3A7D44, box-shadow
```

### 2.5 Ikonográfia
- **Stílus**: Vonalas (outline) ikonok, 2px vonalvastagság
- **Méret**: 24px standard, 32px-48px hero/feature ikonok
- **Téma**: Mezőgazdasági + tudományos motívumok
- **Könyvtár javaslat**: Lucide Icons, Heroicons

### 2.6 Képi Világ
- **Fotók**: Valódi, high-quality mezőgazdasági fotók
  - Szántóföldek, növények közeli
  - Laborkörnyezet, szakemberek munka közben
  - Drónfelvételek (madártávlat)
- **Stílus**: Természetes fény, meleg színhőmérséklet
- **Képarányok**: 16:9 (hero), 4:3 (szolgáltatások), 1:1 (team)

---

## 3. Oldalak Részletes Terve

### 3.1 Főoldal (Home)

#### **A. Hero Section** (full viewport height)
**Tartalom:**
```
[Háttérkép: Drónfelvétel - panorámás zöld szántóföld, modern traktoros kép]

H1: "Precíziós Mezőgazdaság Tudományos Alapokon"
Subheading: "Akkreditált laboratóriumi vizsgálatok és szakértői
            tanácsadás 5000+ hektár tapasztalatával"

[Primary CTA Button: "Ajánlatot Kérek"]
[Secondary Button: "Szolgáltatásaink"]

[Scroll indicator: ↓]
```

**Layout:**
- Gradient overlay a kép fölött (transparency 0-50%)
- Szöveg középre igazítva vagy bal oldalon (responsive)
- Animáció: Fade in + Slide up effect

---

#### **B. Szolgáltatások Előnézet** (3 oszlopos grid)

**Kártya Struktúra:** (repeat 3x)
```
┌─────────────────────────────┐
│      [Icon/Ikon 64px]       │
│                              │
│    Szolgáltatás Címe (H3)   │
│                              │
│   Rövid leírás 2-3 mondat   │
│   ami bemutatja a           │
│   szolgáltatást...          │
│                              │
│      [Részletek →]          │
└─────────────────────────────┘
```

**1. Kártya - Laboratóriumi Vizsgálatok**
- **Ikon**: Labor lombik + növénylevél kombináció
- **Szöveg**: "Talaj, növény, trágya és öntözővíz minták akkreditált vizsgálata. Pontos eredmények, gyors átfutás."
- **Link**: /szolgaltatasok/laboratorium

**2. Kártya - Szaktanácsadás**
- **Ikon**: Szakember ikonogram + növekedési grafikon
- **Szöveg**: "Tápanyag-gazdálkodási tanácsadás nagyértékű kultúrákban. Szőlő, gyümölcs, ipari zöldség szakértelem."
- **Link**: /szolgaltatasok/szaktanacsadas

**3. Kártya - Drónos Felmérés**
- **Ikon**: Drón sziluett + mezőrács
- **Szöveg**: "Szántóföldi növény állapot felmérés precíziós technológiával. Multispektrális képalkotás, NDVI elemzés."
- **Link**: /szolgaltatasok/dron

**Animáció**: Stagger effect (egyenként fade in, felülről lefelé)

---

#### **C. Miért Minket? (Why Choose Us)**

**Layout**: 2 oszlop (Desktop) / 1 oszlop (Mobile)

**Bal oldal - Szöveges tartalom:**
```
H2: "Miért Válasszon Minket?"

✓ Akkreditált Laboratórium
  NAH (Nemzeti Akkreditáló Hatóság) által elismert

✓ 5000+ Hektár Tapasztalat
  Szántóföld, szőlő, gyümölcsös, hajtatás területeken

✓ Szakértői Csapat
  Agrármérnökök, növényvédő szakmérnökök

✓ Gyors Eredményszolgáltatás
  Laboratóriumi vizsgálatok X napon belül

✓ Modern Technológia
  Drónos felmérés, precíziós eszközpark
```

**Jobb oldal - Vizuális elem:**
- Kép collage: labor + mező + drón
- VAGY: Egyetlen impaktus kép (szakember a szőlőben tablettel)

---

#### **D. Számok Beszélnek (Stats Banner)**

**Layout**: 4 oszlopos (Desktop) / 2x2 (Mobile)
**Háttér**: Enyhe zöld (#F0F7F4) vagy fotó háttér blur-rel

```
┌──────────┬──────────┬──────────┬──────────┐
│  5000+   │   XX     │   XXX+   │   XX     │
│ HEKTÁR   │  ÉV      │PARAMÉTER │ ÜGYFÉL   │
└──────────┴──────────┴──────────┴──────────┘
```

**Animáció**: Count-up effect scroll-ra (number increment)

---

#### **E. Legújabb Blogbejegyzések** (3 kártya)

**Kártya Struktúra:**
```
┌─────────────────────────────┐
│   [Thumbnail kép 16:9]      │
├─────────────────────────────┤
│ [Kategória badge]           │
│                              │
│ Blogbejegyzés Címe...       │
│                              │
│ Rövid excerpt 2 sor...      │
│ Lorem ipsum dolor sit...    │
│                              │
│ 2024. Nov. 1. | 5 perc      │
└─────────────────────────────┘
```

**Footer CTA:**
- Link: "Összes cikk →" → /blog

---

#### **F. CTA Section (Lezáró felhívás)**

**Layout**: Centráls, kiemelkedő szekció
**Háttér**: Gradient (#2D5016 → #3A7D44) vagy fotó overlay

```
H2: "Kérdése Van? Kérjen Személyre Szabott Ajánlatot!"

[Email ikon] | [Telefon ikon] | [Helyszín ikon]

[Primary CTA Button: "Kapcsolatfelvétel"]
```

---

### 3.2 Szolgáltatások Oldal - Laboratóriumi Vizsgálatok

#### **A. Hero Section**
```
[Háttérkép: Laborfelszerelés, mikroszkóp, Petri csészék]

H1: "Laboratóriumi Vizsgálatok"
Lead: "Akkreditált vizsgálatok talaj, növény, trágya és víz mintákból.
      Precíz eredmények a fenntartható gazdálkodásért."
```

---

#### **B. Akkreditáció Banner**
```
┌───────────────────────────────────────────┐
│ 🏅 NAH Akkreditált Laboratórium           │
│                                           │
│ Nemzeti Akkreditáló Hatóság által        │
│ elismert vizsgálatok. [Lincenc szám]     │
│                                           │
│ [Akkreditációs dokumentum letöltése PDF] │
└───────────────────────────────────────────┘
```

---

#### **C. Vizsgálati Kategóriák** (4 kártya grid)

**1. Talajvizsgálat**
- **Ikon**: Talaj rétegek
- **Paraméterek** (expandable lista):
  - pH, mészállapot
  - Humusz tartalom
  - NPK (Nitrogén, Foszfor, Kálium)
  - Mikroelemek (Mg, Ca, Fe, Mn, Zn, Cu, B, Mo)
  - Só tartalom
  - Nehézfém tartalom
- **CTA**: "Talajvizsgálat kérése"

**2. Növényvizsgálat**
- **Ikon**: Levél vénázat
- **Paraméterek**:
  - Tápelem tartalom (N, P, K, Ca, Mg)
  - Mikroelemek
  - Kórokozó vizsgálatok
  - Növényi szövet elemzés
- **CTA**: "Növényvizsgálat kérése"

**3. Szerves/Műtrágya Vizsgálat**
- **Ikon**: Trágya zsák
- **Paraméterek**:
  - NPK tartalom
  - Szerves anyag
  - Nedvesség tartalom
  - pH
  - Szennyezőanyagok
- **CTA**: "Trágyavizsgálat kérése"

**4. Öntözővíz Vizsgálat**
- **Ikon**: Vízcsepp + növény
- **Paraméterek**:
  - pH, vezetőképesség
  - Összes só
  - Nitrát, nitrit
  - Nehézfémek
  - Mikrobiológiai vizsgálatok
- **CTA**: "Vízvizsgálat kérése"

---

#### **D. Vizsgálati Folyamat** (Timeline)

```
1. MINTAVÉTEL              2. BEKÜLDÉS
   [Ikon]                     [Ikon]
   Útmutató alapján          Postai vagy személyes
   mintavétel                átvétel
        ↓                          ↓

3. VIZSGÁLAT               4. EREDMÉNY
   [Ikon]                     [Ikon]
   Akkreditált labor         Részletes jelentés
   X-X munkanap              email/portál
```

---

#### **E. Minta Beküldési Útmutató**

**Accordion / Expandable Sections:**

**Talaj mintavétel:**
- Mikor vegyen mintát? (ősz/tavasz)
- Hogyan vegyen mintát? (mélység, mennyiség)
- Hogyan csomagolja? (zacskó, címkézés)

**Növény mintavétel:**
- Melyik növényi részt? (levél, szár, gyökér)
- Milyen állapotban? (egészséges vs. beteg)
- Csomagolás és szállítás

**Minta beküldési cím:**
```
[Cég Neve]
[Pontos cím]
[Telefon]
[Email]
```

---

#### **F. CTA Section**
```
H3: "Kezdje el most a pontos tápanyag-gazdálkodást!"

[Primary Button: "Vizsgálatot Kérek"] → /ajanlatkeres?service=labor
[Secondary Button: "Árlista Megtekintése"] → /arlista#labor
```

---

### 3.3 Szolgáltatások Oldal - Szaktanácsadás

#### **A. Hero Section**
```
[Háttérkép: Szakember szőlőben / gyümölcsösben tablet-tel]

H1: "Tápanyag-gazdálkodási Szaktanácsadás"
Lead: "Szakértői támogatás nagyértékű kultúrákban 5000 hektár
      tapasztalatával. Növelje terméseredményeit tudományos alapokon!"
```

---

#### **B. Szaktanácsadási Területek** (5 kártya)

**Kártya Sablon:**
```
┌─────────────────────────────┐
│   [Kultúra ikon/kép]        │
│                              │
│   Kultúra Neve (H3)         │
│                              │
│   • Jellemző tanácsadási    │
│     terület 1               │
│   • Terület 2               │
│   • Terület 3               │
│                              │
│   [További infó →]          │
└─────────────────────────────┘
```

**Területek:**
1. **Ipari Zöldség** (paradicsom, paprika, uborka)
2. **Szőlő** (bor és csemege)
3. **Gyümölcsös** (alma, körte, csonthéjas)
4. **Hajtatás** (üvegház/fóliaház kultúrák)
5. **Szántóföld** (kalászos, kukorica, repce)

---

#### **C. Módszertan**

**2 oszlopos layout:**

**Bal oldal - Szöveges:**
```
H2: "Hogyan Dolgozunk?"

1. Helyszíni Bejárás
   Területfelmérés, talajvizsgálat mintavétel

2. Laboratóriumi Elemzés
   Akkreditált vizsgálatok

3. Adatelemzés & Terv
   Személyre szabott tápanyag-gazdálkodási terv

4. Folyamatos Nyomon Követés
   Évszakos konzultációk, korrekciók

5. Eredmények Értékelése
   Terméseredmények, gazdaságosság
```

**Jobb oldal:**
- Infografika vagy diagram
- VAGY: Szakember munka közben (fotósorozat)

---

#### **D. Referenciák / Esettanulmányok**

**Card Layout (3 oszlop):**
```
┌─────────────────────────────┐
│   [Előtte-Utána kép]        │
├─────────────────────────────┤
│ "Szőlőültetvény Hozamának   │
│  15%-os Növelése"           │
│                              │
│ Helyszín: [Régió]           │
│ Terület: XX hektár          │
│ Kultúra: [Típus]            │
│                              │
│ Eredmény: Tápanyag-terv     │
│ optimalizálás után...       │
│                              │
│ [Teljes esettanulmány →]   │
└─────────────────────────────┘
```

---

#### **E. Csapatunk Banner**
```
"Agrármérnök és növényvédő szakmérnök kollégáink
 rendelkezésére állnak a legjobb eredmények érdekében."

[Link: Ismerje meg csapatunkat] → /rolunk#csapat
```

---

#### **F. CTA Section**
```
H3: "Indítson Konzultációt Szakértőinkkel!"

[Primary Button: "Konzultációt Kérek"] → /ajanlatkeres?service=tanacsadas
```

---

### 3.4 Szolgáltatások Oldal - Drónos Felmérés

#### **A. Hero Section**
```
[Videó háttér vagy animált GIF: Drón repülés szántóföld fölött]

H1: "Drónos Növény Állapotfelmérés"
Lead: "Precíziós mezőgazdaság a legmodernebb technológiával.
      Multispektrális képalkotás és NDVI elemzés."
```

---

#### **B. Technológia Bemutató**

**Layout: Zig-zag (alternating left-right)**

**1. Szekció - Multispektrális Kamera**
```
[Bal: Drón kamera fotó]

[Jobb: Szöveg]
H3: "Multispektrális Képalkotás"

Nem csak látható fényt, hanem közeli infravörös (NIR)
és vörös él (Red Edge) hullámhosszokat is rögzítünk.
Így láthatóvá válnak a szabad szemmel nem észlelhető
növényegészségügyi problémák.
```

**2. Szekció - NDVI Elemzés**
```
[Jobb: NDVI térkép minta]

[Bal: Szöveg]
H3: "NDVI (Normalized Difference Vegetation Index)"

A vegetációs index térképek megmutatják:
• Növény vitalitás eloszlása
• Stresszelt területek korai detektálása
• Tápanyaghiány azonosítása
• Öntözési igények térképezése
```

**3. Szekció - Precíziós Adatok**
```
[Bal: Grafikon/dashboard mockup]

[Jobb: Szöveg]
H3: "Pontos Döntéshozatal Adatok Alapján"

Részletes jelentések:
• Hektáronkénti bontás
• Zónális térképek
• Változások időbeli követése
• Javaslatok kezeléshez
```

---

#### **C. Előnyök** (Icon Grid - 6 elem, 3x2)

```
┌──────────────┬──────────────┬──────────────┐
│ [Ikon]       │ [Ikon]       │ [Ikon]       │
│ Gyors        │ Pontos       │ Nagyterület  │
│ Felmérés     │ Eredmény     │ Lefedés      │
├──────────────┼──────────────┼──────────────┤
│ [Ikon]       │ [Ikon]       │ [Ikon]       │
│ Költség-     │ Objektív     │ Korai        │
│ hatékony     │ Adatok       │ Probléma     │
│              │              │ Detektálás   │
└──────────────┴──────────────┴──────────────┘
```

---

#### **D. Képgaléria** (Drónfelvételek)

**Layout**: Masonry grid vagy Slider

**Képtípusok:**
- RGB (valódi színes) felvételek
- NDVI térkép vizualizációk
- Előtte-utána összehasonlítások
- 3D terepmodellek (opcionális)

**Lightbox funkció**: Kattintásra nagyítás + leírás

---

#### **E. Minta Jelentés**

```
┌───────────────────────────────────────────┐
│  [Minta jelentés preview - thumbnail]     │
│                                           │
│  "Tekintse meg hogyan néz ki egy         │
│   részletes drónos felmérési jelentés"   │
│                                           │
│  [📄 Minta Jelentés Letöltése (PDF)]     │
└───────────────────────────────────────────┘
```

---

#### **F. GYIK Szekció** (Accordion)

**Gyakori kérdések:**
- Milyen területet tud lefedni egy felszállással?
- Milyen időjárási feltételek szükségesek?
- Mennyi idő alatt kapom meg az eredményeket?
- Milyen sűrűn érdemes felmérést végezni?
- Mennyibe kerül egy drónos felmérés?

---

#### **G. CTA Section**
```
H3: "Próbálja Ki a Precíziós Mezőgazdaságot!"

[Primary Button: "Drónos Felmérést Kérek"] → /ajanlatkeres?service=dron
[Link: "Árak megtekintése"] → /arlista#dron
```

---

### 3.5 Árlista Oldal (Pricing)

#### **A. Hero Section**
```
H1: "Árlista"
Lead: "Átlátható árképzés minden szolgáltatásunkra.
      Egyedi igényekhez egyedi ajánlatot készítünk!"
```

---

#### **B. Szolgáltatás Szűrő/Tabs**

```
[Laboratóriumi Vizsgálatok] [Szaktanácsadás] [Drónos Felmérés]
         (aktív tab)              (inaktív)        (inaktív)
```

---

#### **C. Árlista Táblázatok**

**LABORATÓRIUMI VIZSGÁLATOK**

**Talajvizsgálat**
```
┌────────────────────────────────┬──────────┐
│ Vizsgálat Megnevezése          │  Ár (Ft) │
├────────────────────────────────┼──────────┤
│ Alap talajvizsgálat            │   X.XXX  │
│ (pH, humusz, NPK, AL-K₂O, P₂O₅)│          │
├────────────────────────────────┼──────────┤
│ Komplex talajvizsgálat         │  XX.XXX  │
│ (alap + mikroelemek)           │          │
├────────────────────────────────┼──────────┤
│ Só tartalom vizsgálat          │   X.XXX  │
├────────────────────────────────┼──────────┤
│ Nehézfém csomag (8 elem)       │  XX.XXX  │
└────────────────────────────────┴──────────┘
```

**Növényvizsgálat**
```
┌────────────────────────────────┬──────────┐
│ Növényi tápelem csomag         │  XX.XXX  │
│ Kórokozó vizsgálat             │  XX.XXX  │
│ Növényi szövet elemzés         │  XX.XXX  │
└────────────────────────────────┴──────────┘
```

**Trágya/Vízvizsgálat**
```
┌────────────────────────────────┬──────────┐
│ Műtrágya NPK vizsgálat         │   X.XXX  │
│ Szerves trágya csomag          │  XX.XXX  │
│ Öntözővíz vizsgálat (komplex) │  XX.XXX  │
└────────────────────────────────┴──────────┘
```

---

**SZAKTANÁCSADÁS** (tab váltáskor megjelenik)

```
┌────────────────────────────────────────┬──────────┐
│ Szolgáltatás                           │  Ár (Ft) │
├────────────────────────────────────────┼──────────┤
│ Egyedi konzultáció (óradíj)           │  XX.XXX  │
├────────────────────────────────────────┼──────────┤
│ Éves szaktanácsadási szerződés         │          │
│ (hektáronként/év)                      │  XX.XXX  │
├────────────────────────────────────────┼──────────┤
│ Tápanyag-gazdálkodási terv készítése  │ XXX.XXX  │
│ (terület felmérés + labor + terv)     │          │
└────────────────────────────────────────┴──────────┘
```

**Megjegyzés:**
```
ℹ️ Kedvezményes csomagárakat biztosítunk több hektár vagy
   több évre szóló együttműködés esetén.
```

---

**DRÓNOS FELMÉRÉS** (tab váltáskor megjelenik)

```
┌────────────────────────────────────────┬──────────┐
│ Terület méret                          │Ár (Ft/ha)│
├────────────────────────────────────────┼──────────┤
│ 0-50 hektár                            │  X.XXX   │
├────────────────────────────────────────┼──────────┤
│ 51-200 hektár                          │  X.XXX   │
├────────────────────────────────────────┼──────────┤
│ 200+ hektár                            │  X.XXX   │
├────────────────────────────────────────┼──────────┤
│ Többszöri felmérés (évszakos csomag)  │ Egyedi   │
└────────────────────────────────────────┴──────────┘
```

**Tartalmazza:**
- ✓ RGB és multispektrális felvételek
- ✓ NDVI térkép generálás
- ✓ Részletes jelentés és javaslatok
- ✓ Digitális adatcsomag (shp, geotiff)

---

#### **D. Egyedi Ajánlat Banner**

```
┌───────────────────────────────────────────┐
│                                           │
│  "Egyedi igényei vannak? Kérjen          │
│   személyre szabott ajánlatot!"          │
│                                           │
│  [Primary Button: "Egyedi Ajánlat Kérése"]│
│                                           │
└───────────────────────────────────────────┘
```

---

#### **E. PDF Letöltés**

```
[Icon: Download]
📥 Teljes Árlista Letöltése PDF-ben
```

---

#### **F. Fizetési Feltételek & Jogi Info**

**Accordion / Collapsible Sections:**

**Fizetési módok:**
- Banki átutalás (előre / utólag számla ellenében)
- Készpénz (helyszíni átvételnél)

**Számlázás:**
- Áraink nettó árak, +ÁFA
- Számla kiállítása elektronikusan

**Érvényesség:**
- Árak tájékoztató jellegűek
- XX.XX.XXXX-ig érvényesek
- Egyedi ajánlatok 30 napig érvényesek

---

### 3.6 Ajánlatkérés Oldal (Request Quote)

#### **A. Hero Section**
```
H1: "Ajánlatkérés"
Lead: "Töltse ki az alábbi űrlapot, és kollégáink 24 órán belül
      felveszik Önnel a kapcsolatot."
```

---

#### **B. Űrlap Struktúra**

**Layout**: 2 oszlopos (Desktop) / 1 oszlop (Mobile)
**Validáció**: Real-time (hibaüzenetek azonnal)

```
┌─────────────────────────────────────────┐
│  🧾 AJÁNLATKÉRŐ ŰRLAP                   │
└─────────────────────────────────────────┘

[Bal oszlop]

  * Teljes Név
  [________________]

  * Email cím
  [________________]

  * Telefonszám
  [________________]

  Cég neve (opcionális)
  [________________]

  Gazdálkodási terület (hektár)
  [________________]


[Jobb oszlop]

  * Milyen szolgáltatás iránt érdeklődik?
  ☐ Laboratóriumi vizsgálat
  ☐ Szaktanácsadás
  ☐ Drónos felmérés

  (ha Labor)
  Mintákat szeretnék beküldeni:
  ○ Igen ○ Nem ○ Még nem tudom

  * Részletes kérés / Üzenet
  [____________________________]
  [                            ]
  [____________________________]


[Full width]

  ☐ Elfogadom az Adatvédelmi Tájékoztatót és
     hozzájárulok adataim kezeléséhez. [Link]

  [Primary Button: "Ajánlat Kérése"]
```

**Siker üzenet** (form submit után):
```
┌───────────────────────────────────────────┐
│  ✅ Köszönjük! Üzenetét megkaptuk.        │
│                                           │
│  Kollégáink 24 órán belül felvesszik      │
│  Önnel a kapcsolatot.                     │
│                                           │
│  [Vissza a főoldalra]                    │
└───────────────────────────────────────────┘
```

---

#### **C. Kapcsolati Információk**

**3 oszlopos grid (Desktop) / Stack (Mobile)**

```
┌──────────────────┬──────────────────┬──────────────────┐
│  📍 CÍM          │  ☎️ TELEFON      │  ✉️ EMAIL        │
│                  │                  │                  │
│  [Cég neve]      │  +36 XX XXX XX XX│  info@labor.hu   │
│  [Utca, hsz]     │                  │                  │
│  [Város, irsz]   │  Hívható:        │  Válaszidő:      │
│                  │  H-P 8-16h       │  24 órán belül   │
└──────────────────┴──────────────────┴──────────────────┘
```

---

#### **D. Térkép Integráció**

```
┌───────────────────────────────────────────┐
│                                           │
│       [Google Maps iframe]                │
│       Székhely megjelenítése              │
│       + útvonaltervezési link             │
│                                           │
└───────────────────────────────────────────┘
```

---

#### **E. Minta Beküldési Útmutató** (Accordion/Collapsible)

```
▼ Hogyan küldhetek laboratóriumi mintát?

  1. MINTAVÉTEL
     • Részletes mintavételi útmutató letöltése [PDF]
     • Videó útmutató [Link]

  2. CSOMAGOLÁS
     • Tiszta zacskó/edény
     • Címkézés: név, minta típus, terület

  3. BEKÜLDÉS
     • Postai cím: [...]
     • Személyes átvétel: H-P 8-16h között
     • Fontos: Jelezze előre a minta érkezését!

  [Link: Részletes útmutató megtekintése] → külön aloldal vagy PDF
```

---

#### **F. Munkaidő / Nyitvatartás**

```
📅 MUNKAIDŐ

Hétfő - Péntek:     08:00 - 16:00
Szombat - Vasárnap: Zárva

Laboratóriumi mintaátvétel:
Hétfő - Péntek:     08:00 - 14:00
```

---

### 3.7 Blog Oldal (Articles)

#### **A. Hero Section**
```
H1: "Blog & Szakcikkek"
Lead: "Hasznos információk, kutatási eredmények és gyakorlati
      tanácsok a modern mezőgazdaságról."
```

---

#### **B. Szűrés & Keresés**

```
┌───────────────────────────────────────────┐
│                                           │
│  🔍 [Keresés cikkekben...            ] [🔎]│
│                                           │
│  Kategóriák:                              │
│  [Összes] [Talaj] [Növény] [Technológia]  │
│  [Tanácsok] [Kutatás] [Esettanulmány]     │
│                                           │
└───────────────────────────────────────────┘
```

---

#### **C. Blogbejegyzés Lista** (Card Grid)

**Layout**: 3 oszlopos grid (Desktop) / 1 oszlop (Mobile)

**Kártya Sablon:**
```
┌─────────────────────────────┐
│   [Thumbnail kép 16:9]      │
│   [Kategória badge]         │
├─────────────────────────────┤
│ Blogbejegyzés Címe Maximum │
│ Két Sor Hosszan...          │
│                              │
│ Rövid excerpt/leírás        │
│ maximum 3 sor, ami          │
│ összefoglalja a cikk...     │
│                              │
│ 2024. Nov. 3. • 8 perc      │
│ [Szerző Név]                │
│                              │
│ [Tovább olvasom →]          │
└─────────────────────────────┘
```

---

#### **D. Kiemelt Cikk** (Hero Post - top of the page, opcionális)

```
┌───────────────────────────────────────────┐
│                                           │
│ [Bal: Nagy kép 60%]  [Jobb: Tartalom 40%]│
│                                           │
│ [Kategória: KIEMELT]                      │
│                                           │
│ H2: "Drónos Technológia Forradalmasítja  │
│      a Magyar Mezőgazdaságot"            │
│                                           │
│ Excerpt: Lorem ipsum dolor sit amet...   │
│                                           │
│ 2024. Okt. 28. • 12 perc olvasás         │
│                                           │
│ [Elolvasom →]                             │
│                                           │
└───────────────────────────────────────────┘
```

---

#### **E. Pagination**

```
            ← Előző    1  [2]  3  4  5    Következő →
```

---

#### **F. Newsletter Feliratkozás** (Sidebar vagy Footer widget)

```
┌───────────────────────────────────────────┐
│  📧 HÍRLEVÉL                              │
│                                           │
│  Iratkozzon fel, és kapjon hasznos        │
│  mezőgazdasági tippeket és frissítéseket! │
│                                           │
│  Email cím:                               │
│  [___________________________]            │
│                                           │
│  [Feliratkozom]                           │
│                                           │
│  ☐ Elfogadom az adatvédelmi szabályzatot │
└───────────────────────────────────────────┘
```

---

### 3.8 Blogbejegyzés Sablon (Single Post)

#### **A. Hero Section**
```
[Kategória Badge: pl. "TECHNOLÓGIA"]

H1: "Blogbejegyzés Címe: Hogyan Segít a Drón a..."

Szerző: [Név] • Dátum: 2024. Nov. 3. • Olvasási idő: 8 perc

[Social Share gombok: Facebook, Twitter/X, LinkedIn, Email]
```

---

#### **B. Címkép** (Featured Image)
```
┌───────────────────────────────────────────┐
│                                           │
│       [16:9 arányú nagy felbontású]       │
│       [kapcsolódó kép]                    │
│                                           │
└───────────────────────────────────────────┘
```

---

#### **C. Tartalomjegyzék** (Table of Contents - hosszabb cikkeknél)

```
📑 Tartalomjegyzék

• Bevezetés
• A probléma leírása
• Megoldás bemutatása
• Eredmények
• Következtetések
```

---

#### **D. Cikk Törzs**

**Layout**:
- Központi tartalom: 65% szélesség (max 800px)
- Jobb oldali sidebar: 30% (Desktop only)

**Tartalom elemek:**
- Címsorok (H2, H3)
- Bekezdések (optimális sor hossz: 60-80 karakter)
- Kép beágyazás (caption-nal)
- Idézetek (blockquote)
- Felsorolások (bullet, számozott)
- Kiemelések (bold, italic)
- Linkek
- Beágyazott videók (YouTube/Vimeo)

---

#### **E. Sidebar** (Desktop)

**Szerző info box:**
```
┌─────────────────────────────┐
│ [Szerző profilkép]          │
│                              │
│ Írta: Szerző Teljes Neve    │
│ Pozíció: Agrármérnök        │
│                              │
│ Rövid bio 2-3 mondatban...  │
│                              │
│ [LinkedIn ikon]             │
└─────────────────────────────┘
```

**Kapcsolódó cikkek:**
```
┌─────────────────────────────┐
│ KAPCSOLÓDÓ CIKKEK           │
├─────────────────────────────┤
│ [Mini kártya 1]             │
│ [Mini kártya 2]             │
│ [Mini kártya 3]             │
└─────────────────────────────┘
```

**CTA Box:**
```
┌─────────────────────────────┐
│ Kérdése van a cikkel        │
│ kapcsolatban?               │
│                              │
│ [Kapcsolatfelvétel]         │
└─────────────────────────────┘
```

---

#### **F. Lezárás**

**Címkék / Tags:**
```
🏷️ Címkék: #talajvizsgálat #drón #NDVI #precíziós-mezőgazdaság
```

**Megosztás (újra):**
```
Tetszett a cikk? Oszd meg!
[Facebook] [Twitter] [LinkedIn] [Email]
```

---

#### **G. Kapcsolódó Cikkek** (Full Width - 3 kártya)

```
┌──────────────┬──────────────┬──────────────┐
│ [Thumbnail]  │ [Thumbnail]  │ [Thumbnail]  │
│ Cím 1        │ Cím 2        │ Cím 3        │
│ [Tovább →]   │ [Tovább →]   │ [Tovább →]   │
└──────────────┴──────────────┴──────────────┘
```

---

#### **H. Kommentek** (Opcionális - későbbi fázis)

```
💬 Hozzászólások (X)

[Bejelentkezés szükséges] vagy [Disqus / Facebook Comments beágyazás]
```

---

### 3.9 Rólunk Oldal (About Us)

#### **A. Hero Section**
```
[Háttérkép: Csapat fotó mezőn vagy labor előtt]

H1: "Rólunk"
Lead: "Több mint XX éve szolgáljuk a magyar mezőgazdaságot
      tudományos alapokon és elkötelezett szakértelemmel."
```

---

#### **B. Cég Története** (Timeline vagy Narrative)

**Timeline Layout:**
```
           20XX - Alapítás
              |
              | Labor akkreditáció megszerzése
              |
           20XX - Drónos technológia bevezetés
              |
              | 5000 hektár elérése
              |
           20XX - Nemzetközi együttműködések
              |
            MOST
```

**VAGY Szöveges Narratíva:**
```
H2: "Történetünk"

[2-3 bekezdéses szöveg a cég alapításáról,
fejlődéséről, mérföldkövekről]

"Cégünk 20XX-ben alakult azzal a céllal, hogy..."
```

---

#### **C. Csapat Bemutatása**

**Layout**: Card grid 3-4 oszlop

**Csapattag Kártya:**
```
┌─────────────────────────────┐
│   [Profilkép - kör]         │
│                              │
│   Dr./Nagy Példa Név        │
│   Pozíció / Szakértelem     │
│                              │
│   Rövid szakmai bio         │
│   1-2 mondat...             │
│                              │
│   [LinkedIn ikon]           │
└─────────────────────────────┘
```

**Pozíció példák:**
- Laborvezető
- Akkreditált mintavevő
- Agrármérnök / Szaktanácsadó (Szőlő)
- Agrármérnök / Szaktanácsadó (Szántóföld)
- Drón pilot / Precíziós mezőgazdasági szakértő

---

#### **D. Akkreditációk & Tanúsítványok**

```
H2: "Akkreditációk és Tanúsítványok"

┌───────────────────────────────────────────┐
│                                           │
│ 🏅 NAH Akkreditáció                       │
│ Nemzeti Akkreditáló Hatóság               │
│ Licensz szám: NAH-X-XXXX/XXXX             │
│ Érvényes: 20XX.XX.XX - 20XX.XX.XX         │
│                                           │
│ [Tanúsítvány megtekintése PDF]           │
│                                           │
├───────────────────────────────────────────┤
│                                           │
│ 🌿 ISO 9001:2015                          │
│ Minőségirányítási Rendszer                │
│                                           │
│ [Tanúsítvány megtekintése PDF]           │
│                                           │
└───────────────────────────────────────────┘
```

---

#### **E. Referenciák / Ügyfél Vélemények**

**Layout**: Slider/Carousel vagy Grid

**Vélemény Kártya:**
```
┌─────────────────────────────┐
│ ⭐⭐⭐⭐⭐                    │
│                              │
│ "A laborjuk pontossága és   │
│  a szaktanácsadás            │
│  professzionalizmusa         │
│  nagyban hozzájárult..."     │
│                              │
│ - Kiss János                │
│   Gazdálkodó, 120 hektár    │
│   Szőlő & Gyümölcs          │
└─────────────────────────────┘
```

**Referencia logók:** (ha engedélyezett)
```
[Logo 1] [Logo 2] [Logo 3] [Logo 4]
Partnereink / Ügyfeleink
```

---

#### **F. Értékeink / Küldetésünk**

**3 oszlopos layout:**

```
┌──────────────┬──────────────┬──────────────┐
│ [Ikon]       │ [Ikon]       │ [Ikon]       │
│              │              │              │
│ PRECIZITÁS   │ MEGBÍZHATÓSÁG│ INNOVÁCIÓ    │
│              │              │              │
│ Tudományos   │ Akkreditált  │ Modern techno-│
│ pontosság    │ folyamatok   │ lógia alkal- │
│ minden       │ garantálják  │ mazása a     │
│ vizsgálatban │ a minőséget  │ mezőgazdaság-│
│              │              │ ban          │
└──────────────┴──────────────┴──────────────┘
```

---

#### **G. Képgaléria** (Munkánk pillanatképei)

**Masonry grid vagy Slider:**
- Labor munka fotók
- Szaktanácsadás helyszínen
- Drón repülés
- Csapat events
- Tanfolyamok / képzések

---

#### **H. CTA Section**
```
H3: "Csatlakozzon Elégedett Ügyfeleinkhez!"

[Primary Button: "Ajánlatot Kérek"]
```

---

### 3.10 Kapcsolat Oldal (Contact)

*(Részletesen lásd 3.6 Ajánlatkérés oldal - azonos struktúra, csak kisebb hangsúly az űrlapon, nagyobb a kontakt info-n)*

**Főbb elemek:**
- Kisebb űrlap (egyszerűsített)
- Nagy térkép
- Prominens kapcsolati adatok
- Nyitvatartás
- Social media linkek

---

## 4. Kétnyelvűség (HU / EN)

### 4.1 Implementáció

**URL struktúra:**
```
domain.com/         → Magyar (default)
domain.com/en/      → Angol
```

**VAGY:**
```
domain.com/hu/      → Magyar
domain.com/en/      → Angol
```

**Language Switcher:**
- Header jobb felső sarok
- Flag icon + szöveg: "HU | EN"
- Jelenlegi nyelv kiemelve (bold/underline)
- Kattintásra váltás ugyanazon oldal angol/magyar verziója között

### 4.2 Fordítandó Elemek

✅ **Minden tartalom:**
- Navigációs elemek
- Oldalak teljes szövege
- Gombok, CTA-k
- Form mezők, placeholder szövegek
- Footer
- Meta címek, leírások (SEO)
- Blog cikkek (opcionálisan: csak kiválasztott cikkek)

✅ **Blog kezelés:**
- Opció 1: Minden cikk kétnyelvű (több munka)
- Opció 2: Csak kiválasztott cikkek (egyszerűbb)
- Opció 3: Nyelvi szűrő (külön magyar és angol cikkek)

### 4.3 Technikai Megvalósítás (Next.js)

**Ajánlás: `next-intl` library**

```javascript
// Könyvtár struktúra
/messages
  /en.json
  /hu.json

// Példa fordítási fájl (hu.json)
{
  "nav": {
    "home": "Főoldal",
    "services": "Szolgáltatások",
    "pricing": "Árlista",
    ...
  },
  "hero": {
    "title": "Precíziós Mezőgazdaság Tudományos Alapokon",
    ...
  }
}
```

---

## 5. Funkcionális Követelmények

### 5.1 Kötelező Funkciók (MVP)

✅ **Reszponzív Design**
- Mobile, Tablet, Desktop optimalizálás
- Breakpoints: 320px, 768px, 1024px, 1440px+

✅ **Online Ajánlatkérés**
- Validált űrlapok (client & server-side)
- Email értesítés (ügyfél + admin)
- Spam védelem (reCAPTCHA v3 vagy Honeypot)
- GDPR compliance (adatvédelmi tájékoztató, beleegyezés)

✅ **Vizsgálati Árlista**
- Dinamikusan szerkeszthető (CMS)
- Táblázatos megjelenítés
- PDF export lehetőség

✅ **Blog/Szakcikkek**
- CMS integráció (Sanity, Strapi, vagy Contentful)
- Kategóriák, címkék
- Keresés funkció
- SEO optimalizálás (meta, Open Graph)

✅ **Kétnyelvűség (HU/EN)**
- URL-alapú routing
- Language switcher
- Minden tartalom fordítva

✅ **SEO Optimalizálás**
- Semantic HTML
- Meta tags (title, description, keywords)
- Open Graph / Twitter Cards
- Structured Data (JSON-LD) - Organization, LocalBusiness
- Sitemap.xml
- Robots.txt

✅ **Analytics**
- Google Analytics 4 integráció
- Cookie consent banner (GDPR)

✅ **Akadálymentesség (Accessibility)**
- WCAG 2.1 AA megfelelés
- Alt szövegek
- Keyboard navigation
- ARIA labels
- Színkontraszt ellenőrzés

---

### 5.2 Nice-to-Have Funkciók (V2)

🔲 **Ügyfél Portál** (későbbi fázis)
- Regisztráció / Bejelentkezés (NextAuth.js, Auth0)
- Vizsgálati eredmények megtekintése
- Dokumentumok letöltése
- Megrendelés történet
- Profil kezelés

🔲 **Online Fizetés**
- Stripe / Barion integráció
- Előre fizetés laborvizsgálatokhoz

🔲 **Élő Chat / Chatbot**
- Tawk.to vagy Intercom integráció
- Automatikus GYIK válaszok

🔲 **Newsletter**
- Mailchimp / SendGrid integráció
- Automatikus kampányok

🔲 **Interaktív Térkép**
- Lefedett területek megjelenítése
- Referencia projektek térképre helyezve

🔲 **Virtuális Drón Túra**
- 360° interaktív drónfelvétel bemutató

🔲 **Kalkulátor Tool**
- Tápanyag-számító
- Terület/ár becsüléhez

---

## 6. Technikai Stack & Architektúra

### 6.1 Frontend

**Core Framework:**
```
Next.js 14+ (App Router)
- React 18+
- TypeScript
- Server Components + Client Components
```

**Styling:**
```
Tailwind CSS 3.4+
- Shadcn/ui komponens könyvtár
- Custom design tokens (colors, spacing)
- CSS Modules (szükség esetén)
```

**Animációk:**
```
Framer Motion
- Scroll-triggered animations
- Page transitions
- Micro-interactions
```

**Form Kezelés:**
```
React Hook Form
- Zod schema validáció
- Error handling
- Async submit
```

**Kétnyelvűség:**
```
next-intl
- Server-side translations
- Type-safe
- Dynamic route handling
```

---

### 6.2 Backend / CMS

**Headless CMS:**
```
Sanity.io (Ajánlott)
- Real-time collaboration
- Custom schemas (Blog, Pricing, Services)
- Asset management (képek, PDF-ek)
- API integration (GraphQL / REST)
```

**Alternatívák:**
```
- Strapi (self-hosted)
- Contentful (cloud)
- Prismic
```

**Email Service:**
```
Resend (modern, developer-friendly)
- vagy SendGrid
- React Email templates
```

---

### 6.3 Hosting & Deployment

**Frontend Hosting:**
```
Vercel (Ajánlott - Next.js creators)
- Automatic deployments (Git integration)
- Edge Functions
- Image Optimization
- Analytics built-in
```

**Alternatíva:**
```
- Netlify
- AWS Amplify
- Cloudflare Pages
```

**CMS Hosting:**
```
- Sanity.io (cloud-hosted SaaS)
- Strapi (VPS: DigitalOcean, AWS)
```

**CDN:**
```
- Vercel CDN (built-in)
- Cloudflare (additional layer)
```

---

### 6.4 Egyéb Integrációk

**Maps:**
```
Google Maps JavaScript API
- Embed maps
- Location marker
- Directions link
```

**Analytics:**
```
Google Analytics 4
- next-google-analytics package
```

**Cookie Consent:**
```
@cookie-consent/next (vagy custom)
- GDPR compliant
```

**SEO:**
```
Next.js Metadata API (built-in)
- next-sitemap (sitemap generation)
```

**Image Optimization:**
```
Next.js Image component (built-in)
- Sharp library
- WebP/AVIF support
- Lazy loading
```

---

### 6.5 Fejlesztési Eszközök

**Package Manager:**
```
pnpm (gyors, hatékony) vagy npm
```

**Linting & Formatting:**
```
ESLint
Prettier
Husky (pre-commit hooks)
```

**Testing:** (opcionális MVP-ben)
```
Jest
React Testing Library
Playwright (E2E)
```

**Version Control:**
```
Git + GitHub/GitLab
- Branch strategy: main, develop, feature/*
```

---

## 7. UI/UX Best Practices

### 7.1 Mobil-Első Tervezés

📱 **Mobile Considerations:**
- Minimum touch target: 44x44px
- Egykezes használhatóság (fontos elemek az alsó 2/3-ban)
- Hamburger menü (mobilon)
- Stack layout (oszlopok egymás alá)
- Betűméret min. 16px (input zooming elkerülésére iOS-en)

🖥️ **Desktop Enhancements:**
- Multi-column layouts
- Hover effects
- Sidebar navigation
- Nagyobb vizuális elemek

---

### 7.2 Teljesítmény Optimalizálás

⚡ **Core Web Vitals célok:**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

**Technikák:**
- Next.js Image component (automatic optimization)
- Lazy loading (images, components)
- Code splitting (dynamic imports)
- Font optimization (next/font)
- CSS optimization (Tailwind purge)
- Static generation where possible (SSG > SSR)

---

### 7.3 Akadálymentesség (A11y)

♿ **WCAG 2.1 AA Checklist:**

✅ **Perceivable:**
- Alt text minden képen
- Színkontraszt min. 4.5:1 (text), 3:1 (UI)
- Tartalom nem csak színnel különböztetett meg
- Videókhoz feliratok

✅ **Operable:**
- Keyboard navigation (Tab, Enter, Esc, Arrows)
- Skip to main content link
- Focus indicators (látható outline)
- Nincs time-based action requirement

✅ **Understandable:**
- Világos nyelvezet
- Konzisztens navigáció
- Error messages érthetőek
- Form labels

✅ **Robust:**
- Semantic HTML (<nav>, <main>, <article>, <section>)
- ARIA labels where needed
- Valid HTML

**Tesztelés:**
- Lighthouse (Chrome DevTools)
- axe DevTools
- Screen reader testing (NVDA, JAWS, VoiceOver)

---

### 7.4 SEO Stratégia

🔍 **On-Page SEO:**

**Meta Tags:**
```html
<title>Akkreditált Agro-Laboratórium | Talaj, Növény, Drón</title>
<meta name="description" content="Laboratóriumi vizsgálatok..."/>
<meta name="keywords" content="talajvizsgálat, laborvizsgálat..."/>
```

**Open Graph (Social Media):**
```html
<meta property="og:title" content="..."/>
<meta property="og:description" content="..."/>
<meta property="og:image" content="..."/>
<meta property="og:url" content="..."/>
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cég Neve",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+36-XX-XXX-XXXX",
    "contactType": "customer service"
  }
}
```

**Sitemap.xml:**
- Automatikus generálás (next-sitemap)
- Prioritások beállítása

**Robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://domain.com/sitemap.xml
```

---

### 7.5 Felhasználói Élmény (UX)

🎯 **UX Principles:**

**Clarity (Világosság):**
- Egyértelmű call-to-actions
- Vizuális hierarchia (nagyság, szín, tér)
- Consistent terminology

**Efficiency (Hatékonyság):**
- Minimális kattintások a célhoz
- Előre kitöltött mezők (ahol lehetséges)
- Quick links

**Feedback (Visszajelzés):**
- Loading states (spinners, skeletons)
- Success/error messages
- Form validation feedback (real-time)

**Forgiveness (Megbocsátás):**
- Undo options
- Confirmation dialogs (kritikus műveleteknél)
- Auto-save (draft forms)

**Consistency (Konzisztencia):**
- UI patterns ismétlődnek
- Színhasználat következetes
- Interaction patterns (hover, click) egységesek

---

## 8. Tartalmi Irányelvek

### 8.1 Hangvétel (Tone of Voice)

**Characteristics:**
- **Professzionális**: Szakértelem, megbízhatóság
- **Megközelíthető**: Nem túl tudományos, közérthető
- **Segítőkész**: Problémamegoldó attitűd
- **Modern**: Innováció, technológia hangsúlyozása

**Példák:**

❌ **Kerülendő:**
"Laboratóriumunkban magas szintű analitikai metodikákkal végezzük a pedológiai vizsgálatokat."

✅ **Ajánlott:**
"Laboratóriumunkban modern eszközökkel vizsgáljuk a talajmintákat, hogy pontos képet kapjon földje állapotáról."

---

### 8.2 Tartalomtípusok

**Oktatóanyagok / How-to:**
- Mintavételi útmutatók
- "Hogyan értelmezzem a vizsgálati eredményeimet?"
- "5 jel, hogy talajának tápanyag-pótlásra van szüksége"

**Esettanulmányok (Case Studies):**
- "Hogyan növeltük 15%-kal egy szőlőültetvény hozamát?"
- Konkrét problémák és megoldások

**Kutatási Összefoglalók:**
- Tudományos publikációk közérthető összefoglalása
- "Új drón technológiák a precíziós mezőgazdaságban"

**Szezonális Tanácsok:**
- "Tavaszi talajvizsgálat checklist"
- "Őszi tápanyag-utánpótlás tervezése"

**Technológia Bemutatók:**
- "Hogyan működik az NDVI térképezés?"
- "Multispektrális kamerák a mezőgazdaságban"

---

### 8.3 SEO-Optimalizált Tartalom

**Blog Cím Formulák:**
```
[Szám] + [Melléknév] + [Kulcsszó] + [Ígéret]

Példák:
"7 Hatékony Módszer a Talaj pH Optimalizálására"
"Hogyan Választ ki a Legjobb Laboratóriumi Partnert? [Útmutató]"
"Drónos Növényvédelem: Teljes Kezdő Guide 2024-re"
```

**Kulcsszó Stratégia:**

**Fő kulcsszavak:**
- talajvizsgálat
- laborvizsgálat mezőgazdaság
- szaktanácsadás agro
- drónos felmérés
- tápanyag-gazdálkodás
- növényvizsgálat

**Long-tail kulcsszavak:**
- "akkreditált talajvizsgálat árak"
- "drón NDVI térkép szőlő"
- "tápanyag-gazdálkodási terv készítés"
- "öntözővíz laborvizsgálat"

---

## 9. Projekt Ütemterv & Mérföldkövek

### Fázis 1: Design & Tervezés (1-2 hét)
- [ ] Wireframe készítés (low-fidelity)
- [ ] Design mockup (high-fidelity) - Főoldal, 1 szolgáltatás oldal
- [ ] Design system véglegesítés (színek, betűk, komponensek)
- [ ] Tartalom gyűjtés (szövegek, képek)

### Fázis 2: Fejlesztés - Core (3-4 hét)
- [ ] Next.js projekt setup + tech stack
- [ ] Alap komponensek (Header, Footer, Button, Card, stb.)
- [ ] Főoldal implementáció
- [ ] Szolgáltatások oldalak (3 aloldal)
- [ ] Kétnyelvűség integráció (next-intl)

### Fázis 3: Fejlesztés - CMS & Dinamikus (2 hét)
- [ ] Sanity CMS setup + schemas
- [ ] Blog funkció implementáció
- [ ] Árlista dinamikus kezelés
- [ ] Form funkciók (ajánlatkérés, kapcsolat)
- [ ] Email integráció (Resend)

### Fázis 4: Tartalom & SEO (1-2 hét)
- [ ] Tartalom feltöltés (szövegek, képek)
- [ ] Blog cikkek (kezdeti 3-5 cikk)
- [ ] SEO optimalizálás (meta, structured data)
- [ ] Sitemap, robots.txt

### Fázis 5: Tesztelés & Launch (1 hét)
- [ ] Reszponzivitás tesztelés (minden eszköz)
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit (Lighthouse, axe)
- [ ] Performance optimization
- [ ] UAT (User Acceptance Testing) - ügyfél tesztelés
- [ ] Domain + hosting setup (DNS, SSL)
- [ ] Éles indítás (production deploy)

### Fázis 6: Post-Launch (folyamatos)
- [ ] Analytics monitoring (GA4)
- [ ] SEO monitoring (Google Search Console)
- [ ] Tartalomfrissítés (blog cikkek)
- [ ] Felhasználói visszajelzések gyűjtése
- [ ] Iteratív fejlesztések

**Teljes becsült időtartam: 8-11 hét (MVP)**

---

## 10. Későbbi Bővítési Lehetőségek

### V2 Funkciók (3-6 hónap múlva)

🔐 **Ügyfél Portál:**
- Bejelentkezési rendszer (NextAuth.js)
- Személyes dashboard
- Vizsgálati eredmények megtekintése (PDF letöltés)
- Korábbi megrendelések listája
- Dokumentum tár
- Értesítések (email + push)

**Architektúra:**
```
/app/(protected)
  /dashboard
  /results
  /orders
  /documents
  /profile
```

---

📊 **Admin Dashboard:**
- Ajánlatkérések kezelése
- CRM funkciók (ügyfél nyilvántartás)
- Statisztikák, reporting
- Árlista menedzsment
- Blog szerkesztés (extended)

---

💳 **Online Fizetés:**
- Stripe/Barion integráció
- Checkout flow
- Számla generálás automatikus
- Fizetési előzmények

---

🤖 **Chatbot / Élő Chat:**
- AI-powered chatbot (OpenAI API)
- Gyakori kérdések automatikus válaszolása
- Escalation emberi ügyfélszolgálathoz
- Integrációk: Tawk.to, Intercom, vagy custom

---

📱 **Mobil Alkalmazás:**
- Progressive Web App (PWA)
- Push notifications
- Offline mode (részleges)
- Kamera integráció (minta fotók)

---

🗺️ **Interaktív Térkép:**
- Lefedett területek megjelenítése
- Referencia projektek térképezése
- Közeli szolgáltatások jelzése

---

🧮 **Kalkulátor Eszközök:**
- Tápanyag-szükséglet kalkulátor
- Terület-ár kalkulátor (online árajánlat)
- ROI számító (megtérülés)

---

📧 **Marketing Automation:**
- Newsletter rendszer (Mailchimp/SendGrid)
- Automated email campaigns
- Lead nurturing sequences
- Szezonális emlékeztetők

---

## 11. Költségbecslés (Orientational)

### Design & UX
- Wireframe + Design mockup: X.XXX - XX.XXX Ft
- Design system dokumentáció: X.XXX - X.XXX Ft

### Fejlesztés (MVP)
- Frontend fejlesztés (Next.js, 7 oldal + blog): XXX.XXX - XXX.XXX Ft
- CMS integráció (Sanity): XX.XXX - XX.XXX Ft
- Kétnyelvűség: XX.XXX - XX.XXX Ft
- Form & Email integráció: XX.XXX - XX.XXX Ft
- SEO optimalizálás: XX.XXX - XX.XXX Ft

### Tartalom
- Szövegírás (copywriting): XX.XXX - XX.XXX Ft
- Fotók (stock vagy custom fotózás): XX.XXX - XXX.XXX Ft
- Videó (opcionális): XX.XXX - XXX.XXX Ft

### Hosting & Domain (éves)
- Domain (.hu/.com): X.XXX - X.XXX Ft/év
- Vercel hosting: Ingyenes (Hobby) - XX.XXX Ft/hó (Pro)
- Sanity CMS: Ingyenes (dev) - XX$ (Growth plan)
- Email service: XX-XX$/hó

### Folyamatos költségek
- Maintenance (karbantartás): XX.XXX Ft/hó
- Tartalom frissítés: XX.XXX Ft/blog cikk
- Analytics, monitoring: X.XXX - XX.XXX Ft/hó

**Teljes MVP költség: XXX.XXX - X.XXX.XXX Ft (becsült)**

---

## 12. Kockázatok & Megoldások

### Kockázat 1: Tartalom késése
**Megoldás:**
- Placeholder tartalom (Lorem Ipsum + stock photos)
- Agilis iterációk (folyamatos feltöltés)
- Tartalomgyűjtési határidők előre

### Kockázat 2: Technikai komplexitás
**Megoldás:**
- Proven tech stack (Next.js + Sanity)
- MVP scope szigorú betartása
- V2 funkciók későbbre halasztása

### Kockázat 3: Performance problémák
**Megoldás:**
- Képoptimalizálás automatizálása
- Lighthouse monitoring fejlesztés közben
- CDN használata

### Kockázat 4: Kétnyelvű tartalom menedzsment
**Megoldás:**
- CMS-ben strukturált fordítás kezelés
- Egyértelmű workflow (először HU, aztán EN)
- Professional translation szolgáltatás

---

## 13. Sikerkritériumok (KPI-k)

### Launch után (3 hónap)

**Forgalom:**
- [ ] 500+ egyedi látogató/hó
- [ ] 2+ perc átlagos oldalon töltött idő
- [ ] <50% bounce rate

**Konverzió:**
- [ ] 10+ ajánlatkérés/hó
- [ ] 5+ laborvizsgálat megrendelés/hó
- [ ] 3+ szaktanácsadás konzultáció/hó

**Technikai:**
- [ ] Google PageSpeed Score 90+ (mobile & desktop)
- [ ] 100% uptime (Vercel)
- [ ] 0 kritikus accessibility hiba

**SEO:**
- [ ] Top 10 pozíció 3+ kulcsszóra (Google.hu)
- [ ] 50+ backlink
- [ ] 5+ blog cikk indexelve

---

## 14. Következő Lépések

### Azonnali Akciók (1-2 nap)
1. ✅ Tervezési dokumentáció áttekintése (ez a fájl)
2. ✅ Feedback gyűjtése (módosítások, kiegészítések)
3. [ ] Döntés: tech stack véglegesítés
4. [ ] Domain név kiválasztás + regisztráció
5. [ ] Hosting account setup (Vercel)

### Rövid Távú (1-2 hét)
6. [ ] Wireframe készítés (Figma/Adobe XD)
7. [ ] Branding workshop (logo, színek véglegesítés)
8. [ ] Tartalom audit (meglévő anyagok összegyűjtése)
9. [ ] Fotó/videó anyag tervezés

### Közép Távú (3-4 hét)
10. [ ] Design mockup jóváhagyás
11. [ ] Fejlesztés kickoff
12. [ ] CMS schema tervezés
13. [ ] Tartalom írás kezdése

---

## 15. Kapcsolatok & Erőforrások

### Design Inspirációk
- [Dribbble](https://dribbble.com) - "agriculture website", "lab website"
- [Awwwards](https://www.awwwards.com) - Award-winning designs
- [Behance](https://www.behance.net) - Portfolio platformok

### Tech Dokumentációk
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Sanity.io](https://www.sanity.io/docs)
- [Shadcn/ui](https://ui.shadcn.com/)

### Stock Fotók (Mezőgazdaság)
- [Unsplash](https://unsplash.com) - Ingyenes, high-quality
- [Pexels](https://www.pexels.com)
- [iStock](https://www.istockphoto.com) - Prémium

### SEO Eszközök
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Ahrefs](https://ahrefs.com) (keyword research)
- [SEMrush](https://www.semrush.com)

---

## 16. Verzió Történet

| Verzió | Dátum       | Változások                          |
|--------|-------------|--------------------------------------|
| 1.0    | 2024-11-03  | Kezdeti terv elkészítése            |

---

## Összefoglalás

Ez a dokumentum egy **átfogó design és fejlesztési tervet** tartalmaz egy akkreditált agro-laboratórium weboldal számára. A terv magába foglalja:

✅ Teljes oldal struktúrát (sitemap)
✅ Részletes design rendszert (színek, tipográfia, komponensek)
✅ 7+ oldal pontos layout és tartalom specifikációját
✅ Kétnyelvű (HU/EN) implementációs stratégiát
✅ Modern tech stack javaslatot (Next.js + Tailwind + Sanity)
✅ SEO, accessibility, és performance best practices-t
✅ Projekt ütemtervet és mérföldköveket
✅ Költségbecslést és kockázat menedzsmentet

**A dokumentum célja:**
- Közös vízió kialakítása ügyfél és fejlesztő között
- Fejlesztési roadmap biztosítása
- Scope creep elkerülése (világos MVP)
- Bővíthetőségi lehetőségek előkészítése (V2 funkciók)

**Következő lépés:** Feedback gyűjtése és wireframe/mockup fázis indítása.

---

**Készítette:** Claude Code
**Dátum:** 2024. November 3.
**Projekt:** Akkreditált Agro-Laboratórium Weboldal
**Verzió:** 1.0

---

*Ez a dokumentum élő dokumentum - frissíteni kell a projekt során felmerülő változtatásokkal.*
