'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/news', label: 'News' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header fixed top-0 left-0 right-0 z-40 header-height">
      <div className="container-max px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className=" flex items-center justify-center">
            <Image src="/ChipaLogoFinal.png" alt="Chipaso logo" width={120} height={60} className="object-contain" priority />
          </div>
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[#dfe9ee] text-sm">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`py-3 nav-link ${pathname === item.href ? 'text-white font-semibold' : 'text-[#dfe9ee] hover:text-white/90'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#22304a] text-white focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            {menuOpen ? (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex gap-3 items-center">
          <Link href="/contact" className="btn-accent">Get Started</Link>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <nav
        className={`md:hidden bg-[#081026] text-[#dfe9ee] text-base px-6 py-4 absolute top-full left-0 right-0 shadow-lg transition-all duration-200 ${menuOpen ? 'block' : 'hidden'}`}
        style={{ zIndex: 50 }}
      >
        <div className="flex flex-col gap-4">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`py-2 nav-link ${pathname === item.href ? 'text-white font-semibold' : 'text-[#dfe9ee] hover:text-white/90'}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-accent w-full text-center mt-2" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}