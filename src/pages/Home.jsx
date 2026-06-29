import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import sampleProducts from '../data/sampleProducts'
import { setTitle } from '../utils/seo'

export default function Home() {
  const featuredProducts = sampleProducts
    .filter((p) => p.featured)
    .slice(0, 4)

  useEffect(() => {
    setTitle('نبراس | الرئيسية')
  }, [])

  return (
    <div className="min-h-screen bg-[#faf8f2]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3e9] to-[#faf8f2]" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="overflow-hidden rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src={featuredProducts[0]?.colors?.[0]?.image}
                  alt="Nebras"
                  className="h-[650px] w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-right"
            >
              <span className="inline-block rounded-full bg-[#bea642]/15 px-5 py-2 text-sm font-semibold text-[#bea642]">
                NEW COLLECTION 2026
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-[#4a5225] lg:text-7xl">
                أناقة الرجال
                <br />
                تبدأ من التفاصيل
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
                نبراس تقدم تجربة مختلفة في عالم الملابس الرجالية،
                تجمع بين الفخامة والبساطة والهوية العربية العصرية
                في كل قطعة.
              </p>

              <div className="mt-10 flex flex-wrap justify-end gap-4">
                <Link
                  to="/shop"
                  className="rounded-full bg-[#4a5225] px-8 py-4 font-semibold text-white transition hover:bg-[#bea642]"
                >
                  تسوق الآن
                </Link>

                <Link
                  to="/about"
                  className="rounded-full border border-[#bea642] px-8 py-4 font-semibold text-[#4a5225] transition hover:bg-[#bea642] hover:text-white"
                >
                  تعرف علينا
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-[#4a5225]">
                    +500
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    عميل سعيد
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-[#4a5225]">
                    100%
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    خامات عالية الجودة
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-[#4a5225]">
                    24H
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    تجهيز سريع للطلبات
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#bea642]">
              Featured Products
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#4a5225]">
              المنتجات المميزة
            </h2>

            <p className="mt-5 text-gray-600">
              اختر من أفضل القطع المختارة بعناية من نبراس.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex rounded-full bg-[#4a5225] px-8 py-4 font-semibold text-white transition hover:bg-[#bea642]"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <img
  src="https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&w=1400&q=80"
  alt="Business Man"
  className="rounded-[40px] shadow-lg"
/>
            </div>

            <div className="text-right">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#bea642]">
                ABOUT US
              </span>

              <h2 className="mt-5 text-5xl font-bold text-[#4a5225]">
                هوية عربية
                <br />
                بروح عصرية
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                نؤمن أن الملابس ليست مجرد قطعة قماش،
                بل انعكاس للشخصية والهوية.
                لذلك نصنع منتجات تجمع بين الفخامة،
                البساطة، والذوق العربي الحديث.
              </p>

              <Link
                to="/about"
                className="mt-10 inline-flex rounded-full bg-[#4a5225] px-8 py-4 font-semibold text-white transition hover:bg-[#bea642]"
              >
                اقرأ المزيد
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-[#4a5225] px-8 py-20 text-center text-white">

            <span className="text-sm uppercase tracking-[0.3em] text-[#bea642]">
              JOIN US
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              جاهز لتجربة نبراس؟
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/80">
              اكتشف تشكيلتنا الجديدة واستمتع بتجربة تسوق
              مصممة خصيصًا للرجل العصري.
            </p>

            <Link
              to="/shop"
              className="mt-10 inline-flex rounded-full bg-[#bea642] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              ابدأ التسوق الآن
            </Link>

          </div>
        </div>
      </section>

    </div>
  )
}