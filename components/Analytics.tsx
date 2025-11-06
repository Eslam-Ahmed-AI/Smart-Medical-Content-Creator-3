'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // تتبع تغيير الصفحات
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
        page_title: document.title,
      })
    }

    // تتبع الوقت على الصفحة
    const startTime = Date.now()
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'page_visit_duration',
          value: timeSpent,
          event_category: 'engagement',
          event_label: pathname,
        })
      }
    }
  }, [pathname, searchParams])

  // تتبع السكرول
  useEffect(() => {
    let scrollDepth = 0
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const currentDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)
      
      if (currentDepth > scrollDepth && currentDepth % 25 === 0) {
        scrollDepth = currentDepth
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${scrollDepth}%`,
            value: scrollDepth,
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}

// إضافة types للـ gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}