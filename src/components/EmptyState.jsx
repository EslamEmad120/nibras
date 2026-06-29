export default function EmptyState({ title = 'لا توجد بيانات', description = '' }) {
  return (
    <div className="p-8 text-center text-gray-600">
      <h3 className="font-semibold mb-2">{title}</h3>
      {description && <p className="text-sm">{description}</p>}
    </div>
  )
}
