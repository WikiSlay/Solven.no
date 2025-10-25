import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OrganizationSchema, WebSiteSchema } from "./JsonLd";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solven Solutions – AI-kundeservice som faktisk leverer",
  description: siteConfig.description,
  keywords: ["AI-kundeservice", "chatbot", "kundesupport", "automatisering", "GDPR", "Norge"],
  authors: [{ name: "Solven Solutions AS" }],
  creator: "Solven Solutions AS",
  publisher: "Solven Solutions AS",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: siteConfig.url,
    title: "Solven Solutions – AI-kundeservice som faktisk leverer",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Solven Solutions – AI-kundeservice som faktisk leverer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = siteConfig.analytics.gaId;

  return (
    <html lang="nb" className={montserrat.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        <OrganizationSchema />
        <WebSiteSchema />
        {children}
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
