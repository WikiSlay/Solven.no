# 🚀 Slik deployer du Solven.no til Vercel

## Metode 1: Via GitHub (Anbefalt)

### Steg 1: Last opp til GitHub
1. Gå til https://github.com/new
2. Opprett et nytt repository (f.eks. "solven-solutions")
3. Last ned alle filene fra dette Replit-prosjektet
4. Last dem opp til GitHub-repository

### Steg 2: Koble til Vercel
1. Gå til https://vercel.com/signup
2. Logg inn med GitHub-kontoen din
3. Klikk **"Add New Project"**
4. Velg ditt GitHub repository (solven-solutions)
5. Klikk **"Deploy"**

**Det er alt!** Vercel bygger og deployer automatisk.

---

## Metode 2: Via Vercel CLI (Raskere)

### Steg 1: Installer Vercel CLI
```bash
npm i -g vercel
```

### Steg 2: Deploy fra Replit
```bash
vercel
```

Følg instruksjonene i terminalen.

---

## 🌐 Sett opp Custom Domain (www.solven.no)

Etter deployment:

1. Gå til Vercel Dashboard
2. Velg ditt prosjekt (solven-solutions)
3. Klikk **"Settings"** → **"Domains"**
4. Legg til **www.solven.no**
5. Vercel gir deg DNS-records
6. Legg inn DNS-records hos din domene-registrar:
   - **A Record**: `76.76.21.21` (eller den Vercel gir deg)
   - **CNAME**: `cname.vercel-dns.com`
7. Vent 5-60 minutter for DNS propagation

---

## 📧 Miljøvariabler (Environment Variables)

Legg til i Vercel Dashboard → Settings → Environment Variables:

- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (valgfritt)
- `DEMO_WIDGET_ENABLED`: `false` (eller `true` for demo-widget)
- `SESSION_SECRET`: Genereres automatisk

---

## ✅ Resultat

Etter deployment får du:
- ✅ Live nettside på www.solven.no
- ✅ Fungerende kontaktskjema (sender e-post)
- ✅ Automatisk HTTPS/SSL
- ✅ Automatisk redeploy ved endringer (hvis via GitHub)
- ✅ Gratis hosting (Vercel Hobby plan)

---

## 🔄 Oppdatere siden senere

**Via GitHub:**
- Bare push endringer til GitHub
- Vercel deployer automatisk

**Via CLI:**
```bash
vercel --prod
```

---

## 📞 Trenger hjelp?
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
