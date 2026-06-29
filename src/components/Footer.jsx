import { BRAND } from '../config/config'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] text-[#cfc4dc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-[#f7f1ff]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a866ff]" />
            {BRAND.name}
          </div>
          <p className="max-w-md text-sm leading-8 text-[#b8adc8]">
            تصاميم مميزة للرجال الذين يفضلون الرفاهية والوضوح والهوية الأنيقة في كل تفاصيلهم اليومية.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-white">روابط سريعة</h4>
          <ul className="space-y-2 text-[#b8adc8]">
            <li>الصفحة الرئيسية</li>
            <li>المتجر</li>
            <li>من نحن</li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-white">تواصل معنا</h4>
          <p className="text-[#b8adc8]">WhatsApp: {BRAND.whatsappNumber}</p>
          <p className="text-[#b8adc8]">أكتب لنا لطلب استشارات أو تخصيصات خاصة.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-[#8d819d]">
        © {new Date().getFullYear()} {BRAND.name}. كل الحقوق محفوظة.
      </div>
    </footer>
  )
}
