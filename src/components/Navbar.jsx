import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import img from '../assets/logo.png'

export default function Navbar() {
  const { items } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  )

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e2d3] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={img}
            alt="Nebras"
            className="h-14 object-contain"
          />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-[#4a5225] transition hover:text-[#bea642]">
            الرئيسية
          </Link>

          <Link to="/shop" className="text-[#4a5225] transition hover:text-[#bea642]">
            المتجر
          </Link>

          <Link to="/about" className="text-[#4a5225] transition hover:text-[#bea642]">
            من نحن
          </Link>

          <Link to="/contact" className="text-[#4a5225] transition hover:text-[#bea642]">
            اتصل بنا
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Cart */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full border border-[#e8e2d3] bg-[#faf8f2] p-3 text-[#4a5225]"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-[#e8e2d3] bg-white px-6 py-4">
          <div className="flex flex-col gap-4 text-sm font-medium">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-[#4a5225] hover:text-[#bea642]"
            >
              الرئيسية
            </Link>

            <Link
              to="/shop"
              onClick={closeMenu}
              className="text-[#4a5225] hover:text-[#bea642]"
            >
              المتجر
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-[#4a5225] hover:text-[#bea642]"
            >
              من نحن
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-[#4a5225] hover:text-[#bea642]"
            >
              اتصل بنا
            </Link>

          </div>
        </nav>
      )}
    </header>
  )
}