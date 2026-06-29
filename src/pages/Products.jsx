import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import sampleProducts from '../data/sampleProducts'
import { setTitle } from '../utils/seo'

export default function Products() {
  const [q, setQ] = useState('')

  useEffect(() => {
    setTitle('المتجر - نبراس')
  }, [])

  const filtered = useMemo(() => {
    return sampleProducts.filter(
      (product) =>
        product.arabicName.includes(q) ||
        product.name.toLowerCase().includes(q.toLowerCase())
    )
  }, [q])

  return (
    <div className="bg-[#faf8f2] py-14">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن منتج..."
            className="w-full rounded-2xl border border-[#e8e2d3] bg-white p-4 outline-none focus:border-[#bea642]"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}