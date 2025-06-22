import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  showArrow?: boolean
}

export default function Button({
  href,
  variant = 'primary',
  children,
  onClick,
  className = '',
  showArrow = true,
}: ButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 group overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-600',
    secondary: 'bg-transparent text-white border border-gray-700 hover:bg-gray-800',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <div className="relative z-10 overflow-hidden ml-2">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  )
} 