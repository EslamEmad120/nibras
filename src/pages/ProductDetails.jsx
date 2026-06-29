import {
  useEffect,
  useState,
} from 'react'
import {
  useParams,
  useNavigate,
} from 'react-router-dom'
import sampleProducts from '../data/sampleProducts'
import { useCart } from '../context/CartContext'
import QuantitySelector from '../components/QuantitySelector'
import LoadingSpinner from '../components/LoadingSpinner'
import { setTitle } from '../utils/seo'

export default function ProductDetails() {
  const { id } = useParams()

  const navigate =
    useNavigate()

  const { addItem } =
    useCart()

  const [product, setProduct] =
    useState(null)

  const [qty, setQty] =
    useState(1)

  const [selectedColor, setSelectedColor] =
    useState(null)

  const [selectedSize, setSelectedSize] =
    useState(null)

  useEffect(() => {
    const p =
      sampleProducts.find(
        (item) => item.id === id,
      ) ||
      sampleProducts[0]

    setProduct(p)

    setSelectedColor(
      p.colors?.[0],
    )

    setSelectedSize(
      p.sizes?.[0],
    )
  }, [id])

  if (!product)
    return <LoadingSpinner />

  setTitle(
    `${product.arabicName} - نبراس`,
  )

  function handleAdd() {
    addItem(product, {
      quantity: qty,
      color:
        selectedColor?.arabicName,
      size: selectedSize,
    })

    navigate('/cart')
  }

  return (
    <div className="py-10">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2">

        <div>
          <img
            src={
              selectedColor?.image
            }
            alt={
              product.name
            }
            className="h-[550px] w-full rounded-3xl object-cover"
          />
        </div>

        <div className="text-right">
          <h1 className="text-4xl font-bold text-[#4a5225]">
            {
              product.arabicName
            }
          </h1>

          <p className="mt-5 leading-8 text-gray-600">
            {
              product.description
            }
          </p>

          <div className="mt-5 text-3xl font-bold text-[#bea642]">
            {product.discountPrice ||
              product.price}{' '}
            {
              product.currency
            }
          </div>

          {/* colors */}
          <div className="mt-8">
            <p className="mb-3 font-semibold text-[#4a5225]">
              اللون
            </p>

            <div className="flex justify-end gap-3">
              {product.colors.map(
                (
                  color,
                ) => (
                  <button
                    key={
                      color.name
                    }
                    onClick={() =>
                      setSelectedColor(
                        color,
                      )
                    }
                    className={`h-10 w-10 rounded-full border-4 ${
                      selectedColor?.name ===
                      color.name
                        ? 'border-[#bea642]'
                        : 'border-gray-200'
                    }`}
                    style={{
                      backgroundColor:
                        color.hex,
                    }}
                  />
                ),
              )}
            </div>
          </div>

          {/* sizes */}
          <div className="mt-8">
            <p className="mb-3 font-semibold text-[#4a5225]">
              المقاس
            </p>

            <div className="flex justify-end gap-2">
              {product.sizes.map(
                (
                  size,
                ) => (
                  <button
                    key={
                      size
                    }
                    onClick={() =>
                      setSelectedSize(
                        size,
                      )
                    }
                    className={`rounded-lg border px-5 py-2 ${
                      selectedSize ===
                      size
                        ? 'border-[#bea642] bg-[#bea642] text-white'
                        : 'border-[#e8e2d3]'
                    }`}
                  >
                    {size}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-4">
            <QuantitySelector
              value={qty}
              onChange={
                setQty
              }
            />

            <button
              onClick={
                handleAdd
              }
              className="rounded-full bg-[#4a5225] px-8 py-3 font-bold text-white hover:bg-[#bea642]"
            >
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}