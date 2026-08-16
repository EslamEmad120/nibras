import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { setTitle } from '../utils/seo'
import { fetchProducts } from '../services/productsService'

export default function Products() {
  const [q, setQ] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTitle('المتجر - نبراس')
  }, [])

  useEffect(() => {
    let mounted = true
    fetchProducts().then((res) => {
      if (!mounted) return
      setProducts(res)
      setLoading(false)
    })

    return () => (mounted = false)
  }, [])

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase()
    if (!text) return products

    return products.filter((product) => {
      if (!product) return false
      const name = (product.name || '').toLowerCase()
      const aname = (product.arabicName || '')

      const inName = name.includes(text) || aname.includes(text)

      const inCategory = (product.category || '').toLowerCase().includes(text)

      const inColors = (product.colors || []).some((c) => (c.name || '').toLowerCase().includes(text))

      return inName || inCategory || inColors
    })
  }, [q, products])

  return (
    <div className="bg-[#faf8f2] py-14">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث عن منتج أو لون..."
              className="w-full rounded-2xl border border-[#e8e2d3] bg-white p-4 pr-12 outline-none focus:border-[#bea642]"
            />

            {q && (
              <button
                onClick={() => setQ('')}
                className="absolute inset-y-0 left-4 flex items-center justify-center rounded-full p-2 text-gray-500"
                aria-label="clear"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-500">جار تحميل المنتجات...</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}