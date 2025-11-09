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
  
  // ✅ تم إضافة هذا السطر لتحديد الرابط الرئيسي
  metadataBase: new URL('https://smart-medical-content-creator-3.vercel.app'),

  openGraph: {
    title: 'Smart Medical Content Creator - مولد محتوى طب الأسنان',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
    type: 'website',
    locale: 'ar_EG',
    
    // ✅ تم إضافة هذا السطر لتحديد الرابط الرسمي في الـ Open Graph
    url: 'https://smart-medical-content-creator-3.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Medical Content Creator',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
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
  // ✅ حط الـ GA ID هنا مباشرة
  const GA_ID = 'G-PTXCTWWVGV';
  
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}

        {/* حماية useSearchParams داخل Suspense */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        {/* ✅ Google Analytics 4 - بالـ ID الصحيح */}
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
            
            // للتأكد إن GA4 شغال
            console.log('✅ GA4 Initialized:', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
