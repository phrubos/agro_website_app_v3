# Resend API Beállítási Útmutató

## 🚀 Gyors Beállítás (5 perc)

### 1. Resend Fiók Létrehozása

1. Látogass el: **https://resend.com**
2. Kattints a **"Sign Up"** gombra
3. Regisztrálj GitHub vagy email címmel
4. Erősítsd meg az email címedet

### 2. API Kulcs Generálása

1. Jelentkezz be a Resend dashboard-ba: **https://resend.com/api-keys**
2. Kattints a **"Create API Key"** gombra
3. Add meg a kulcs nevét: `AgroLab Website`
4. Válaszd ki a jogosultságokat: **"Full Access"** vagy **"Sending Access"**
5. Kattints a **"Create"** gombra
6. **FONTOS:** Másold ki az API kulcsot azonnal! (Később nem látható)

### 3. API Kulcs Beállítása

Nyisd meg a `.env.local` fájlt a projekt gyökérkönyvtárában:

```bash
# Ha nincs .env.local fájl, hozd létre:
cp .env.example .env.local
```

Add hozzá a Resend API kulcsot:

```env
RESEND_API_KEY=re_123456789abcdefghijklmnop
```

### 4. Email Cím Beállítása (Opcionális)

Alapértelmezetten a `route.ts` fájlban:
- **From:** `onboarding@resend.dev` (Resend teszt cím)
- **To:** `peter.hrubos.szte@gmail.com`

#### Saját Domain Használata (Production)

1. Resend Dashboard → **Domains**
2. Kattints **"Add Domain"**
3. Add meg a domain-t: `agrolab.hu`
4. Állítsd be a DNS rekordokat (SPF, DKIM, DMARC)
5. Várj a verifikációra (~10 perc)

Majd frissítsd a `app/api/send-email/route.ts` fájlt:

```typescript
const data = await resend.emails.send({
  from: 'Ajánlatkérés <noreply@agrolab.hu>', // Saját domain
  to: ['info@agrolab.hu'], // Cél email
  subject: `Új ajánlatkérés - ${name}`,
  html: emailHtml,
  replyTo: email,
})
```

## 🧪 Tesztelés

### 1. Indítsd el a dev szervert

```bash
npm run dev
```

### 2. Nyisd meg az ajánlatkérés oldalt

```
http://localhost:3000/ajanlatkeres
```

### 3. Töltsd ki az űrlapot

- Név: Teszt János
- Email: test@example.com
- Telefon: +36 30 123 4567
- Üzenet: Ez egy teszt üzenet

### 4. Ellenőrizd a konzolt

Ha nincs API kulcs:
```
⚠️ TEST MODE - No RESEND_API_KEY found
📧 Email would be sent to: peter.hrubos.szte@gmail.com
```

Ha van API kulcs:
```
Email sent successfully: { id: 're_abc123...' }
```

### 5. Ellenőrizd az emailt

- Nézd meg a cél email fiókot
- Ellenőrizd a spam mappát is

## 📊 Resend Dashboard

### Email Küldések Nyomon Követése

1. Látogass el: **https://resend.com/emails**
2. Láthatod az összes küldött emailt:
   - Státusz (Sent, Delivered, Bounced)
   - Küldés ideje
   - Címzett
   - Tárgy

### Napi Limit (Ingyenes Csomag)

- **100 email / nap**
- **3,000 email / hónap**
- Ha több kell → Upgrade fizetős csomagra

## 🔧 Hibaelhárítás

### "Invalid API Key" hiba

```bash
# Ellenőrizd az API kulcsot
echo $RESEND_API_KEY  # Linux/Mac
echo %RESEND_API_KEY% # Windows

# Újraindítás szükséges .env.local módosítás után
npm run dev
```

### Email nem érkezik meg

1. **Ellenőrizd a Resend Dashboard-ot**
   - Van-e "Bounced" státusz?
   - Van-e hibaüzenet?

2. **Spam mappa**
   - Első emailek gyakran spam-be kerülnek
   - Jelöld meg "Not Spam"-ként

3. **Domain verifikáció**
   - Teszt domain (`onboarding@resend.dev`) működik
   - Saját domain-hez DNS beállítás kell

### "Rate Limit Exceeded"

```
Error: You've exceeded the rate limit
```

**Megoldás:**
- Várj 1 percet
- Vagy upgrade fizetős csomagra

## 🎯 Production Checklist

- [ ] Resend API kulcs hozzáadva `.env.local`-hoz
- [ ] Saját domain hozzáadva és verifikálva
- [ ] `from` email cím frissítve (`route.ts`)
- [ ] `to` email cím frissítve (céges email)
- [ ] Email template tesztelve
- [ ] Spam teszt elvégezve
- [ ] Rate limit figyelése beállítva

## 📚 További Információk

- **Resend Dokumentáció:** https://resend.com/docs
- **Next.js Integráció:** https://resend.com/docs/send-with-nextjs
- **Email Templates:** https://resend.com/docs/api-reference/emails/send-email

## 💡 Tippek

### Email Template Testreszabása

A `route.ts` fájlban módosíthatod az email HTML-t:
- Színek (jelenleg: `#2D5016` zöld)
- Logo hozzáadása
- Formázás

### Automatikus Válasz Email

Küldhetsz automatikus visszaigazolást a felhasználónak:

```typescript
// Második email a felhasználónak
await resend.emails.send({
  from: 'AgroLab <noreply@agrolab.hu>',
  to: [email], // Felhasználó emailje
  subject: 'Köszönjük az ajánlatkérést!',
  html: `
    <h2>Kedves ${name}!</h2>
    <p>Köszönjük az ajánlatkérését. Kollégáink 24 órán belül felveszik Önnel a kapcsolatot.</p>
  `
})
```

### Webhook Beállítása

Értesülj az email eseményekről (delivered, bounced, opened):

1. Resend Dashboard → **Webhooks**
2. Add meg az endpoint URL-t: `https://agrolab.hu/api/webhook/email`
3. Válaszd ki az eseményeket

## 🔐 Biztonság

- ⚠️ **SOHA ne commitold** az API kulcsot Git-be
- ✅ `.env.local` a `.gitignore`-ban van
- ✅ API kulcs csak szerver oldalon használható
- ✅ Környezeti változó ellenőrzése: `process.env.RESEND_API_KEY`

---

**Kérdés van?** Nézd meg a Resend dokumentációt vagy írj a support-nak.
