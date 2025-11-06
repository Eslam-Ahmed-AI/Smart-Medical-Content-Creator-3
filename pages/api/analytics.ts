import type { NextApiRequest, NextApiResponse } from 'next'

type AnalyticsData = {
  event: string
  timestamp: string
  data?: any
}

type Response = {
  success: boolean
  message?: string
}

// هذا API endpoint بسيط لتسجيل الأحداث
// يمكنك توسيعه لحفظ البيانات في قاعدة بيانات
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { event, data }: AnalyticsData = req.body

    // هنا يمكنك إضافة كود لحفظ البيانات في قاعدة بيانات
    // مثل: Supabase, MongoDB, Firebase, إلخ
    
    console.log('Analytics Event:', {
      event,
      data,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
}