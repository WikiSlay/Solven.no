import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhySolven from '@/components/WhySolven';
import Journey from '@/components/Journey';
import Packages from '@/components/Packages';
import CaseStripe from '@/components/CaseStripe';
import TrustBadges from '@/components/TrustBadges';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ExitIntentCTA from '@/components/ExitIntentCTA';
import { siteConfig } from '@/lib/config';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <WhySolven />
      <Journey />
      <Packages />
      <CaseStripe />
      <TrustBadges />
      <Security />
      <FAQ />
      <Contact />
      <Footer />
      
      {siteConfig.features.demoWidgetEnabled && <ChatWidget />}
      <ExitIntentCTA />
    </main>
  );
}
