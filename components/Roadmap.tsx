const ROADMAP = [
  {
    phase: 'Phase 1',
    period: '2026年3月',
    tools: '10→30',
    label: 'ツール',
    items: ['SNS自動化セット', 'AI文章生成パック', '基本CRMツール', 'メール自動化'],
    status: 'active',
    icon: '🚀',
  },
  {
    phase: 'Phase 2',
    period: '2026年4月',
    tools: '30→80',
    label: 'ツール',
    items: ['経理・財務パック', '人事・労務ツール', 'データ分析ダッシュボード', 'Slack/Teams連携'],
    status: 'planned',
    icon: '📈',
  },
  {
    phase: 'Phase 3',
    period: '2026年5月',
    tools: '80→200',
    label: 'ツール',
    items: ['営業自動化フル', 'マーケオートメーション', 'Eコマース連携', '在庫管理システム'],
    status: 'planned',
    icon: '⚡',
  },
  {
    phase: 'Phase 4',
    period: '2026年下半期',
    tools: '200→500',
    label: 'ツール',
    items: ['業界別テンプレート', 'エンタープライズ機能', 'API連携キット', 'カスタムダッシュボード'],
    status: 'planned',
    icon: '👑',
  },
]

const PRICE_STEPS = [
  { tools: '10', price: '¥980', active: true },
  { tools: '50', price: '¥1,480', active: false },
  { tools: '100', price: '¥1,980', active: false },
  { tools: '200', price: '¥2,980', active: false },
  { tools: '500', price: '¥4,980', active: false },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-12 md:py-28 bg-[#1a1a2e]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.1em] text-[#FF6B35] uppercase">ロードマップ</p>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            <span className="text-[#FF6B35]">500ツール</span>への道のり
          </h2>
          <p className="text-lg text-white/60">段階的にツール追加 → 段階的に値上げ。早期加入ほどお得。</p>
        </div>

        {/* Price step bar */}
        <div className="mb-16 rounded-2xl bg-slate-800/90 border border-white/[0.3] p-6 md:p-8">
          <p className="mb-4 text-center text-sm font-bold text-white/70 tracking-wide">段階的値上げスケジュール</p>
          <div className="flex items-center justify-between gap-1">
            {PRICE_STEPS.map((s, i) => (
              <div key={s.tools} className="flex-1 text-center">
                <div className={`mx-auto mb-2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full text-xs md:text-sm font-black ${
                  s.active
                    ? 'bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/30 ring-4 ring-[#FF6B35]/20'
                    : 'bg-white/10 text-white/60'
                }`}>
                  {s.tools}
                </div>
                <div className={`text-xs md:text-sm font-bold ${s.active ? 'text-[#FF6B35]' : 'text-white/60'}`}>
                  {s.price}
                </div>
                {s.active && (
                  <div className="mt-1 text-[10px] font-bold text-[#FF6B35] animate-pulse">← 今ここ!</div>
                )}
                {i < PRICE_STEPS.length - 1 && (
                  <div className="hidden" /> /* connector handled by flex gap */
                )}
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F5A623] transition-all" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-white/70">
            <span>現在 10ツール</span>
            <span>目標 500ツール</span>
          </div>
        </div>

        {/* RPG Illustration — 透過で背景に馴染ませる */}
        <div className="relative mb-16 -mx-6 md:-mx-12">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1a1a2e] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1a1a2e] to-transparent z-10" />
          <img
            src="/roadmap-illustration.png"
            alt="500ツールへの冒険マップ"
            className="w-full h-auto opacity-90"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B35] via-[#F5A623] to-white/10 md:left-1/2" />

          {ROADMAP.map((item, i) => (
            <div key={item.phase} className={`relative mb-12 last:mb-0 ${i % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#1a1a2e] text-sm ${
                  item.status === 'active'
                    ? 'bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/30'
                    : 'bg-white/10 border-white/10'
                }`}>
                  {item.icon}
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-14 md:ml-0`}>
                <div className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                  item.status === 'active'
                    ? 'bg-gradient-to-br from-[#FF6B35]/5 to-[#F5A623]/5 border-2 border-[#FF6B35]/20 shadow-md'
                    : 'bg-slate-800/90 border border-white/[0.3]'
                }`}>
                  <div className="mb-3 flex items-center gap-2 flex-wrap">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                      item.status === 'active'
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-white/10 text-white/70'
                    }`}>
                      {item.phase}
                    </span>
                    <span className="text-sm text-white/70">{item.period}</span>
                    {item.status === 'active' && (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">進行中</span>
                    )}
                  </div>
                  <div className="mb-3 text-2xl font-black text-[#FF6B35]">
                    {item.tools}<span className="text-base font-bold text-white/60 ml-1">{item.label}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]/40 shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg font-bold text-white">
            今なら<span className="text-[#FF6B35]">月額980円</span>で永久据え置き
          </p>
          <p className="text-sm text-white/70">500ツール到達時の¥4,980が、今の加入者はずっと¥980。</p>
        </div>
      </div>
    </section>
  )
}
