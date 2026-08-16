import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/ordersService'
import { BRAND } from '../config/config'
import { formatPrice } from '../utils/formatters'

export default function Checkout() {
  const {
    items,
    subtotal,
    delivery,
    total,
    clearCart,
  } = useCart()

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    try {
      const payload = {
        customerName: form.name,
        phone: form.phone,
        address: form.address,
        city: form.city,
        notes: form.notes,
        items,
        totalPrice: subtotal,
        deliveryFees: delivery,
        finalPrice: total,
      }

      await createOrder(payload)

      const lines = []

      lines.push('مرحباً، أريد إتمام الطلب التالي:')
      lines.push('')

      items.forEach((item) => {
        lines.push(
          `• ${item.arabicName || item.name} | اللون: ${
            item.color || '-'
          } | المقاس: ${
            item.size || '-'
          } | الكمية: ${item.quantity}`
        )
      })

      lines.push('')
      lines.push(`الاسم: ${form.name}`)
      lines.push(`الهاتف: ${form.phone}`)
      lines.push(`العنوان: ${form.address}`)
      lines.push(`المدينة: ${form.city || '-'}`)
      lines.push(`ملاحظات: ${form.notes || '-'}`)
      lines.push('')
      lines.push(`إجمالي المنتجات: ${formatPrice(subtotal, 'EGP')}`)
      lines.push(`رسوم الشحن: ${formatPrice(delivery, 'EGP')}`)
      lines.push(`الإجمالي النهائي: ${formatPrice(total, 'EGP')}`)

      const message = encodeURIComponent(
        lines.join('\n')
      )

      const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber.replace(
        /[^0-9]/g,
        '',
      )}?text=${message}`

      clearCart()

      window.location.href = whatsappUrl
    } catch (err) {
      console.error(err)
      alert('حدث خطأ أثناء إرسال الطلب')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#faf8f2] pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6">

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#4a5225]">
            إتمام الطلب
          </h1>

          <p className="mt-3 text-gray-500">
            أدخل بياناتك لإرسال الطلب عبر واتساب
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            required
            placeholder="الاسم بالكامل"
            className="w-full rounded-2xl border border-[#e5dcc3] bg-white p-4 text-[#4a5225] outline-none transition focus:border-[#bea642] focus:ring-2 focus:ring-[#bea642]/20"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            required
            placeholder="رقم الهاتف"
            className="w-full rounded-2xl border border-[#e5dcc3] bg-white p-4 text-[#4a5225] outline-none transition focus:border-[#bea642] focus:ring-2 focus:ring-[#bea642]/20"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <input
            required
            placeholder="العنوان بالتفصيل"
            className="w-full rounded-2xl border border-[#e5dcc3] bg-white p-4 text-[#4a5225] outline-none transition focus:border-[#bea642] focus:ring-2 focus:ring-[#bea642]/20"
            value={form.address}
            onChange={(e) =>
              setForm({
                ...form,
                address: e.target.value,
              })
            }
          />

          <input
            placeholder="المدينة"
            className="w-full rounded-2xl border border-[#e5dcc3] bg-white p-4 text-[#4a5225] outline-none transition focus:border-[#bea642] focus:ring-2 focus:ring-[#bea642]/20"
            value={form.city}
            onChange={(e) =>
              setForm({
                ...form,
                city: e.target.value,
              })
            }
          />

          <textarea
            rows={5}
            placeholder="ملاحظات إضافية (اختياري)"
            className="w-full rounded-2xl border border-[#e5dcc3] bg-white p-4 text-[#4a5225] outline-none transition focus:border-[#bea642] focus:ring-2 focus:ring-[#bea642]/20"
            value={form.notes}
            onChange={(e) =>
              setForm({
                ...form,
                notes: e.target.value,
              })
            }
          />

          <div className="rounded-3xl border border-[#e5dcc3] bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#4a5225]">
              ملخص الطلب
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>إجمالي المنتجات</span>
                <span>{formatPrice(subtotal, 'EGP')}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>رسوم الشحن</span>
                <span>{formatPrice(delivery, 'EGP')}</span>
              </div>

              <hr className="border-[#e5dcc3]" />

              <div className="flex justify-between text-xl font-bold text-[#4a5225]">
                <span>الإجمالي النهائي</span>
                <span>{formatPrice(total, 'EGP')}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-[#4a5225] py-4 font-bold text-white transition duration-300 hover:bg-[#bea642] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? 'جارٍ إرسال الطلب...'
              : 'إرسال الطلب عبر واتساب'}
          </button>

        </form>
      </div>
    </div>
  )
}