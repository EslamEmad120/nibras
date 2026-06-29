import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FiShoppingCart, FiMenu } from 'react-icons/fi'
import img from '../assets/logo.png'

export default function Navbar() {
  const { items } = useCart()

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  )

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e2d3] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/">
          <img
            src={img}
            alt="Nebras"
            className="h-14 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className="text-[#4a5225] transition hover:text-[#bea642]"
          >
            الرئيسية
          </Link>

          <Link
            to="/shop"
            className="text-[#4a5225] transition hover:text-[#bea642]"
          >
            المتجر
          </Link>

          <Link
            to="/about"
            className="text-[#4a5225] transition hover:text-[#bea642]"
          >
            من نحن
          </Link>

          <Link
            to="/contact"
            className="text-[#4a5225] transition hover:text-[#bea642]"
          >
            اتصل بنا
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative rounded-full border border-[#e8e2d3] bg-[#faf8f2] p-3 text-[#4a5225]"
          >
            <FiShoppingCart size={20} />

            {count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#bea642] px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>

          <button className="md:hidden rounded-full border border-[#e8e2d3] bg-[#faf8f2] p-3 text-[#4a5225]">
            <FiMenu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}