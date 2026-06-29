import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import QuantitySelector from '../components/QuantitySelector'
import EmptyState from '../components/EmptyState'

export default function Cart() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    delivery,
    total,
  } = useCart()

  const navigate = useNavigate()

  if (!items.length) {
    return (
      <div className="min-h-screen bg-[#faf8f2] py-20">
        <EmptyState
          title="السلة فارغة"
          description="أضف بعض المنتجات لتبدأ التسوق"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf8f2] pt-16 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* العنوان */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#4a5225]">
            سلة التسوق
          </h1>

          <p className="mt-3 text-gray-500">
            لديك {items.length} منتج في السلة
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          {/* المنتجات */}
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.color}-${item.size}`}
                className="rounded-3xl border border-[#ebe5d6] bg-white p-6 shadow-sm"
              >
                <div className="flex gap-5">

                  <img
                    src={
                      item.selectedImage ||
                      item.image ||
                      item.images?.[0] ||
                      item.colors?.[0]?.image
                    }
                    alt={item.name}
                    className="h-32 w-28 rounded-2xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">

                    <div>
                      <h3 className="text-xl font-bold text-[#4a5225]">
                        {item.arabicName || item.name}
                      </h3>

                      <p className="mt-3 text-gray-500">
                        اللون: {item.color || '-'}
                      </p>

                      <p className="mt-1 text-gray-500">
                        المقاس: {item.size || '-'}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(v) =>
  updateQuantity(
    item.id,
    item.color,
    item.size,
    v
  )
}
                      />

                      <button
                        onClick={() =>
  removeItem(
    item.id,
    item.color,
    item.size
  )
}
                        className="text-red-500 transition hover:text-red-700"
                      >
                        حذف
                      </button>
                    </div>
                  </div>

                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#4a5225]">
                      {(item.discountPrice || item.price) * item.quantity}{' '}
                      {item.currency}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="h-fit rounded-3xl border border-[#ebe5d6] bg-white p-6 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold text-[#4a5225]">
              ملخص الطلب
            </h2>

            <div className="space-y-5 text-gray-600">
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span>{subtotal} ريال</span>
              </div>

              <div className="flex justify-between">
                <span>الشحن</span>
                <span>{delivery} ريال</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-[#4a5225]">
                <span>الإجمالي</span>
                <span>{total} ريال</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="mt-8 w-full rounded-full bg-[#4a5225] py-4 font-semibold text-white transition hover:bg-[#bea642]"
            >
              إكمال الطلب
            </button>

            <button
              onClick={clearCart}
              className="mt-4 w-full rounded-full border border-[#bea642] py-4 font-semibold text-[#4a5225] transition hover:bg-[#bea642] hover:text-white"
            >
              تفريغ السلة
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}