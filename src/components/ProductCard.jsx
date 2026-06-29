import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

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
    addItem(product, {
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
          <img
            src={image}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 hover:scale-105"
          />
        </Link>

        {product.bestSeller && (
          <div className="absolute top-4 left-4 rounded-full bg-[#bea642] px-3 py-1 text-xs font-bold text-white">
            الأكثر مبيعًا
          </div>
        )}
      </div>

      <div className="p-5 text-right">
        <p className="text-xs text-gray-500">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 text-lg font-bold text-[#4a5225] hover:text-[#bea642] transition">
            {product.arabicName}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {product.description}
        </p>

        {/* colors */}
        <div className="mt-4 flex justify-end gap-2">
          {product.colors?.map((color) => (
            <button
              key={color.name}
              onClick={() =>
                setSelectedColor(color)
              }
              className={`h-7 w-7 rounded-full border-2 transition ${
                selectedColor?.name ===
                color.name
                  ? 'border-[#bea642] scale-110'
                  : 'border-gray-300'
              }`}
              style={{
                backgroundColor:
                  color.hex,
              }}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-lg font-bold text-[#4a5225]">
            {product.discountPrice ? (
              <>
                <span>
                  {
                    product.discountPrice
                  }{' '}
                  {product.currency}
                </span>

                <span className="mr-2 text-sm text-gray-400 line-through">
                  {product.price}
                </span>
              </>
            ) : (
              <>
                {product.price}{' '}
                {product.currency}
              </>
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