import { useEffect } from 'react'
import {
  FiPhone,
  FiInstagram,
  FiMail,
  FiMessageCircle,
} from 'react-icons/fi'

import { setTitle } from '../utils/seo'
import { BRAND } from '../config/config'

export default function Contact() {
  useEffect(() => {
    setTitle('اتصل بنا - نبراس')
  }, [])

  const whatsappLink = `https://wa.me/${BRAND.whatsappNumber.replace(
    /[^0-9]/g,
    '',
  )}`

  return (
    <div className="min-h-screen bg-[#faf8f2] pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}
        <div className="text-center">
          <span className="rounded-full bg-[#bea642]/10 px-5 py-2 text-sm font-semibold text-[#bea642]">
            Contact Nebras
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#4a5225]">
            اتصل بنا
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            فريق نبراس جاهز لمساعدتك في أي استفسار يتعلق بالطلبات،
            المقاسات، الشحن أو المنتجات الجديدة.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* WhatsApp */}
          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4a5225]/10 text-[#4a5225] transition group-hover:bg-[#4a5225] group-hover:text-white">
              <FiMessageCircle size={34} />
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-[#4a5225]">
              واتساب
            </h3>

            <p className="mt-4 text-center text-gray-600">
              {BRAND.whatsappNumber}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#4a5225] py-4 font-semibold text-white transition hover:bg-[#bea642]"
            >
              <FiPhone className="ml-2" />
              تواصل الآن
            </a>
          </div>

          {/* Instagram */}
          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#bea642]/10 text-[#bea642] transition group-hover:bg-[#bea642] group-hover:text-white">
              <FiInstagram size={34} />
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-[#4a5225]">
              انستجرام
            </h3>

            <p className="mt-4 text-center text-gray-600">
              تابع أحدث الإصدارات والعروض
            </p>

            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-full border border-[#bea642] py-4 font-semibold text-[#4a5225] transition hover:bg-[#bea642] hover:text-white"
            >
              <FiInstagram className="ml-2" />
              زيارة الحساب
            </a>
          </div>

          {/* Email */}
          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4a5225]/10 text-[#4a5225] transition group-hover:bg-[#4a5225] group-hover:text-white">
              <FiMail size={34} />
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-[#4a5225]">
              البريد الإلكتروني
            </h3>

            <p className="mt-4 text-center text-gray-600">
              support@nebras.com
            </p>

            <a
              href="mailto:support@nebras.com"
              className="mt-8 flex w-full items-center justify-center rounded-full border border-[#4a5225] py-4 font-semibold text-[#4a5225] transition hover:bg-[#4a5225] hover:text-white"
            >
              <FiMail className="ml-2" />
              إرسال بريد
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 rounded-[40px] border border-[#ece5d3] bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-[#4a5225]">
            نحن هنا لمساعدتك
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            يتم الرد على معظم الرسائل خلال ساعات العمل، ويمكنك
            التواصل معنا مباشرة عبر واتساب للحصول على أسرع استجابة.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-[#4a5225] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#bea642]"
          >
            <FiMessageCircle className="ml-3" />
            ابدأ المحادثة الآن
          </a>
        </div>

      </div>
    </div>
  )
}