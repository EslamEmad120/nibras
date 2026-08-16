import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../services/productsService'
import { useCart } from '../context/CartContext'
import QuantitySelector from '../components/QuantitySelector'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import { setTitle } from '../utils/seo'
import { formatPrice } from '../utils/formatters'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  useEffect(() => {
    let mounted = true

    async function load() {
      setLoading(true)
      try {
        const p = await getProductById(id)
        if (!mounted) return
        setProduct(p || null)
        setSelectedColor(p?.colors?.[0] || null)
        setSelectedSize(p?.sizes?.[0] || null)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [id])

  useEffect(() => {
    if (product) setTitle(`${product.arabicName || product.name} - نبراس`)
  }, [product])

  if (loading) return <LoadingSpinner />

  if (!product) {
    return (
      <div className="py-20">
        <EmptyState title="المنتج غير موجود" description="عذرًا، المنتج الذي طلبته غير متوفر." />
      </div>
    )
  }

  function handleAdd() {
    const forCart = {
      ...product,
      price: product.price || 0,
      discountPrice: product.discountPrice || null,
      currency: product.currency || 'EGP',
      selectedImage: selectedColor?.image,
    }

    addItem(forCart, {
      quantity: qty,
      color: selectedColor?.arabicName || selectedColor?.name,
      size: selectedSize,
    })

    navigate('/cart')
  }

  return (
    <div className="py-10">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2">

        <div>
          <motion.img
            key={selectedColor?.image}
            src={selectedColor?.image}
            alt={product.name || product.arabicName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="h-[550px] w-full rounded-3xl object-cover"
          />

          <div className="mt-4 flex gap-3">
            {product.colors?.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`h-16 w-16 overflow-hidden rounded-xl border transition ${
                  selectedColor?.name === color.name ? 'ring-2 ring-[#bea642]' : 'border-gray-200'
                }`}
              >
                <img src={color.image} alt={color.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="text-right">
          <h1 className="text-4xl font-bold text-[#4a5225]">{product.arabicName}</h1>

          <p className="mt-5 leading-8 text-gray-600">{product.description}</p>

          <div className="mt-5 text-3xl font-bold text-[#bea642]">
            {product.discountPrice ? (
              <>
                {formatPrice(product.discountPrice, product.currency || 'EGP')}
              </>
            ) : product.price && product.price > 0 ? (
              <>
                {formatPrice(product.price, product.currency || 'EGP')}
              </>
            ) : (
              <span className="text-lg text-gray-500">سعر عند الطلب</span>
            )}
          </div>

          <div className="mt-8">
            <p className="mb-3 font-semibold text-[#4a5225]">اللون</p>

            <div className="flex justify-end gap-3">
              {product.colors?.map((color) => {
                const colorHex = (color.hex || '').toLowerCase()
                const isWhite = colorHex === '#fff' || colorHex === '#ffffff' || colorHex === 'white'

                return (
                  <button
                    key={color.name}
                    type="button"
                    title={color.arabicName || color.name}
                    aria-label={color.arabicName || color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`h-10 w-10 rounded-full border-4 transition-all ${
                      selectedColor?.name === color.name ? 'scale-110 border-[#bea642] shadow-md' : 'border-gray-200 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex, borderColor: isWhite ? '#d1d5db' : undefined }}
                  />
                )
              })}
            </div>
          </div>

          {product.sizes?.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 font-semibold text-[#4a5225]">المقاس</p>

              <div className="flex justify-end gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-5 py-2 transition ${
                      selectedSize === size ? 'border-[#bea642] bg-[#bea642] text-white' : 'border-[#e8e2d3] hover:border-[#bea642]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-end gap-4">
            <QuantitySelector value={qty} onChange={setQty} />

            <button type="button" onClick={handleAdd} className="rounded-full bg-[#4a5225] px-8 py-3 font-bold text-white transition hover:bg-[#bea642]">
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
