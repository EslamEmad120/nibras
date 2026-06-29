import { createContext, useContext, useEffect, useState } from 'react'
import { BRAND } from '../config/config'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

const STORAGE_KEY = 'nebras_cart_v2'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addItem(product, options = {}) {
    const quantity = options.quantity || 1

    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.color === options.color &&
          item.size === options.size,
      )

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.color === options.color &&
          item.size === options.size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        )
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
          color: options.color || null,
          size: options.size || null,
        },
      ]
    })
  }

  function removeItem(id, color, size) {
  setItems((prev) =>
    prev.filter(
      (i) =>
        !(
          i.id === id &&
          i.color === color &&
          i.size === size
        )
    )
  )
}

function updateQuantity(id, color, size, qty) {
  setItems((prev) =>
    prev.map((i) =>
      i.id === id &&
      i.color === color &&
      i.size === size
        ? {
            ...i,
            quantity: Math.max(1, qty),
          }
        : i
    )
  )
}

  function clearCart() {
    setItems([])
  }

  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      (item.discountPrice || item.price) *
        item.quantity,
    0,
  )

  const delivery =
    items.length > 0
      ? BRAND.deliveryFees
      : 0

  const total = subtotal + delivery

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        delivery,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}