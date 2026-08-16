import { useEffect } from 'react'
import {
  FiPhone,
  FiInstagram,
  FiFacebook,
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

  const contactCards = [
    {
      title: 'واتساب',
      description: 'تواصل مباشرة مع فريق نبراس للحصول على أسرع رد.',
      href: whatsappLink,
      icon: FiMessageCircle,
      iconClass:
        'bg-[#4a5225]/10 text-[#4a5225] group-hover:bg-[#4a5225] group-hover:text-white',
      buttonClass:
        'bg-[#4a5225] text-white hover:bg-[#bea642]',
      buttonIcon: FiPhone,
      buttonText: 'تواصل الآن',
    },
    {
      title: 'انستجرام',
      description: 'تابع أحدث الإصدارات والعروض والمنتجات الجديدة.',
      href: BRAND.social.instagram,
      icon: FiInstagram,
      iconClass:
        'bg-[#bea642]/10 text-[#bea642] group-hover:bg-[#bea642] group-hover:text-white',
      buttonClass:
        'border border-[#bea642] bg-white text-[#4a5225] hover:bg-[#bea642] hover:text-white',
      buttonIcon: FiInstagram,
      buttonText: 'زيارة الحساب',
    },
    {
      title: 'فيسبوك',
      description:
        'تواصل معنا عبر صفحتنا الرسمية واطلع على آخر التحديثات.',
      href:
        'https://www.facebook.com/profile.php?id=100068952963120',
      icon: FiFacebook,
      iconClass:
        'bg-[#4a5225]/10 text-[#4a5225] group-hover:bg-[#4a5225] group-hover:text-white',
      buttonClass:
        'border border-[#4a5225] bg-white text-[#4a5225] hover:bg-[#4a5225] hover:text-white',
      buttonIcon: FiFacebook,
      buttonText: 'زيارة الصفحة',
    },
  ]

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#faf8f2] py-20 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="w-full text-center">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

            <span className="inline-flex items-center justify-center rounded-full bg-[#bea642]/10 px-5 py-2 text-center text-sm font-semibold text-[#bea642]">
              Contact Nebras
            </span>

            <h1 className="mt-6 w-full text-center text-4xl font-bold leading-tight text-[#4a5225] sm:text-5xl lg:text-6xl">
              اتصل بنا
            </h1>

            <p className="mx-auto mt-6 w-full max-w-2xl text-center text-base leading-9 text-gray-600 sm:text-lg">
              فريق نبراس جاهز لمساعدتك في أي استفسار يتعلق بالطلبات،
              المقاسات، الشحن أو المنتجات الجديدة.
            </p>

          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="w-full">
          <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {contactCards.map(
              ({
                title,
                description,
                href,
                icon: Icon,
                iconClass,
                buttonClass,
                buttonIcon: ButtonIcon,
                buttonText,
              }) => (
                <div
                  key={title}
                  className="group flex min-h-[330px] w-full flex-col items-center rounded-[30px] border border-[#e9e1d2] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${iconClass}`}
                  >
                    <Icon size={30} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 w-full text-center text-2xl font-bold text-[#4a5225]">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-4 w-full max-w-xs flex-1 text-center text-base leading-8 text-gray-600">
                    {description}
                  </p>

                  {/* Button */}
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 text-center text-base font-semibold transition-all duration-300 ${buttonClass}`}
                  >
                    <ButtonIcon size={18} />
                    <span>{buttonText}</span>
                  </a>
                </div>
              ),
            )}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="w-full">
          <div className="mx-auto mt-20 flex w-full max-w-5xl flex-col items-center rounded-[36px] border border-[#e9e1d2] bg-white p-8 text-center shadow-sm sm:p-10 lg:p-14">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bea642]/10 text-[#bea642]">
              <FiMessageCircle size={28} />
            </div>

            {/* Heading */}
            <h2 className="mt-6 w-full text-center text-3xl font-bold text-[#4a5225] sm:text-4xl">
              نحن هنا لمساعدتك
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-8 text-gray-600 sm:text-lg">
              يتم الرد على معظم الرسائل خلال ساعات العمل، ويمكنك
              التواصل معنا مباشرة عبر واتساب للحصول على أسرع استجابة.
            </p>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#4a5225] px-8 py-4 text-center text-base font-semibold text-white transition duration-300 hover:bg-[#bea642]"
            >
              <FiMessageCircle size={18} />
              <span>ابدأ المحادثة الآن</span>
            </a>

          </div>
        </section>

      </div>
    </div>
  )
}