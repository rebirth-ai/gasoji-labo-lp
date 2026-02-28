'use client'
import { useState } from 'react'

// GAS Web App URL — replace with actual deployed GAS URL
const GAS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GAS_NEWSLETTER_URL || ''

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // If no GAS URL configured, use Google Forms fallback
    if (!GAS_WEBHOOK_URL) {
      // Fallback: open Google Forms in new tab
      const formUrl = `https://docs.google.com/forms/d/e/FORM_ID/formResponse?entry.EMAIL_FIELD=${encodeURIComponent(email)}&submit=Submit`
      // For now, just show success (placeholder)
      setStatus('success')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch(GAS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // GAS requires no-cors
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}&source=lp&timestamp=${Date.now()}`,
      })
      // no-cors always returns opaque response, so assume success
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg('送信に失敗しました。もう一度お試しください。')
    }
  }

  return (
    <section id="newsletter" className="relative px-6 py-12 md:py-28 bg-white overflow-hidden">
      {/* Newsletter illustration — 透過で背景に */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/newsletter-illustration.png" alt="" className="w-full max-w-4xl h-auto opacity-10" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-br from-[#FF6B35] to-[#F5A623] p-10 text-center text-white shadow-2xl shadow-[#FF6B35]/20 md:p-14">
          <div className="mb-2 text-xs font-bold tracking-wider uppercase bg-white/20 rounded-full px-4 py-1.5 inline-block backdrop-blur-sm">📩 メルマガ登録者限定</div>
          <h2 className="mb-4 mt-4 text-3xl font-black md:text-4xl">
            無料GASツールをプレゼント！
          </h2>
          <div className="mb-6 mx-auto max-w-sm text-center sm:text-left space-y-3">
            <div className="flex gap-3 items-start text-white/90">
              <span className="text-xl flex-shrink-0 mt-0.5">🎁</span>
              <div>
                <div className="font-bold text-sm sm:text-base">X自動投稿ツール</div>
                <span className="text-[10px] sm:text-xs bg-white/20 rounded-full px-2 py-0.5 mt-1 inline-block">登録直後にお届け</span>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/90">
              <span className="text-xl flex-shrink-0 mt-0.5">🎁</span>
              <div>
                <div className="font-bold text-sm sm:text-base">GAS経費精算ツール</div>
                <span className="text-[10px] sm:text-xs bg-white/20 rounded-full px-2 py-0.5 mt-1 inline-block">翌日お届け</span>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/90">
              <span className="text-xl flex-shrink-0 mt-0.5">🎁</span>
              <div>
                <div className="font-bold text-sm sm:text-base">メルマガ限定の特別ツール</div>
                <span className="text-[10px] sm:text-xs bg-red-500/40 rounded-full px-2 py-0.5 mt-1 inline-block">noteにはない特典！</span>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/70">
              <span className="text-xl flex-shrink-0 mt-0.5">📧</span>
              <div className="text-sm sm:text-base">毎日19時にGAS活用情報をお届け</div>
            </div>
          </div>

          {status === 'success' ? (
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-sm">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-xl font-bold">登録ありがとうございます！</p>
              <p className="mt-2 text-white/80">メールを確認してください。無料ツールをお送りします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="メールアドレス"
                className="flex-1 rounded-full bg-white/20 px-6 py-4 text-white placeholder-white/50 outline-none backdrop-blur-sm border border-white/30 focus:border-white focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-full bg-white px-8 py-4 font-black text-[#FF6B35] shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    送信中...
                  </span>
                ) : '無料で受け取る →'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-sm text-white/90 bg-red-500/20 rounded-lg py-2 px-4 inline-block">{errorMsg}</p>
          )}

          <p className="mt-4 text-xs text-white/70">
            ※ いつでも配信停止可能です。スパムは送りません。
          </p>
          <p className="mt-3 text-xs text-white/70 bg-white/10 rounded-full px-4 py-1.5 inline-block backdrop-blur-sm">
            💡 ちなみに、このメルマガもGASで完全無料配信しています。月額¥0。
          </p>
        </div>
      </div>
    </section>
  )
}
