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
    <div className="min-h-screen bg-[#faf8f2] pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}
        <div className="text-center">
          <span className="rounded-full bg-[#bea642]/10 px-5 py-2 text-sm font-semibold text-[#bea642]">
            About Nebras
          </span>

          <h1 className="mt-5 text-5xl font-bold text-[#4a5225]">
            قصة نبراس
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            نبراس ليست مجرد علامة ملابس رجالية، بل رؤية تجمع بين
            البساطة والفخامة لتقديم تجربة مختلفة للرجل العصري.
            نؤمن أن الأناقة الحقيقية تكمن في التفاصيل الدقيقة،
            والخامات الممتازة، والتصاميم التي تعكس الثقة والهوية.
          </p>
        </div>

        {/* Image + Text */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

          <div>
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
              alt="Nebras"
              className="h-[500px] w-full rounded-[40px] object-cover shadow-lg"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#bea642]">
              Our Vision
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#4a5225]">
              أناقة تعكس شخصيتك
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              نعمل على تصميم منتجات تمنحك حضوراً قوياً دون مبالغة،
              وتعكس التوازن بين البساطة والرقي.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              كل قطعة في نبراس يتم اختيار خاماتها بعناية لتوفر
              الراحة والجودة والمظهر الأنيق في الوقت نفسه.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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

            <p className="mt-4 leading-8 text-gray-600">
              خامات مختارة بعناية وتصنيع احترافي يضمن
              أفضل تجربة استخدام ممكنة.
            </p>
          </div>

          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#bea642]/10 text-[#bea642] transition group-hover:bg-[#bea642] group-hover:text-white">
              <FiFeather size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#4a5225]">
              التصميم
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              تصاميم تجمع بين الهوية العربية
              والاتجاهات العالمية الحديثة.
            </p>
          </div>

          <div className="group rounded-[32px] border border-[#ece5d3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4a5225]/10 text-[#4a5225] transition group-hover:bg-[#4a5225] group-hover:text-white">
              <FiShield size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#4a5225]">
              الثقة
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              تجربة شراء سهلة وآمنة مع دعم سريع
              وخدمة عملاء مميزة.
            </p>
          </div>

        </div>

        {/* Quote */}
        <div className="mt-20 rounded-[40px] border border-[#ece5d3] bg-white p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold leading-relaxed text-[#4a5225]">
            "الأناقة ليست في كثرة التفاصيل،
            بل في اختيار التفاصيل الصحيحة."
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            — فلسفة نبراس
          </p>
        </div>

      </div>
    </div>
  )
}