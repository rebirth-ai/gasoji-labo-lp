'use client'

const CURRENT_TOOLS = 10
const TOTAL_TOOLS = 500
const NEXT_PRICE_UP = 50
const CURRENT_PRICE = 980

export default function ToolCounter() {
  const progress = (CURRENT_TOOLS / TOTAL_TOOLS) * 100
  const toolsUntilPriceUp = NEXT_PRICE_UP - CURRENT_TOOLS

  return (
    <section className="px-6 py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-gray-200 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <h2 className="text-2xl font-black text-white md:text-3xl">ツール公開状況</h2>
          </div>

          {/* Counter */}
          <div className="mb-4 flex items-end gap-2">
            <span className="text-6xl font-black text-[#FF6B35] md:text-7xl">{CURRENT_TOOLS}</span>
            <span className="mb-2 text-2xl font-bold text-gray-600">/ {TOTAL_TOOLS}</span>
            <span className="mb-2 text-lg font-medium text-gray-600">ツール公開中</span>
          </div>

          {/* Progress bar */}
          <div className="mb-4 h-4 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F5A623] transition-all duration-1000"
              style={{ width: `${Math.max(progress, 2)}%` }}
            />
          </div>

          {/* Info cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
              <div className="text-sm font-medium text-gray-600">現在の価格</div>
              <div className="text-3xl font-black text-[#FF6B35]">¥{CURRENT_PRICE.toLocaleString()}</div>
              <div className="text-sm text-gray-600">/月</div>
            </div>
            <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-5 text-center">
              <div className="text-sm font-medium text-red-400">次の値上げまで</div>
              <div className="text-3xl font-black text-red-400">あと{toolsUntilPriceUp}個</div>
              <div className="text-sm text-red-400/70">ツール公開で+¥1,000</div>
            </div>
            <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-5 text-center">
              <div className="text-sm font-medium text-green-400">早期加入特典</div>
              <div className="text-2xl font-black text-green-400">永久据え置き</div>
              <div className="text-sm text-green-400/70">今の価格でずっと使える！</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
