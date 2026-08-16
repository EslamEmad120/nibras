import { useEffect } from 'react'
import {
  FiAward,
  FiFeather,
  FiShield,
} from 'react-icons/fi'

import { setTitle } from '../utils/seo'

export default function About() {
  useEffect(() => {
    setTitle('من نحن - نبراس')
  }, [])

  return (
    <div className="min-h-screen bg-[#faf8f2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#bea642]/10 px-5 py-2 text-sm font-semibold text-[#bea642]">
            About Nebras
          </span>

          <h1 className="mt-5 text-4xl font-bold text-[#4a5225] sm:text-5xl lg:text-6xl">
            قصة نبراس
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-gray-600 sm:text-lg">
            نبراس ليست مجرد علامة ملابس رجالية، بل رؤية تجمع بين البساطة والفخامة لتقديم تجربة مختلفة للرجل العصري.
            نؤمن أن الأناقة الحقيقية تكمن في التفاصيل الدقيقة، والخامات الممتازة، والتصاميم التي تعكس الثقة والهوية.
          </p>
        </div>

        {/* Image + Text */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
              alt="Nebras"
              className="h-[420px] w-full rounded-[40px] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:h-[500px]"
            />
          </div>

          <div className="text-center lg:text-right">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.28em] text-[#bea642]">
              Our Vision
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#4a5225] sm:text-4xl">
              أناقة تعكس شخصيتك
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              نعمل على تصميم منتجات تمنحك حضوراً قوياً دون مبالغة، وتعكس التوازن بين البساطة والرقي.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              كل قطعة في نبراس يتم اختيار خاماتها بعناية لتوفر الراحة والجودة والمظهر الأنيق في الوقت نفسه.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="rounded-full bg-[#4a5225] px-6 py-3 text-white">
                جودة عالية
              </div>

              <div className="rounded-full bg-[#bea642] px-6 py-3 text-white">
                تصميم عصري
              </div>

              <div className="rounded-full border border-[#bea642] px-6 py-3 text-[#4a5225]">
                هوية عربية
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4a5225]/10 text-[#4a5225] transition group-hover:bg-[#4a5225] group-hover:text-white">
              <FiAward size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#4a5225]">
              الجودة
            </h3>

            <p className="mt-4 text-base leading-8 text-gray-600">
              خامات مختارة بعناية وتصنيع احترافي يضمن أفضل تجربة استخدام ممكنة.
            </p>
          </div>

          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#bea642]/10 text-[#bea642] transition group-hover:bg-[#bea642] group-hover:text-white">
              <FiFeather size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#4a5225]">
              التصميم
            </h3>

            <p className="mt-4 text-base leading-8 text-gray-600">
              تصاميم تجمع بين الهوية العربية والاتجاهات العالمية الحديثة.
            </p>
          </div>

          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4a5225]/10 text-[#4a5225] transition group-hover:bg-[#4a5225] group-hover:text-white">
              <FiShield size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#4a5225]">
              الثقة
            </h3>

            <p className="mt-4 text-base leading-8 text-gray-600">
              تجربة شراء سهلة وآمنة مع دعم سريع وخدمة عملاء مميزة.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 rounded-[40px] border border-[#ece5d3] bg-white p-8 text-center shadow-sm sm:p-10 lg:p-12">
          <h2 className="text-2xl font-bold leading-relaxed text-[#4a5225] sm:text-3xl">
            "الأناقة ليست في كثرة التفاصيل، بل في اختيار التفاصيل الصحيحة."
          </h2>

          <p className="mt-6 text-base text-gray-500 sm:text-lg">
            — فلسفة نبراس
          </p>
        </div>
      </div>
    </div>
  )
}