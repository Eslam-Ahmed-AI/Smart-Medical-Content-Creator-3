#!/bin/bash

# Setup Script for Dental Content Generator
# يعمل على macOS و Linux

echo "🦷 مرحباً بك في Smart Medical Content Creator"
echo "================================================"
echo ""

# التحقق من Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js غير مثبت. من فضلك ثبت Node.js من:"
    echo "https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# إنشاء المجلدات
echo "📁 إنشاء هيكل المجلدات..."
mkdir -p app components pages/api public

echo "✅ تم إنشاء المجلدات"
echo ""

# إنشاء ملف البيئة
echo "🔐 إعداد ملف البيئة..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "⚠️  من فضلك عدل ملف .env.local وأضف Google Analytics ID"
    echo "   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX"
else
    echo "⚠️  ملف .env.local موجود بالفعل"
fi
echo ""

# تثبيت المكتبات
echo "📦 تثبيت المكتبات... (قد يستغرق 1-2 دقيقة)"
npm install

if [ $? -eq 0 ]; then
    echo "✅ تم تثبيت المكتبات بنجاح"
else
    echo "❌ حدث خطأ في تثبيت المكتبات"
    exit 1
fi
echo ""

# Git initialization
echo "📝 تهيئة Git..."
if [ ! -d .git ]; then
    git init
    git add .
    git commit -m "Initial commit: Dental Content Generator"
    echo "✅ تم تهيئة Git"
else
    echo "⚠️  Git مهيء بالفعل"
fi
echo ""

echo "================================================"
echo "✨ الإعداد اكتمل بنجاح!"
echo "================================================"
echo ""
echo "الخطوات التالية:"
echo ""
echo "1️⃣  عدل ملف .env.local وأضف Google Analytics ID:"
echo "   nano .env.local"
echo ""
echo "2️⃣  شغل المشروع محلياً:"
echo "   npm run dev"
echo ""
echo "3️⃣  افتح المتصفح على:"
echo "   http://localhost:3000"
echo ""
echo "4️⃣  للنشر على Vercel:"
echo "   npm i -g vercel"
echo "   vercel login"
echo "   vercel --prod"
echo ""
echo "🎉 بالتوفيق!"