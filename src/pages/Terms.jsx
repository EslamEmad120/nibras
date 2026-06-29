import { useEffect } from 'react'
import { setTitle } from '../utils/seo'

export default function Terms() {
  useEffect(() => setTitle('الشروط والأحكام - نبراس'), [])

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-bold">الشروط والأحكام</h1>
        <p className="mt-4 text-gray-700">شروط استخدام الموقع والمتجر.</p>
      </div>
    </div>
  )
}
