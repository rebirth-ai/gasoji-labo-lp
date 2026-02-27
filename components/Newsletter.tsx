'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: GASメルマガシステム連携
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-br from-[#FF6B35] to-[#F5A623] p-10 text-center text-white shadow-2xl shadow-[#FF6B35]/20 md:p-14">
          <div className="mb-4 text-4xl">🎁</div>
          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            無料GASツールをプレゼント！
          </h2>
          <p className="mb-8 text-lg text-white/80">
            メルマガ登録で、すぐに使えるGASツールを1つ無料でお届けします。
            <br />
            さらに毎週、GAS活用テクニックを配信中！
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-sm">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-xl font-bold">登録ありがとうございます！</p>
              <p className="mt-2 text-white/80">メールを確認してください。</p>
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
                className="rounded-full bg-white px-8 py-4 font-black text-[#FF6B35] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                無料で受け取る →
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/50">
            ※ いつでも配信停止可能です。スパムは送りません。
          </p>
        </div>
      </div>
    </section>
  )
}
