import { useEffect } from 'react'
import { setTitle } from '../utils/seo'

export default function Privacy() {
  useEffect(() => setTitle('سياسة الخصوصية - نبراس'), [])

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-bold">سياسة الخصوصية</h1>
        <p className="mt-4 text-gray-700">سياسة الخصوصية الخاصة بالمتجر.</p>
      </div>
    </div>
  )
}
