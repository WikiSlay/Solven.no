# Solven Solutions AS - AI-kundeservice

En profesjonell, konverteringsfokusert nettside for Solven Solutions AS med Apple-inspirert scrollopplevelse, sticky seksjoner og premium design.

## Teknologi

- **Next.js 14** med App Router
- **TypeScript** for type-sikkerhet
- **Tailwind CSS** for styling med custom utilities
- **Framer Motion** for animasjoner og parallax-effekter
- **Lucide React** for ikoner

## Funksjoner

✅ Sticky navigasjon med smooth scroll  
✅ Hero-seksjon med parallax-effekt og animerte KPI-kort  
✅ Sticky scrollytelling-paneler for leveransereisen  
✅ Tre pakker med tydelig pris-disclaimer  
✅ FAQ med smooth accordion-animasjoner  
✅ Kontaktskjema med validering  
✅ Mock AI chat-widget (aktiveres med DEMO_WIDGET_ENABLED=true)  
✅ Exit-intent sticky CTA  
✅ Google Analytics 4 integrasjon med Do Not Track respekt  
✅ Case-stripe med før/etter KPI-tall  
✅ Trust badges for tillit  
✅ SEO-optimalisert med meta tags, Open Graph og Schema.org  
✅ Responsivt design (mobile-first → widescreen)  

## Kom i gang

### Kjør lokalt

1. **Installer avhengigheter:**
   ```bash
   npm install
   ```

2. **Opprett `.env.local` fil** (valgfritt):
   ```bash
   cp .env.local.example .env.local
   ```

3. **Start utviklingsserver:**
   ```bash
   npm run dev
   ```

4. **Åpne nettleseren:**
   - Gå til `http://localhost:3000`

### Miljøvariabler

Opprett en `.env.local` fil i rotmappen med følgende variabler:

```env
# Google Analytics 4 Measurement ID (valgfritt)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Aktiver AI-demo widget (standard: false)
DEMO_WIDGET_ENABLED=false
```

## Deploy til Vercel

### Automatisk deploy

1. **Push til GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/solven-solutions.git
   git push -u origin main
   ```

2. **Importer til Vercel:**
   - Gå til [vercel.com](https://vercel.com)
   - Klikk "New Project"
   - Importer ditt GitHub repository
   - Vercel oppdager automatisk Next.js og konfigurerer build-innstillinger

3. **Konfigurer miljøvariabler i Vercel:**
   - I Vercel-prosjektinnstillinger, gå til "Environment Variables"
   - Legg til `NEXT_PUBLIC_GA_ID` hvis du bruker Google Analytics
   - Legg til `DEMO_WIDGET_ENABLED=true` hvis du vil aktivere chat-widgeten

### Manuell deploy

```bash
npm run build
```

Deploy `./out` mappen til din hosting-leverandør.

## Prosjektstruktur

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API-route for kontaktskjema
│   ├── globals.css               # Global CSS med Tailwind utilities
│   ├── layout.tsx                # Root layout med SEO og Analytics
│   └── page.tsx                  # Hovedside
├── components/
│   ├── CaseStripe.tsx            # Case-studier med før/etter tall
│   ├── ChatWidget.tsx            # Mock AI chat-widget
│   ├── Contact.tsx               # Kontaktskjema
│   ├── ExitIntentCTA.tsx         # Sticky exit-intent CTA
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Sticky navigasjon
│   ├── Hero.tsx                  # Hero-seksjon med parallax
│   ├── Journey.tsx               # Leveransereise sticky panels
│   ├── KPICounter.tsx            # Animert KPI-teller
│   ├── Packages.tsx              # Pakker med prising
│   ├── Security.tsx              # Sikkerhet og compliance
│   ├── TrustBadges.tsx           # Trust indicators
│   └── WhySolven.tsx             # Hvorfor Solven-seksjon
├── lib/
│   └── config.ts                 # Sentralisert konfigurasjon
└── public/
    └── favicon.svg               # Favicon
```

## Tilpasninger

### Endre innhold

Redigér `lib/config.ts` for å endre:
- Firmainfo (navn, adresse, telefon, e-post)
- CTA-tekster
- Hero-tekster
- Funksjoner (demo widget, analytics)

### Endre farger

Redigér `tailwind.config.ts` for å tilpasse fargepalett:
```typescript
colors: {
  brand: {
    orange: '#ff6600',  // Hovedfarge
  },
}
```

### Legge til undersider

Opprett nye filer i `app/`-mappen:
```
app/
├── personvern/
│   └── page.tsx
├── vilkar/
│   └── page.tsx
└── dpa/
    └── page.tsx
```

## TODO

- [ ] Implementer e-postutsendelse i `/api/contact` (Resend, SendGrid, etc.)
- [ ] Legg til cookie-banner for GDPR-compliance
- [ ] Opprett juridiske undersider (Personvern, Vilkår, DPA)
- [ ] Bytt placeholder-cases med ekte kundedata
- [ ] Implementer i18n for engelsk oversettelse

## Kontakt

**Solven Solutions AS**  
Vestre Bingsa industriveg 5  
Telefon: +47 453 91 275  
E-post: sales@solven.no

---

© 2025 Solven Solutions AS. Alle priser på siden er eksempler – endelig pris fremgår av signert ordre.
