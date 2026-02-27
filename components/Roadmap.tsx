const ROADMAP = [
  { phase: 'Phase 1', period: '2026年3月', tools: '10→30ツール', items: ['SNS自動化セット', 'AI文章生成パック', '基本CRMツール'], status: 'active' },
  { phase: 'Phase 2', period: '2026年4月', tools: '30→80ツール', items: ['経理・財務パック', '人事・労務ツール', 'データ分析ダッシュボード'], status: 'planned' },
  { phase: 'Phase 3', period: '2026年5月', tools: '80→150ツール', items: ['営業自動化フル', 'マーケオートメーション', 'Eコマース連携'], status: 'planned' },
  { phase: 'Phase 4', period: '2026年下半期', tools: '150→500ツール', items: ['業界別テンプレート', 'エンタープライズ機能', 'API連携キット'], status: 'planned' },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            <span className="text-[#FF6B35]">ロードマップ</span>
          </h2>
          <p className="text-lg text-[#3D2B1F]/60">今後追加予定のツール一覧。期待してください。</p>
        </div>

        {/* Roadmap visual */}
        <div className="mb-12">
          <img
            src="/roadmap.png"
            alt="500ツールへの道のり - 段階的値上げロードマップ"
            className="w-full rounded-2xl shadow-lg border border-[#FF6B35]/10"
          />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B35] to-[#F5A623]/20 md:left-1/2" />

          {ROADMAP.map((item, i) => (
            <div key={item.phase} className={`relative mb-12 flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`h-4 w-4 rounded-full border-4 border-white ${item.status === 'active' ? 'bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/30' : 'bg-[#3D2B1F]/20'}`} />
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`rounded-2xl p-6 ${item.status === 'active' ? 'bg-[#FF6B35]/5 border border-[#FF6B35]/20' : 'bg-[#FFF8F0] border border-[#3D2B1F]/5'}`}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${item.status === 'active' ? 'bg-[#FF6B35] text-white' : 'bg-[#3D2B1F]/10 text-[#3D2B1F]/50'}`}>
                      {item.phase}
                    </span>
                    <span className="text-sm text-[#3D2B1F]/50">{item.period}</span>
                  </div>
                  <div className="mb-3 text-lg font-black text-[#FF6B35]">{item.tools}</div>
                  <ul className="space-y-1">
                    {item.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-[#3D2B1F]/70">
                        <span className="text-[#FF6B35]">→</span> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
