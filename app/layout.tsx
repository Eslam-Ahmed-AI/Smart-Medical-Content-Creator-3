import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'Smart Medical Content Creator - مولد محتوى طب الأسنان',
  description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان على السوشيال ميديا في دقائق',
  keywords: 'طب الأسنان, محتوى سوشيال ميديا, تسويق طبي, أطباء الأسنان, محتوى طبي',
  authors: [{ name: 'Smart Medical Content Creator' }],
  openGraph: {
    title: 'Smart Medical Content Creator - مولد محتوى طب الأسنان',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
    type: 'website',
    locale: 'ar_EG',
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
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Fonts - Cairo للعربية */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Analytics />
        
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </body>
    </html>
  )
}