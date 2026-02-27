const PRICING_TIERS = [
  { tools: '〜50', price: 980, current: true },
  { tools: '51〜100', price: 1980, current: false },
  { tools: '101〜150', price: 2980, current: false },
  { tools: '151〜200', price: 3980, current: false },
  { tools: '201〜250', price: 4980, current: false },
  { tools: '251〜500+', price: 9980, current: false },
]

export default function PricingTable() {
  return (
    <section id="pricing" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            <span className="text-[#FF6B35]">今が最安値。</span>
            <br />
            早期加入で永久据え置き。
          </h2>
          <p className="text-lg text-[#3D2B1F]/60">
            50ツール公開ごとに+¥1,000値上げ。今入れば現在の価格でずっと使える。
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {PRICING_TIERS.slice(0, 3).map((tier) => (
            <div
              key={tier.tools}
              className={`relative rounded-2xl p-8 text-center transition-all ${
                tier.current
                  ? 'bg-gradient-to-br from-[#FF6B35] to-[#F5A623] text-white shadow-2xl shadow-[#FF6B35]/30 scale-105 ring-4 ring-[#FF6B35]/20'
                  : 'bg-white border border-[#3D2B1F]/10 text-[#3D2B1F]'
              }`}
            >
              {tier.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-xs font-black text-white shadow-lg">
                  🔥 今の価格！
                </div>
              )}
              <div className={`mb-2 text-sm font-medium ${tier.current ? 'text-white/80' : 'text-[#3D2B1F]/50'}`}>
                {tier.tools}ツール
              </div>
              <div className="mb-1 flex items-center justify-center gap-1">
                <span className="text-lg">¥</span>
                <span className="text-5xl font-black">{tier.price.toLocaleString()}</span>
              </div>
              <div className={`mb-6 text-sm ${tier.current ? 'text-white/80' : 'text-[#3D2B1F]/50'}`}>
                /月（税込）
              </div>
              {tier.current ? (
                <a
                  href="https://note.com/yuyukuma_gasoji/membership"
                  className="block w-full rounded-full bg-white px-6 py-3 text-sm font-black text-[#FF6B35] shadow-lg transition-all hover:scale-105"
                >
                  今すぐ参加する →
                </a>
              ) : (
                <div className={`text-sm ${tier.current ? 'text-white/60' : 'text-[#3D2B1F]/30'}`}>
                  将来の価格
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Future prices (smaller) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {PRICING_TIERS.slice(3).map((tier) => (
            <div key={tier.tools} className="rounded-xl bg-white/50 border border-[#3D2B1F]/5 px-4 py-2 text-center">
              <span className="text-xs text-[#3D2B1F]/40">{tier.tools}ツール:</span>
              <span className="ml-1 text-sm font-bold text-[#3D2B1F]/50">¥{tier.price.toLocaleString()}/月</span>
            </div>
          ))}
        </div>

        {/* Early bird notice */}
        <div className="mt-12 rounded-2xl bg-green-50 border border-green-200 p-6 text-center">
          <div className="text-2xl mb-2">🎁</div>
          <h3 className="text-xl font-black text-green-700">早期加入者特典</h3>
          <p className="mt-2 text-green-600">
            <strong>今入会すると、¥980/月のまま永久据え置き！</strong>
            <br />
            ツールが500個になっても、あなたの料金は変わりません。
          </p>
        </div>
      </div>
    </section>
  )
}
