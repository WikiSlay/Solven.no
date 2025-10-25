'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const [isDNT, setIsDNT] = useState(false);

  useEffect(() => {
    const dnt = navigator.doNotTrack === '1' || (window as any).doNotTrack === '1';
    setIsDNT(dnt);
  }, []);

  if (!gaId || isDNT) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
