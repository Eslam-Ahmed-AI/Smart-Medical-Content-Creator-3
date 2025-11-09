import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Analytics from '@/components/Analytics'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Smart Medical Content Creator - مولد محتوى طب الأسنان',
  description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان على السوشيال ميديا في دقائق',
  keywords: 'طب الأسنان, محتوى سوشيال ميديا, تسويق طبي, أطباء الأسنان, محتوى طبي',
  authors: [{ name: 'Smart Medical Content Creator' }],

  // الرابط الرئيسي للموقع
  metadataBase: new URL('https://smart-medical-content-creator-3.vercel.app'),

  openGraph: {
    title: 'Smart Medical Content Creator - مولد محتوى طب الأسنان',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
    type: 'website',
    locale: 'ar_EG',
    url: 'https://smart-medical-content-creator-3.vercel.app',

    // ✅ صورة OG من فولدر public
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Medical Content Creator - مولد محتوى طب الأسنان',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Smart Medical Content Creator',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
    images: ['/og-image.png'], // صورة Twitter card نفس OG
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = 'G-PTXCTWWVGV';
  
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />

        {/* ✅ Favicon من فولدر public */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body>
        {children}

        {/* حماية useSearchParams داخل Suspense */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        {/* ✅ Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
            
            console.log('✅ GA4 Initialized:', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
