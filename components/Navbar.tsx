'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#tools', label: 'ツール一覧' },
  { href: '#pricing', label: '料金プラン' },
  { href: '#roadmap', label: 'ロードマップ' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#0a0a1a]/95 shadow-sm' : 'bg-[#0a0a1a]/80'} backdrop-blur-md`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12 lg:px-16">
        <a href="/" className="flex items-center gap-2.5 text-lg font-black text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F5A623] text-sm text-white shadow-sm">🐻</span>
          <span>GASおじラボ</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-[13px] font-semibold text-white/55 transition-colors hover:bg-white/5 hover:text-[#FF6B35]"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3 h-5 w-px bg-[#3D2B1F]/10" />
          <a
            href="https://note.com/yuyukuma_gasoji/membership"
            className="ml-3 rounded-lg bg-[#FF6B35] px-5 py-2 text-[13px] font-bold text-white shadow-sm shadow-[#FF6B35]/15 transition-all hover:bg-[#e55a28] hover:shadow-md hover:-translate-y-px"
          >
            メンバーシップに参加
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="メニュー" aria-expanded={open}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#3D2B1F]/5 bg-[#0a0a1a]/95 px-6 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium text-white/60 hover:text-[#FF6B35]">
              {link.label}
            </a>
          ))}
          <a href="https://note.com/yuyukuma_gasoji/membership" className="mt-2 block rounded-lg bg-[#FF6B35] px-5 py-2.5 text-center text-sm font-bold text-white">
            メンバーシップに参加
          </a>
        </div>
      )}
    </nav>
  )
}
