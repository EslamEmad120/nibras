export function formatPrice(value, currency = 'EGP') {
  const numeric = Number(value ?? 0)
  const formatted = Number.isFinite(numeric)
    ? numeric.toLocaleString('ar-EG', { maximumFractionDigits: 0 })
    : '0'

  if (currency === 'EGP') return `${formatted} ج.م`
  return `${formatted} ${currency}`
}
