# Email Beállítások

## ⚠️ FONTOS: Resend API Kulcs Szükséges!

Az email küldés most **Resend** szolgáltatást használ. Az automatikus működéshez szükséges egy API kulcs.

**Email cím:** `peter.hrubos.szte@gmail.com`

---

## 🚀 Gyors Beállítás (5 perc)

### 1. Regisztráció Resend-re

1. Menj ide: **https://resend.com**
2. Kattints a **"Sign Up"** gombra
3. Regisztrálj (GitHub vagy email)
4. Ingyenes: **100 email/nap** korlát nélkül

### 2. API Kulcs Megszerzése

1. Bejelentkezés után menj az **API Keys** menüpontba
2. Kattints a **"Create API Key"** gombra
3. Adj neki egy nevet (pl: "AgroLab Website")
4. Másold ki a kulcsot (pl: `re_123abc456def...`)

### 3. .env.local Fájl Létrehozása

Hozz létre egy `.env.local` fájlt a projekt gyökerében:

```bash
# .env.local
RESEND_API_KEY=re_YOUR_ACTUAL_API_KEY_HERE
```

**FONTOS:** Cseréld ki a `re_YOUR_ACTUAL_API_KEY_HERE` részt a valódi API kulcsodra!

### 4. Szerver Újraindítása

```bash
# Állítsd le a szervert (Ctrl+C)
# Indítsd újra
npm run dev
```

### 5. Tesztelés

1. Menj ide: http://localhost:3000/ajanlatkeres
2. Töltsd ki az űrlapot
3. Kattints "Ajánlat Kérése" gombra
4. Ellenőrizd a **peter.hrubos.szte@gmail.com** postafiókot!

---

## ✅ Kész! Most már automatikusan mennek az emailek!

### Opció 2: SendGrid

1. Regisztrálj: https://sendgrid.com (ingyenes 100 email/nap)
2. Szerezz API kulcsot
3. Telepítsd: `npm install @sendgrid/mail`
4. Hasonló konfiguráció mint Resend

### Opció 3: Gmail SMTP (Jelenlegi nodemailer)

1. Engedélyezd a 2FA-t a Google fiókodban
2. Generálj App Password-öt: https://myaccount.google.com/apppasswords
3. Hozz létre `.env.local` fájlt:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-16-digit-app-password
   ```
4. Az `app/api/send-email/route.ts` már készen áll erre

---

## Tesztelés

1. Töltsd ki az űrlapot: http://localhost:3000/ajanlatkeres
2. Kattints "Ajánlat Kérése" gombra
3. Megnyílik az email kliens az előre kitöltött üzenettel
4. Ellenőrizd a konzolt (F12) - ott látod a beküldött adatokat

---

## Éles Használatra

**Ajánlott:** Resend vagy SendGrid használata
- Automatikus email küldés
- Megbízható
- Ingyenes kezdőknek
- Egyszerű beállítás
