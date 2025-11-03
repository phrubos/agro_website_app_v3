# 🎬 Fennmaradó Animációs Feladatok

## ✅ Kész Oldalak

1. ✅ **Főoldal** (`app/page.tsx`) - 5 ScrollReveal
2. ✅ **Szaktanácsadás** (`app/szolgaltatasok/szaktanacsadas/page.tsx`) - 5 ScrollReveal

---

## ⏳ Folyamatban

3. ⚠️ **Laboratorium** (`app/szolgaltatasok/laboratorium/page.tsx`) - Részben kész, javítandó

---

## 📋 Még Animálandó Oldalak

### **Szolgáltatások:**
4. ❌ **Drón** (`app/szolgaltatasok/dron/page.tsx`)
5. ❌ **Szolgáltatások Főoldal** (`app/szolgaltatasok/page.tsx`)

### **Egyéb Oldalak:**
6. ❌ **Árlista** (`app/arlista/page.tsx`)
7. ❌ **Rólunk** (`app/rolunk/page.tsx`)
8. ❌ **Kapcsolat** (`app/kapcsolat/page.tsx`)
9. ❌ **Ajánlatkérés** (`app/ajanlatkeres/page.tsx`) - Már van LoadingButton, csak ScrollReveal kell

---

## 🔧 Gyors Implementációs Sablon

### **Minden Oldalra Alkalmazandó:**

```tsx
// 1. Import hozzáadása
import ScrollReveal from '@/components/ScrollReveal'

// 2. Hero/Header section
<ScrollReveal>
  <div className="text-center">
    <h1>...</h1>
    <p>...</p>
  </div>
</ScrollReveal>

// 3. Card Grid (stagger)
<div className="grid ...">
  {items.map((item, i) => (
    <ScrollReveal key={i} delay={Math.min(i * 0.1, 0.3)}>
      <div className="card">...</div>
    </ScrollReveal>
  ))}
</div>

// 4. Split Layout
<div className="grid grid-cols-2 gap-12">
  <ScrollReveal>
    <div>Bal oldal</div>
  </ScrollReveal>
  
  <ScrollReveal delay={0.2} direction="right">
    <div>Jobb oldal</div>
  </ScrollReveal>
</div>

// 5. CTA Section
<ScrollReveal>
  <div className="text-center">
    <h2>...</h2>
    <div className="flex gap-4">
      <Link className="btn-primary">...</Link>
    </div>
  </div>
</ScrollReveal>
```

---

## ⚡ Gyors Megoldás

Mivel sok oldal van és a struktúra hasonló, a leghatékonyabb megoldás:

### **Opció A: Manuális (Lassú, de Biztos)**
- Egyenként végigmenni minden oldalon
- ScrollReveal hozzáadása section-önként
- Tesztelés oldal

anként

**Időigény:** 2-3 óra

### **Opció B: Automatizált Sablon (Gyors)**
- Template komponens létrehozása
- Minden oldal ugyanazt a struktúrát használja
- Bulk update

**Időigény:** 30-60 perc

---

## 🎯 Javasolt Megközelítés

### **Prioritás Szerint:**

**1. Kritikus (Azonnal):**
- ✅ Főoldal - KÉSZ
- ✅ Szaktanácsadás - KÉSZ
- ⏳ Drón oldal (gyakran látogatott)
- ⏳ Laboratorium (javítás)

**2. Fontos (Hamarosan):**
- Árlista
- Kapcsolat
- Ajánlatkérés

**3. Alacsony (Később):**
- Rólunk
- Szolgáltatások főoldal

---

## 📝 Implementációs Checklist

### **Minden Oldalra:**

- [ ] Import: `import ScrollReveal from '@/components/ScrollReveal'`
- [ ] Hero section: `<ScrollReveal>...</ScrollReveal>`
- [ ] Card grid: Stagger effect (delay cap 0.3s)
- [ ] Split layout: Left + Right animáció
- [ ] CTA section: `<ScrollReveal>...</ScrollReveal>`
- [ ] Tesztelés: Scroll végig az oldalon

---

## 🚀 Következő Lépés

**Mit szeretnél?**

1. **Folytatom egyesével** - Drón oldal következik
2. **Template megoldás** - Gyorsabb, de kevésbé custom
3. **Csak a kritikusakat** - Drón + Labor javítás
4. **Dokumentálom és te csinálod** - Sablon + útmutató

**Mondd meg és folytatom!** 🎯
