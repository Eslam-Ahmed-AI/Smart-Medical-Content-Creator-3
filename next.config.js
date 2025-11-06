/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // تحسين الأداء
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // دعم اللغة العربية بشكل كامل
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },
}

module.exports = nextConfig