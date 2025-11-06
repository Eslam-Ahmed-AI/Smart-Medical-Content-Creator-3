'use client'

import React, { useState, useEffect } from 'react';
import { Copy, Check, Stethoscope, TrendingUp, Users, Clock, ChevronRight, MessageCircle, Share2, Download } from 'lucide-react';

export default function DentalContentGenerator() {
  const [formData, setFormData] = useState({
    doctorName: '',
    country: 'مصر',
    specialty: 'طبيب أسنان عام',
    goal: 'زيادة الوعي',
    audience: 'كلاهما',
    platform: 'Instagram',
    contentType: 'بوست نصي',
    presentationType: 'بوست عادي',
    topic: '',
    tone: 'رسمي / موثوق',
    length: 'متوسط (100-250 كلمة)',
    language: 'عربي عامي',
    visualStyle: 'احترافي / نظيف',
    colorScheme: 'أزرق وأبيض (ثقة وطب)',
    duration: '30 ثانية',
    addExample: 'لا',
    exampleDetails: '',
    visualElements: '',
    hashtags: '',
    autoHashtags: true,
    previousContent: '',
    notes: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);
  const [mounted, setMounted] = useState(false);

  // تحميل العداد من localStorage بعد التحميل فقط
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('totalGenerated');
      setTotalGenerated(parseInt(saved || '0'));
    }
  }, []);

  const countries = ['مصر', 'السعودية', 'الإمارات', 'الكويت', 'الأردن', 'لبنان', 'قطر', 'البحرين', 'عمان', 'أخرى'];
  const specialties = ['طبيب أسنان عام', 'تقويم', 'جراحة فموية', 'تجميل الأسنان', 'علاج الجذور', 'أسنان الأطفال', 'زراعة الأسنان', 'تركيبات', 'لثة'];
  
  const goals = [
    { value: 'زيادة الوعي', desc: 'تعريف المرضى بالخدمات', icon: '📢' },
    { value: 'تشجيع التفاعل', desc: 'جذب التعليقات والمشاركات', icon: '💬' },
    { value: 'جذب المرضى / حجز مواعيد', desc: 'تحويل لمرضى فعليين', icon: '📅' },
    { value: 'بناء الثقة / المصداقية', desc: 'إظهار احترافية العيادة', icon: '⭐' },
    { value: 'توجيه لموقع', desc: 'زيادة زيارات الموقع', icon: '🔗' }
  ];

  const audiences = ['رجال', 'نساء', 'كلاهما', 'الأطفال (للأهل)', 'الشباب (18-35)', 'كبار السن (50+)'];
  const platforms = ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'X / Twitter', 'YouTube', 'Snapchat'];
  
  const contentTypes = [
    { value: 'بوست نصي', type: 'text', icon: '📝', desc: 'منشور نصي مع محتوى جذاب' },
    { value: 'صورة / تصميم بصري', type: 'visual', icon: '🎨', desc: 'تصميم مع نص قصير' },
    { value: 'Story', type: 'visual', icon: '📱', desc: 'قصة تفاعلية للسوشيال' },
    { value: 'فيديو قصير', type: 'video', icon: '🎬', desc: 'فيديو 30-60 ثانية' },
    { value: 'Carousel', type: 'visual', icon: '🖼️', desc: 'سلايدات متعددة' },
    { value: 'Reel', type: 'video', icon: '🎥', desc: 'ريل قصير وجذاب' }
  ];

  const presentationTypes: Record<string, string[]> = {
    'بوست نصي': ['بوست عادي', 'بوست بسؤال', 'بوست تعليمي', 'قصة نجاح', 'نصيحة طبية'],
    'صورة / تصميم بصري': ['صورة واحدة', 'اقتباس مصمم', 'انفوجرافيك', 'قبل وبعد'],
    'Story': ['Story نصية', 'Story تفاعلية (استفتاء)', 'Story بصرية', 'Story سؤال وجواب'],
    'فيديو قصير': ['فيديو تعليمي', 'فيديو قبل وبعد', 'فيديو توضيحي', 'فيديو تحفيزي'],
    'Carousel': ['سلايدات تعليمية', 'قبل وبعد متعدد', 'خطوات متسلسلة', 'نصائح مرقمة'],
    'Reel': ['Reel سريع', 'Reel تعليمي', 'Reel ترفيهي', 'Reel Trending']
  };

  const tones = ['رسمي / موثوق', 'ودّي / مرح', 'قصصي / ملهم', 'تحفيزي / مشجع', 'تعليمي / مبسط'];
  const lengths = ['قصير (50-100 كلمة)', 'متوسط (100-250 كلمة)', 'طويل (250+ كلمة)'];
  const languages = ['عربي عامي', 'عربي فصحى', 'مزيج (فصحى خفيفة)'];
  const visualStyles = ['احترافي / نظيف', 'عصري / ملون', 'بسيط / مينيمال', 'دافئ / ودود', 'فخم / راقي'];
  const colorSchemes = [
    'أزرق وأبيض (ثقة وطب)',
    'أخضر وأبيض (صحة وطبيعة)',
    'بنفسجي وذهبي (فخامة)',
    'برتقالي ودافئ (طاقة وود)',
    'رمادي وأزرق (احترافية)'
  ];
  const durations = ['15 ثانية', '30 ثانية', '45 ثانية', '60 ثانية', '90 ثانية'];

  const trackEvent = (eventName: string, data: Record<string, any> = {}) => {
    console.log('Event:', eventName, data);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, data);
    }
  };

  const getContentTypeObject = () => {
    return contentTypes.find(ct => ct.value === formData.contentType);
  };

  const isTextContent = () => getContentTypeObject()?.type === 'text';
  const isVisualContent = () => getContentTypeObject()?.type === 'visual';
  const isVideoContent = () => getContentTypeObject()?.type === 'video';

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'contentType' && typeof value === 'string') {
        updated.presentationType = presentationTypes[value]?.[0] || '';
      }
      return updated;
    });
  };

  const generatePrompt = () => {
    if (!formData.topic) {
      alert('⚠️ من فضلك أدخل موضوع المحتوى أولاً');
      return;
    }

    const contentTypeObj = getContentTypeObject();
    
    let prompt = `تصرف كخبير محتوى سوشيال ميديا محترف لأطباء الأسنان في الوطن العربي.

# 📋 معلومات المشروع
${formData.doctorName ? `- الطبيب/العيادة: ${formData.doctorName}` : ''}
- التخصص: ${formData.specialty}
- الدولة: ${formData.country}
- المنصة: ${formData.platform}

# 🎯 تفاصيل المحتوى

## الموضوع
"${formData.topic}"

## نوع المحتوى
- النوع: ${formData.contentType}
- الأسلوب: ${formData.presentationType}
- الجمهور: ${formData.audience}
- الهدف: ${formData.goal}

`;

    if (isTextContent()) {
      prompt += `## خصائص النص
- النبرة: ${formData.tone}
- اللغة: ${formData.language}
- الطول: ${formData.length}

`;
    } else if (isVisualContent()) {
      prompt += `## خصائص التصميم
- الأسلوب البصري: ${formData.visualStyle}
- الألوان: ${formData.colorScheme}
${formData.visualElements ? `- عناصر إضافية: ${formData.visualElements}` : ''}

`;
    } else if (isVideoContent()) {
      prompt += `## خصائص الفيديو
- المدة: ${formData.duration}
- الأسلوب البصري: ${formData.visualStyle}
- الألوان: ${formData.colorScheme}
${formData.visualElements ? `- عناصر مرئية: ${formData.visualElements}` : ''}

`;
    }

    if (formData.addExample === 'نعم' && formData.exampleDetails) {
      prompt += `## 💡 مثال/قصة للاستخدام
${formData.exampleDetails}

اجعل المحتوى يعكس هذا المثال بشكل مؤثر وعملي.

`;
    }

    prompt += `# ✅ المتطلبات

## البداية
`;

    if (isTextContent()) {
      prompt += `- ابدأ بجملة قوية تلفت الانتباه في 3 ثوان
- استخدم emojis بشكل معتدل ومناسب
`;
    } else if (isVideoContent() || (isVisualContent() && formData.contentType === 'Story')) {
      prompt += `- هوك بصري قوي في أول 2-3 ثوان
- اكتب سكريبت مفصل مع توقيت كل مشهد
`;
    } else {
      prompt += `- تصميم يجذب الانتباه فوراً
- نص مختصر وواضح
`;
    }

    prompt += `
## المحتوى
- اجعله مناسب لثقافة ${formData.country}
- استخدم أسلوب ${isTextContent() ? formData.tone : formData.visualStyle}
`;

    if (formData.contentType === 'Carousel') {
      prompt += `- قسم المحتوى على 5-7 سلايدات
- كل سلايد فكرة واحدة واضحة
`;
    }

    prompt += `
## Call-to-Action
`;
    if (formData.goal === 'جذب المرضى / حجز مواعيد') {
      prompt += `- CTA واضح ومباشر للحجز: "احجز الآن عبر الرابط في البايو"
`;
    } else if (formData.goal === 'تشجيع التفاعل') {
      prompt += `- اطلب التفاعل: "شاركنا رأيك في التعليقات 👇"
`;
    } else if (formData.goal === 'زيادة الوعي') {
      prompt += `- شجع المشاركة: "احفظ هذا المنشور وشاركه لتفيد غيرك"
`;
    }

    if (formData.autoHashtags || formData.hashtags) {
      prompt += `
## الهاشتاجات
`;
      if (formData.hashtags) {
        prompt += `- استخدم: ${formData.hashtags}
`;
      }
      if (formData.autoHashtags) {
        prompt += `- اقترح 5-7 هاشتاجات إضافية مناسبة لـ ${formData.platform}
`;
      }
    }

    if (formData.previousContent) {
      prompt += `
## 🎨 محاكاة الأسلوب
استخدم نفس الأسلوب والـ tone من هذا المثال:
"${formData.previousContent.substring(0, 300)}${formData.previousContent.length > 300 ? '...' : ''}"
`;
    }

    if (formData.notes) {
      prompt += `
## 📝 ملاحظات إضافية
${formData.notes}
`;
    }

    prompt += `
# 📤 تنسيق الإخراج
`;

    if (isTextContent()) {
      prompt += `قدم البوست كاملاً جاهز للنسخ واللصق مباشرة.`;
    } else if (formData.contentType === 'Carousel') {
      prompt += `قدم محتوى كل سلايد على حدة (مرقم ومنسق):
Slide 1: [العنوان]
Slide 2: [المحتوى]
...إلخ`;
    } else if (isVideoContent()) {
      prompt += `قدم:
1. السكريبت الكامل مع التوقيت
2. الوصف البصري لكل مشهد
3. الموسيقى/الأصوات المقترحة
4. النص المصاحب للبوست`;
    } else if (isVisualContent()) {
      prompt += `قدم:
1. وصف تفصيلي للتصميم (الألوان، الخطوط، التكوين)
2. النص المطلوب على التصميم
3. النص المصاحب للبوست`;
    }

    prompt += `

اجعل كل شيء احترافي، جذاب، ومناسب لـ ${formData.platform} والجمهور في ${formData.country}.`;

    setGeneratedPrompt(prompt);
    
    const newTotal = totalGenerated + 1;
    setTotalGenerated(newTotal);
    if (typeof window !== 'undefined') {
      localStorage.setItem('totalGenerated', newTotal.toString());
    }
    
    trackEvent('prompt_generated', {
      specialty: formData.specialty,
      contentType: formData.contentType,
      country: formData.country,
      platform: formData.platform,
      totalGenerated: newTotal
    });

    setTimeout(() => {
      document.getElementById('generated-prompt')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    trackEvent('prompt_copied', {
      contentType: formData.contentType
    });
  };

  const shareWhatsApp = () => {
    const message = encodeURIComponent('🎉 لقيت أداة رهيبة لتوليد محتوى السوشيال ميديا لطب الأسنان! جربها مجاناً: ' + window.location.href);
    window.open(`https://wa.me/?text=${message}`, '_blank');
    
    trackEvent('shared_whatsapp');
  };

  if (!mounted) {
    return null; // تجنب hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Medical Hero Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4 text-center md:text-right">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl">
                  <Stethoscope className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-3">Smart Medical Content Creator</h1>
                  <p className="text-blue-100 text-base md:text-lg">محتوى احترافي لطب الأسنان في دقيقة فقط ⚡</p>
                </div>
              </div>
              
              <div className="text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl px-8 py-5 border-2 border-white border-opacity-40 shadow-xl">
                <div className="text-4xl font-bold mb-2">{totalGenerated}</div>
                <div className="text-sm text-blue-100">برومبت تم إنشاؤه</div>
              </div>
            </div>
            
            {/* Medical Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white bg-opacity-25 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10x</div>
                    <p className="text-sm text-blue-100">معدل التفاعل</p>
                  </div>
                </div>
                <p className="text-xs text-blue-200">يساعدك على زيادة التفاعل مع محتواك الطبي</p>
              </div>
              
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white bg-opacity-25 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">دقيقة</div>
                    <p className="text-sm text-blue-100">وقت الإنشاء</p>
                  </div>
                </div>
                <p className="text-xs text-blue-200">وفر وقتك الثمين للتركيز على مرضاك</p>
              </div>
              
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white bg-opacity-25 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">+500</div>
                    <p className="text-sm text-blue-100">دكتور يثق بنا</p>
                  </div>
                </div>
                <p className="text-xs text-blue-200">انضم لمجتمع الأطباء الناجحين</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8">
          {/* Step 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">المعلومات الأساسية</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">اسم الطبيب / العيادة (اختياري)</label>
                <input
                  type="text"
                  value={formData.doctorName}
                  onChange={(e) => handleChange('doctorName', e.target.value)}
                  placeholder="د. أحمد محمد أو عيادة النور"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الدولة 🌍</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                >
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">التخصص 🦷</label>
                <select
                  value={formData.specialty}
                  onChange={(e) => handleChange('specialty', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                >
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">المنصة 📱</label>
                <select
                  value={formData.platform}
                  onChange={(e) => handleChange('platform', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                >
                  {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الجمهور المستهدف 👥</label>
                <select
                  value={formData.audience}
                  onChange={(e) => handleChange('audience', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                >
                  {audiences.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الهدف من المحتوى 🎯</label>
                <select
                  value={formData.goal}
                  onChange={(e) => handleChange('goal', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                >
                  {goals.map(g => (
                    <option key={g.value} value={g.value}>
                      {g.icon} {g.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-10 pt-10 border-t-2 border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">نوع المحتوى والموضوع</h2>
            </div>

            {/* Content Type Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {contentTypes.map(ct => (
                <div
                  key={ct.value}
                  onClick={() => handleChange('contentType', ct.value)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-105 ${
                    formData.contentType === ct.value
                      ? 'border-green-500 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-4xl mb-3">{ct.icon}</div>
                  <div className="font-bold text-sm mb-1">{ct.value}</div>
                  <div className="text-xs text-gray-600">{ct.desc}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  موضوع المحتوى <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.topic}
                  onChange={(e) => handleChange('topic', e.target.value)}
                  placeholder="مثال: أهمية تنظيف الأسنان يومياً للوقاية من التسوس"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">طريقة العرض</label>
                <select
                  value={formData.presentationType}
                  onChange={(e) => handleChange('presentationType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all"
                >
                  {(presentationTypes[formData.contentType] || []).map(pt => (
                    <option key={pt} value={pt}>{pt}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Dynamic Details */}
          <div className="mb-10 pt-10 border-t-2 border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {isTextContent() ? 'تفاصيل النص' : isVideoContent() ? 'تفاصيل الفيديو' : 'تفاصيل التصميم'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {isTextContent() && (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">نبرة الكلام 🎭</label>
                    <select
                      value={formData.tone}
                      onChange={(e) => handleChange('tone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {tones.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">اللغة 🗣️</label>
                    <select
                      value={formData.language}
                      onChange={(e) => handleChange('language', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {languages.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الطول 📏</label>
                    <select
                      value={formData.length}
                      onChange={(e) => handleChange('length', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {lengths.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </>
              )}

              {isVisualContent() && (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الأسلوب البصري 🎨</label>
                    <select
                      value={formData.visualStyle}
                      onChange={(e) => handleChange('visualStyle', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {visualStyles.map(vs => <option key={vs} value={vs}>{vs}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">مجموعة الألوان</label>
                    <select
                      value={formData.colorScheme}
                      onChange={(e) => handleChange('colorScheme', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {colorSchemes.map(cs => <option key={cs} value={cs}>{cs}</option>)}
                    </select>
                  </div>
                </>
              )}

              {isVideoContent() && (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">مدة الفيديو ⏱️</label>
                    <select
                      value={formData.duration}
                      onChange={(e) => handleChange('duration', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {durations.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الأسلوب البصري 🎬</label>
                    <select
                      value={formData.visualStyle}
                      onChange={(e) => handleChange('visualStyle', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {visualStyles.map(vs => <option key={vs} value={vs}>{vs}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الألوان</label>
                    <select
                      value={formData.colorScheme}
                      onChange={(e) => handleChange('colorScheme', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                    >
                      {colorSchemes.map(cs => <option key={cs} value={cs}>{cs}</option>)}
                    </select>
                  </div>
                </>
              )}

              {!isTextContent() && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    وصف العناصر {isVideoContent() ? 'المرئية' : 'البصرية'} (اختياري)
                  </label>
                  <textarea
                    value={formData.visualElements}
                    onChange={(e) => handleChange('visualElements', e.target.value)}
                    placeholder={isVideoContent() 
                      ? "مثال: مشهد افتتاحي لطبيب يبتسم، لقطات للعيادة النظيفة، موسيقى هادئة..."
                      : "مثال: صورة لطبيب مع مريض راضي، خلفية بيضاء نظيفة، إضاءة احترافية..."
                    }
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none transition-all"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Step 4: Optional Additions */}
          <div className="mb-8 pt-10 border-t-2 border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">إضافات اختيارية (لنتائج أفضل)</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-3 cursor-pointer mb-3 group">
                  <input
                    type="checkbox"
                    checked={formData.addExample === 'نعم'}
                    onChange={(e) => handleChange('addExample', e.target.checked ? 'نعم' : 'لا')}
                    className="w-5 h-5 text-orange-500 rounded"
                  />
                  <span className="text-sm font-bold text-gray-700 group-hover:text-orange-600 transition-colors">
                    💡 إضافة مثال أو قصة نجاح واقعية
                  </span>
                </label>
                {formData.addExample === 'نعم' && (
                  <textarea
                    value={formData.exampleDetails}
                    onChange={(e) => handleChange('exampleDetails', e.target.value)}
                    placeholder="مثال: مريض كان يعاني من ألم مزمن، بعد علاج الجذور أصبحت حياته أفضل..."
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none transition-all"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الهاشتاجات #️⃣</label>
                <input
                  type="text"
                  value={formData.hashtags}
                  onChange={(e) => handleChange('hashtags', e.target.value)}
                  placeholder="#طب_الأسنان #صحة_الفم #ابتسامة_صحية"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all"
                />
                <label className="flex items-center gap-2 mt-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.autoHashtags}
                    onChange={(e) => handleChange('autoHashtags', e.target.checked)}
                    className="w-4 h-4 text-orange-500 rounded"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
                    ✨ اقتراح هاشتاجات إضافية تلقائياً
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  📋 مثال من محتواك السابق (لمحاكاة أسلوبك)
                </label>
                <textarea
                  value={formData.previousContent}
                  onChange={(e) => handleChange('previousContent', e.target.value)}
                  placeholder="الصق هنا منشور سبق ونشرته لمحاكاة نفس الأسلوب..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📝 ملاحظات إضافية</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="أي نقاط مهمة تريد التركيز عليها أو معلومات إضافية..."
                  rows={2}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePrompt}
            disabled={!formData.topic}
            className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white font-bold py-6 rounded-2xl hover:from-blue-700 hover:via-blue-800 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 disabled:hover:scale-100"
          >
            <Stethoscope className="w-7 h-7" />
            <span className="text-xl">🚀 اصنع البرومبت الآن</span>
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Generated Prompt Result */}
        {generatedPrompt && (
          <div id="generated-prompt" className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 mb-8 border-2 border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">البرومبت جاهز! 🎉</h2>
                  <p className="text-sm text-gray-600">جاهز للاستخدام مباشرة في ChatGPT</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg font-bold"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>تم النسخ! ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>نسخ</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    const element = document.createElement('a');
                    const file = new Blob([generatedPrompt], {type: 'text/plain'});
                    element.href = URL.createObjectURL(file);
                    element.download = `prompt-${Date.now()}.txt`;
                    element.click();
                    trackEvent('prompt_downloaded');
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all shadow-lg font-bold"
                >
                  <Download className="w-5 h-5" />
                  <span>حفظ</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-200 mb-6">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">{generatedPrompt}</pre>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border-2 border-blue-200 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">✨</span>
                </div>
                <div>
                  <p className="font-bold text-blue-900 mb-3 text-lg">كيف تستخدم البرومبت:</p>
                  <ol className="text-sm text-blue-800 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="font-bold bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                      <span>اضغط على زر <strong>"نسخ"</strong> أعلاه لنسخ البرومبت كاملاً</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                      <span>افتح <strong>ChatGPT</strong> أو <strong>Claude</strong> أو <strong>Gemini</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                      <span>الصق البرومبت في المحادثة واضغط Enter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                      <span><strong>احصل على محتوى احترافي جاهز للنشر! 🚀</strong></span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Share Feedback */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-green-300 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-gray-800">شارك تجربتك</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  هل أعجبك المحتوى؟ ساعدنا في التطوير بمشاركة رأيك
                </p>
                <a
                  href="https://wa.me/201204947425?text=جربت مولد المحتوى الطبي وعايز أقول رأيي 💚"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('feedback_clicked')}
                  className="block w-full text-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-bold"
                >
                  📱 شارك رأيك على واتساب
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-blue-300 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Share2 className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-gray-800">شارك الأداة</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  ساعد زملاءك الأطباء في اكتشاف هذه الأداة
                </p>
                <button
                  onClick={shareWhatsApp}
                  className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-bold"
                >
                  🔗 شارك مع زملائك
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-10 border-t-2 border-gray-100">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-gray-600 text-base mb-3">
              <Stethoscope className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">صُنع بـ ❤️ لخدمة الأطباء العرب</span>
              <span className="font-semibold">Eng/Eslam Ahmed</span>
            </div>
            <p className="text-sm text-gray-500">
              مساعدة أطباء الأسنان في صناعة محتوى احترافي بسهولة وسرعة
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-4">
            <span>© 2026 Smart Medical Content Creator</span>
          </div>
        </div>
      </div>
    </div>
  );
}