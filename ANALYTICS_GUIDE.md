# 📊 دليل التحليلات الشامل

## جدول المحتويات
1. [إعداد Google Analytics 4](#إعداد-google-analytics-4)
2. [Vercel Analytics](#vercel-analytics)
3. [الأحداث المتتبعة](#الأحداث-المتتبعة)
4. [التقارير المهمة](#التقارير-المهمة)
5. [تحليل السلوك](#تحليل-السلوك)

---

## إعداد Google Analytics 4

### الخطوة 1: إنشاء حساب GA4

1. اذهب إلى https://analytics.google.com
2. اضغط "Start measuring"
3. املأ البيانات:
   - **Account name**: `Dental Content Generator`
   - **Property name**: `Medical Content Creator`
   - **Time zone**: اختر منطقتك (مثل: Egypt)
   - **Currency**: اختر عملتك (مثل: EGP - Egyptian Pound)

### الخطوة 2: إعداد Data Stream

1. اختر "Web" كمنصة
2. املأ:
   - **Website URL**: `https://your-site.vercel.app`
   - **Stream name**: `Production`
3. اضغط "Create stream"
4. **انسخ Measurement ID** (مثل: `G-ABC123XYZ`)

### الخطوة 3: ربط الموقع

افتح ملف `.env.local` وأضف:
```
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
```

أعد تشغيل السيرفر:
```bash
npm run dev
```

---

## Vercel Analytics

### التفعيل

1. اذهب إلى مشروعك في Vercel
2. اذهب إلى Settings → Analytics
3. اضغط "Enable Analytics"
4. اختر الخطة (Free كافية للبداية)

### ما يتتبعه Vercel

- ✅ Page Views
- ✅ Unique Visitors
- ✅ Top Pages
- ✅ Top Referrers
- ✅ Countries
- ✅ Devices
- ✅ Browsers

---

## الأحداث المتتبعة

الأداة تتتبع تلقائياً هذه الأحداث:

### 1. `page_view`
**متى:** عند فتح أي صفحة
**البيانات:**
- `page_path`: مسار الصفحة
- `page_title`: عنوان الصفحة

### 2. `prompt_generated`
**متى:** عند إنشاء برومبت جديد
**البيانات:**
- `specialty`: التخصص المختار
- `contentType`: نوع المحتوى
- `country`: الدولة
- `platform`: المنصة
- `totalGenerated`: إجمالي البرومبتات

**للعرض في GA4:**
```
Reports → Engagement → Events → prompt_generated
```

### 3. `prompt_copied`
**متى:** عند نسخ البرومبت
**البيانات:**
- `contentType`: نوع المحتوى

### 4. `prompt_downloaded`
**متى:** عند تحميل البرومبت
**البيانات:**
- `contentType`: نوع المحتوى

### 5. `shared_whatsapp`
**متى:** عند مشاركة الأداة
**البيانات:**
- لا يوجد (للخصوصية)

### 6. `feedback_clicked`
**متى:** عند النقر على زر الفيدباك
**البيانات:**
- لا يوجد

### 7. `scroll_depth`
**متى:** عند السكرول (25%, 50%, 75%, 100%)
**البيانات:**
- `value`: نسبة السكرول
- `event_label`: "25%", "50%", إلخ

### 8. `timing_complete`
**متى:** عند مغادرة الصفحة
**البيانات:**
- `value`: الوقت بالثواني
- `name`: "page_visit_duration"

---

## التقارير المهمة

### 1. Realtime Report
**للوصول:** Reports → Realtime

**ماذا يعرض:**
- عدد المستخدمين الحاليين
- الصفحات المفتوحة الآن
- الأحداث الحالية
- المواقع الجغرافية

**متى تستخدمه:**
- عند إطلاق الموقع
- بعد حملة تسويقية
- لاختبار التتبع

### 2. User Acquisition
**للوصول:** Reports → Acquisition → User acquisition

**ماذا يعرض:**
- من أين يأتي الزوار
- (Direct): زيارات مباشرة
- (Social): سوشيال ميديا
- (Referral): مواقع أخرى
- (Organic Search): محركات البحث

**مثال:**
```
Source         | Users | Sessions | Conversions
Direct         | 150   | 200      | 45
facebook.com   | 80    | 95       | 20
google.com     | 60    | 75       | 18
```

### 3. Engagement Report
**للوصول:** Reports → Engagement → Events

**ماذا يعرض:**
- عدد كل حدث
- المستخدمين الذين فعلوا الحدث
- معدل التحويل

**مثال:**
```
Event              | Count | Users
prompt_generated   | 500   | 320
prompt_copied      | 450   | 300
prompt_downloaded  | 200   | 150
```

### 4. Pages and Screens
**للوصول:** Reports → Engagement → Pages and screens

**ماذا يعرض:**
- الصفحات الأكثر زيارة
- متوسط وقت البقاء
- معدل الارتداد

---

## تحليل السلوك

### قمع التحويل (Conversion Funnel)

**الخطوات:**
1. زيارة الموقع → `page_view`
2. ملء النموذج → (تتبع الحقول)
3. إنشاء برومبت → `prompt_generated`
4. نسخ البرومبت → `prompt_copied`
5. مشاركة الأداة → `shared_whatsapp`

**لإنشاء القمع في GA4:**

1. اذهب إلى Explore
2. اختر "Funnel exploration"
3. أضف الخطوات:
   ```
   Step 1: page_view (Landing)
   Step 2: prompt_generated
   Step 3: prompt_copied
   ```

**النتائج المثالية:**
- Landing → Generate: 60%+
- Generate → Copy: 85%+
- Copy → Share: 15%+

### تحليل السلوك حسب التخصص

**لإنشاء تقرير مخصص:**

1. اذهب إلى Explore → Create new exploration
2. اختر "Free form"
3. أضف Dimensions:
   - `specialty` (من event parameters)
   - `country`
   - `contentType`
4. أضف Metrics:
   - Event count
   - Total users
5. اضبط الفلاتر:
   - Event name = `prompt_generated`

**ستحصل على:**
```
Specialty           | Country | Content Type | Count
طبيب أسنان عام     | مصر     | بوست نصي     | 150
تقويم               | السعودية| فيديو قصير   | 80
تجميل الأسنان      | الإمارات| Reel         | 60
```

---

## KPIs المقترحة

### 1. معدل التحويل الأساسي
```
Conversion Rate = (prompt_generated / page_view) × 100
```
**الهدف:** 40%+

### 2. معدل النسخ
```
Copy Rate = (prompt_copied / prompt_generated) × 100
```
**الهدف:** 80%+

### 3. متوسط وقت البقاء
```
Average Session Duration
```
**الهدف:** 3+ دقائق

### 4. معدل الارتداد
```
Bounce Rate = (Single page sessions / All sessions) × 100
```
**الهدف:** أقل من 50%

### 5. معدل المشاركة
```
Share Rate = (shared_whatsapp / prompt_generated) × 100
```
**الهدف:** 10%+

---

## إعداد تنبيهات مخصصة

### في Google Analytics:

1. اذهب إلى Admin → Custom alerts
2. أنشئ تنبيه جديد:

**مثال 1: انخفاض الزيارات**
```
Alert Name: انخفاض الزيارات اليومية
Apply to: All Web Site Data
Period: Day
Alert me when: Users
Condition: % decreases by more than 50%
Compared to: Previous day
```

**مثال 2: زيادة في الأخطاء**
```
Alert Name: زيادة معدل الارتداد
Apply to: All Web Site Data
Period: Day
Alert me when: Bounce Rate
Condition: Is greater than 70%
```

---

## Dashboard مخصص

### إنشاء لوحة تحكم:

1. اذهب إلى Customization → Dashboards
2. Create → Blank Dashboard
3. أضف Cards:

**Card 1: نظرة عامة**
- Metric: Users, Sessions, Bounce Rate
- Time: Last 7 days

**Card 2: أهم الأحداث**
- Dimension: Event name
- Metric: Event count
- Filter: Custom events only

**Card 3: التوزيع الجغرافي**
- Dimension: Country
- Metric: Users
- Visualization: Map

**Card 4: قمع التحويل**
- Steps: page_view → prompt_generated → prompt_copied
- Metric: Conversion rate

---

## تصدير البيانات

### للتحليل الدوري:

```bash
# يمكنك تصدير التقارير من GA4:
# 1. اذهب للتقرير المطلوب
# 2. اضغط على Share → Download file
# 3. اختر PDF أو CSV
```

### API Integration (متقدم):

```javascript
// إذا أردت استخدام GA4 API
// ستحتاج لإعداد Service Account

const {BetaAnalyticsDataClient} = require('@google-analytics/data');
const analyticsDataClient = new BetaAnalyticsDataClient();

async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: 'properties/YOUR_PROPERTY_ID',
    dateRanges: [{startDate: '7daysAgo', endDate: 'today'}],
    dimensions: [{name: 'eventName'}],
    metrics: [{name: 'eventCount'}],
  });
  console.log(response);
}
```

---

## الخلاصة

### الأدوات المستخدمة:
✅ **Google Analytics 4**: للتحليل الشامل
✅ **Vercel Analytics**: للمقاييس الأساسية
✅ **Custom Events**: لتتبع مخصص

### التقارير الأساسية اليومية:
1. Realtime (للزيارات الحالية)
2. Events (لعدد البرومبتات)
3. User acquisition (لمصادر الزيارات)

### المراجعة الأسبوعية:
- تحليل قمع التحويل
- مقارنة أداء التخصصات
- تحديد نقاط التحسين

### المراجعة الشهرية:
- مقارنة شهر بشهر
- تحديد الاتجاهات
- تحديث استراتيجية التسويق

---

صُنع بـ ❤️ للأطباء العرب 🦷