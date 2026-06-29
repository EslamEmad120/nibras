import { useEffect } from 'react'
import { setTitle } from '../utils/seo'

export default function FAQ() {
  useEffect(() => setTitle('الأسئلة الشائعة - نبراس'), [])

    return (
      <div className="w-full py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">الأسئلة الشائعة</h1>
          <div className="mt-4">سيتم إضافة الأسئلة الشائعة هنا.</div>
        </div>
      </div>
    )
}
