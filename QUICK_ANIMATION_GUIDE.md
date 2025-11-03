# ⚡ Gyors Animáció Implementációs Útmutató

## 🎯 Cél
Minden oldal animálása ScrollReveal-lel 10/10 UX minőségért.

## ✅ Már Kész Oldalak
1. ✅ Főoldal (`app/page.tsx`)
2. ✅ Szaktanácsadás (`app/szolgaltatasok/szaktanacsadas/page.tsx`)

## 📋 Implementálandó Oldalak

### **Szolgáltatások:**
- [ ] Laboratorium (`app/szolgaltatasok/laboratorium/page.tsx`)
- [ ] Drón (`app/szolgaltatasok/dron/page.tsx`)
- [ ] Szolgáltatások főoldal (`app/szolgaltatasok/page.tsx`)

### **Egyéb:**
- [ ] Árlista (`app/arlista/page.tsx`)
- [ ] Rólunk (`app/rolunk/page.tsx`)
- [ ] Kapcsolat (`app/kapcsolat/page.tsx`)
- [ ] Ajánlatkérés (`app/ajanlatkeres/page.tsx`)

---

## 🔧 Lépésenkénti Útmutató

### **1. Import Hozzáadása**

```tsx
// Fájl tetején, más importok után
import ScrollReveal from '@/components/ScrollReveal'
```

### **2. Header/Title Section Animálása**

**Előtte:**
```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl font-heading font-bold mb-4">
    Cím
  </h2>
  <p className="text-lg text-neutral-mediumgray">
    Leírás
  </p>
</div>
```

**Utána:**
```tsx
<ScrollReveal>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-heading font-bold mb-4">
      Cím
    </h2>
    <p className="text-lg text-neutral-mediumgray">
      Leírás
    </p>
  </div>
</ScrollReveal>
```

### **3. Card Grid Animálása (Stagger Effect)**

**Előtte:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div key={index} className="card">
      {/* tartalom */}
    </div>
  ))}
</div>
```

**Utána:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <ScrollReveal key={index} delay={Math.min(index * 0.1, 0.3)}>
      <div className="card">
        {/* tartalom */}
      </div>
    </ScrollReveal>
  ))}
</div>
```

**Fontos:** 
- `key` prop a ScrollReveal-re megy, NEM a div-re!
- `delay={Math.min(index * 0.1, 0.3)}` - max 0.3s delay cap

### **4. Split Layout Animálása**

**Előtte:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div>
    {/* Bal oldal */}
  </div>
  <div>
    {/* Jobb oldal */}
  </div>
</div>
```

**Utána:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <ScrollReveal>
    <div>
      {/* Bal oldal */}
    </div>
  </ScrollReveal>
  
  <ScrollReveal delay={0.2} direction="right">
    <div>
      {/* Jobb oldal */}
    </div>
  </ScrollReveal>
</div>
```

### **5. CTA Section Animálása**

**Előtte:**
```tsx
<div className="text-center">
  <h3>Call to Action</h3>
  <p>Leírás</p>
  <div className="flex gap-4 justify-center">
    <Link className="btn-primary">Gomb 1</Link>
    <Link className="btn-secondary">Gomb 2</Link>
  </div>
</div>
```

**Utána:**
```tsx
<ScrollReveal>
  <div className="text-center">
    <h3>Call to Action</h3>
    <p>Leírás</p>
    <div className="flex gap-4 justify-center">
      <Link className="btn-primary">Gomb 1</Link>
      <Link className="btn-secondary">Gomb 2</Link>
    </div>
  </div>
</ScrollReveal>
```

---

## ⚠️ Gyakori Hibák

### **Hiba 1: Rossz key elhelyezés**

❌ **Rossz:**
```tsx
<ScrollReveal delay={index * 0.1}>
  <div key={index} className="card">
```

✅ **Jó:**
```tsx
<ScrollReveal key={index} delay={Math.min(index * 0.1, 0.3)}>
  <div className="card">
```

### **Hiba 2: Nincs delay cap**

❌ **Rossz:**
```tsx
<ScrollReveal delay={index * 0.1}>
```

✅ **Jó:**
```tsx
<ScrollReveal delay={Math.min(index * 0.1, 0.3)}>
```

### **Hiba 3: Dupla ScrollReveal**

❌ **Rossz:**
```tsx
<ScrollReveal>
  <div className="container">
    <ScrollReveal>
      <h2>Cím</h2>
    </ScrollReveal>
  </div>
</ScrollReveal>
```

✅ **Jó:**
```tsx
<div className="container">
  <ScrollReveal>
    <h2>Cím</h2>
  </ScrollReveal>
</div>
```

### **Hiba 4: ScrollReveal a container-en kívül**

❌ **Rossz:**
```tsx
<section>
  <ScrollReveal>
    <div className="container-custom">
```

✅ **Jó:**
```tsx
<section>
  <div className="container-custom">
    <ScrollReveal>
```

---

## 📝 Oldal-specifikus Sablonok

### **Szolgáltatás Oldal Template**

```tsx
import ScrollReveal from '@/components/ScrollReveal'

export default function ServicePage() {
  return (
    <>
      {/* Hero - NEM kell animálni, mert azonnal látszik */}
      <section className="hero">
        ...
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2>Features</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.1, 0.3)}>
                <div className="card">{feature}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container-custom">
          <ScrollReveal>
            <h2>Hogyan Működik?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-12">
            <ScrollReveal>
              <div>Bal oldal</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <div>Jobb oldal</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center">
              <h3>CTA</h3>
              <Link className="btn-primary">Action</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
```

---

## ✅ Checklist Minden Oldalra

- [ ] `import ScrollReveal from '@/components/ScrollReveal'` hozzáadva
- [ ] Header/Title section-ök animálva
- [ ] Card grid-ek stagger effect-tel
- [ ] Split layout-ok bal/jobb animációval
- [ ] CTA section animálva
- [ ] Delay cap ellenőrizve (max 0.3s)
- [ ] Key prop-ok helyesen
- [ ] Tesztelve böngészőben

---

## 🚀 Gyors Implementáció

**Becsült idő oldalanként:** 5-10 perc

**Teljes idő (7 oldal):** 35-70 perc

**Lépések:**
1. Nyisd meg az oldalt
2. Add hozzá az importot
3. Keresd meg a section-öket
4. Wrap-eld ScrollReveal-be a sablonok szerint
5. Teszteld
6. Következő oldal

---

## 💡 Tippek

- **Gyors keresés:** `Ctrl+F` → `section className`
- **Gyors wrap:** Jelöld ki a div-et → wrap ScrollReveal-be
- **Tesztelés:** Scroll végig az oldalon, nézd az animációkat
- **Delay:** Csak card grid-eknél használj, máshol 0
- **Direction:** Csak split layout-nál használd (left/right)

---

## 🎯 Eredmény

**Minden oldal animálása után:**
- ✅ 10/10 UX minőség
- ✅ Egységes animációk
- ✅ Professzionális megjelenés
- ✅ Accessibility support (már implementálva)
- ✅ Delay cap (már implementálva)

**Kész vagy! 🎉**
