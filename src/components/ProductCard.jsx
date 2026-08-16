import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatters'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const defaultColor =
    product.colors?.length > 0
      ? product.colors[0]
      : null

  const [selectedColor, setSelectedColor] =
    useState(defaultColor)

  const image =
    selectedColor?.image ||
    product.images?.[0] ||
    ''

  function handleAddToCart() {
    const forCart = {
      ...product,
      price: product.price || 0,
      discountPrice: product.discountPrice || null,
      currency: product.currency || 'EGP',
      selectedImage: image,
    }

    addItem(forCart, {
      quantity: 1,
      color: selectedColor?.arabicName,
      size: product.sizes?.[0] || null,
    })
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{
        type: 'spring',
        stiffness: 250,
      }}
      className="overflow-hidden rounded-3xl border border-[#e8e2d3] bg-white shadow-sm hover:shadow-lg transition"
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <motion.img
            key={image}
            src={image}
            alt={product.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {product.bestSeller && (
          <div className="absolute top-4 left-4 rounded-full bg-[#bea642] px-3 py-1 text-xs font-bold text-white">
            الأكثر مبيعًا
          </div>
        )}
      </div>

      <div className="p-6 text-right">
        <p className="text-xs text-gray-500">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 text-lg font-bold text-[#4a5225] hover:text-[#bea642] transition">
            {product.arabicName}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-7 text-gray-600 line-clamp-3">
          {product.description}
        </p>

        {/* colors */}
        <div className="mt-4 flex justify-end gap-3">
          {product.colors?.map((color) => {
            const isLight = ['#fff', '#ffffff', '#fffaf2'].includes((color.hex || '').toLowerCase())
            return (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                aria-label={`اختار ${color.name}`}
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-shadow duration-150 ${
                  selectedColor?.name === color.name
                    ? 'ring-2 ring-[#bea642] scale-110 shadow-md'
                    : 'border-gray-200'
                }`}
                style={{
                  backgroundColor: color.hex,
                  borderColor: isLight ? '#e5e7eb' : undefined,
                }}
              />
            )
          })}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-lg font-bold text-[#111827]">
            {product.discountPrice ? (
              <>
                <span>
                  {formatPrice(product.discountPrice, product.currency || 'EGP')}
                </span>

                <span className="mr-2 text-sm text-gray-400 line-through">
                  {formatPrice(product.price, product.currency || 'EGP')}
                </span>
              </>
            ) : product.price && product.price > 0 ? (
              <>
                {formatPrice(product.price, product.currency || 'EGP')}
              </>
            ) : (
              <span className="text-sm text-gray-500">سعر عند الطلب</span>
            )}
          </div>

          <div className="flex gap-2">
            <Link
              to={`/product/${product.id}`}
              className="rounded-full border border-[#e8e2d3] p-2 text-[#4a5225]"
            >
              <FiEye />
            </Link>

            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 rounded-full bg-[#4a5225] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#bea642]"
            >
              <FiShoppingCart />
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}