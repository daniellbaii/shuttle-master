import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on('routeChangeComplete', close)
    window.addEventListener('resize', close)
    return () => {
      router.events.off('routeChangeComplete', close)
      window.removeEventListener('resize', close)
    }
  }, [router])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/shop', label: 'Shop' },
    { href: '/articles', label: 'Articles' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header>
      <nav className="container">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image src="/favicon_io/android-chrome-512x512.png" alt="Shuttle Master Logo" width={28} height={28} />
          <span>Shuttle Master</span>
        </Link>
        <button
          className={`nav-toggle${open ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          &#9776;
        </button>
        <ul className="nav-links">
          {navLinks.map(({ href, label }) => (
            <li key={href} className={router.pathname === href ? 'active' : ''}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <ul className={open ? 'mobile-nav show' : 'mobile-nav'}>
          {navLinks.map(({ href, label }) => (
            <li key={href} onClick={() => setOpen(false)} className={router.pathname === href ? 'active' : ''}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
