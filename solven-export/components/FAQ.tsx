'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Hvor raskt kan vi komme i gang?',
    answer: '1 til 2 uker til pilot etter workshop og tilganger er på plass. Vi starter med en workshop for å kartlegge behov, deretter setter vi opp systemet og integrerer med dine eksisterende verktøy.',
  },
  {
    question: 'Trener dere på våre data?',
    answer: 'Kun etter avtale. Dataminimering er standard, og all logging skjer i sikre områder med kryptering. Vi følger GDPR og du beholder full kontroll over dine data.',
  },
  {
    question: 'Hvordan måles verdi?',
    answer: 'Vi måler løsningsgrad, svartid, first contact resolution og CSAT. Alt rapporteres månedlig i et oversiktlig dashboard. Du får også tilgang til real-time data.',
  },
  {
    question: 'Hva med menneskelig handoff?',
    answer: 'Sømløs overføring til menneskelig agent via e-post, telefon eller helpdesk. AI-en identifiserer når en sak krever menneskelig oppfølging og sender den videre med full kontekst.',
  },
  {
    question: 'Hvilke integrasjoner støttes?',
    answer: 'Vi integrerer med de fleste CRM-systemer (Salesforce, HubSpot, Pipedrive), helpdesk (Zendesk, Freshdesk), kalendre (Google, Outlook) og egendefinerte API-er.',
  },
  {
    question: 'Hva koster det egentlig?',
    answer: 'Prisen avhenger av omfang, integrasjoner, trafikkvolum og SLA. Alle priser på siden er eksempler. Ta kontakt for et skreddersydd tilbud basert på dine behov.',
  },
  {
    question: 'Kan vi prøve før vi forplikter oss?',
    answer: 'Ja! Vi tilbyr en 2-4 ukers pilot hvor du kan teste løsningen i praksis. Du betaler kun for piloten, og det er ingen binding til å fortsette.',
  },
  {
    question: 'Hvordan håndteres personvern?',
    answer: 'Vi følger GDPR med DPA, samtykke for opptak og chatlogg, og kryptering av all data. Du kan når som helst be om innsyn, sletting eller eksport av data.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-black">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ofte stilte <span className="text-brand-orange">spørsmål</span>
          </h2>
          <p className="text-xl text-gray-400">
            Har du andre spørsmål? Ta gjerne kontakt med oss.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden hover:glass-strong transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus-ring"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
