export default function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`bg-black text-white px-4 py-2 rounded-md hover:opacity-90 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}
