import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/productsService'
import { setTitle } from '../utils/seo'
import home from '../assets/home.jpeg'

function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1200 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let startTime = null
    let frame = null

    function step(timestamp) {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(value * eased))

      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)

    return () => {
      if (frame) cancelAnimationFrame(frame)
    }
  }, [duration, isInView, prefersReducedMotion, value])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

function TypewriterText({ phrases }) {
  const prefersReducedMotion = useReducedMotion()
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases[phraseIndex])
      return
    }

    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, text.length + 1)
        setText(nextText)

        if (nextText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1400)
        }
      } else {
        const nextText = currentPhrase.slice(0, text.length - 1)
        setText(nextText)

        if (nextText === '') {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 60 : 110)

    return () => clearTimeout(timeout)
  }, [isDeleting, phraseIndex, prefersReducedMotion, phrases, text])

  return (
    <span className="inline-flex items-center gap-1">
      <span>{text}</span>
      <span className="inline-block h-8 w-[2px] animate-pulse bg-[#bea642] align-middle md:h-10" aria-hidden="true" />
    </span>
  )
}

export default function Home() {
  const [featuredProducts, setFeatured] = useState([])

  useEffect(() => {
    let mounted = true

    fetchProducts().then((res) => {
      if (!mounted) return

      setFeatured(res.slice(0, 4))
    })

    return () => {
      mounted = false
    }
  }, [])

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

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/*  */}
              <div className="overflow-hidden rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src={home}
                  alt="Nebras"
                  className="h-[650px] w-full object-cover"
                />
              </div>
            </motion.div>

            {/* HERO CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-right"
            >
              <span className="inline-block rounded-full bg-[#bea642]/15 px-5 py-2 text-sm font-semibold text-[#bea642]">
                NEW COLLECTION 2026
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-[#4a5225] lg:text-6xl">
                أناقة الرجال
                <br />
                <span className="inline-flex min-h-[30px] items-center text-[#bea642]">
                  <TypewriterText phrases={[' تبدأ من التفاصيل', 'ستايل يعكس شخصيتك', 'هوية عربية بروح عصرية']} />
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
                نبراس تقدم تجربة مختلفة في عالم الملابس الرجالية،
                تجمع بين الفخامة والبساطة والهوية العربية العصرية
                في كل قطعة.
              </p>

              <div className="mt-10 flex flex-wrap justify-end gap-4">
                <Link
                  to="/shop"
                  className="rounded-full bg-[#4a5225] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#bea642]"
                >
                  تسوق الآن
                </Link>

                <Link
                  to="/about"
                  className="rounded-full border border-[#bea642] px-8 py-4 font-semibold text-[#4a5225] transition duration-300 hover:-translate-y-0.5 hover:bg-[#bea642] hover:text-white"
                >
                  تعرف علينا
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-3xl bg-white p-5 text-center shadow-sm"
                >
                  <h3 className="text-3xl font-bold text-[#4a5225]">
                    <AnimatedCounter value={500} prefix="+" />
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">عميل سعيد</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="rounded-3xl bg-white p-5 text-center shadow-sm"
                >
                  <h3 className="text-3xl font-bold text-[#4a5225]">
                    <AnimatedCounter value={100} suffix="%" />
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">خامات عالية الجودة</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.16 }}
                  className="rounded-3xl bg-white p-5 text-center shadow-sm"
                >
                  <h3 className="text-3xl font-bold text-[#4a5225]">
                    <AnimatedCounter value={24} suffix="H" />
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">تجهيز سريع للطلبات</p>
                </motion.div>
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