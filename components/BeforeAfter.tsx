export default function BeforeAfter() {
  return (
    <section className="px-6 py-12 md:py-28 bg-[#1a1a2e]">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-2xl font-black text-white sm:text-4xl md:text-5xl whitespace-nowrap">
          月額課金 <span className="text-[#FF6B35]">vs</span> GAS無料化
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-3xl bg-white/5 p-8 shadow-lg border border-red-500/20 md:p-10">
            <div className="mb-6 inline-flex rounded-full bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400">
              ❌ SaaS月額課金地獄
            </div>
            <h3 className="mb-6 text-2xl font-black text-white">よくある状態</h3>
            <ul className="space-y-4">
              {[
                { name: 'Buffer・Hootsuite', cost: '年間18万円', pct: 14.5 },
                { name: 'Notion・Asana', cost: '年間30万円', pct: 24 },
                { name: 'Salesforce・HubSpot', cost: '年間60万円', pct: 48 },
                { name: 'その他SaaS', cost: '年間16万円', pct: 13 },
              ].map((item) => (
                <li key={item.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{item.name}</span>
                    <span className="font-bold text-red-400">{item.cost}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-red-500/60" style={{ width: `${item.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <div className="text-sm text-white/50">年間合計</div>
              <div className="text-4xl font-black text-red-400">¥124万円</div>
            </div>
          </div>

          {/* After */}
          <div className="rounded-3xl bg-[#FF6B35]/5 p-8 shadow-lg border border-[#FF6B35]/30 ring-2 ring-[#FF6B35]/10 md:p-10">
            <div className="mb-6 inline-flex rounded-full bg-[#FF6B35]/10 px-4 py-2 text-sm font-bold text-[#FF6B35]">
              ✅ GAS革命後
            </div>
            <h3 className="mb-6 text-2xl font-black text-white">完全無料の自由</h3>
            <ul className="space-y-4">
              {[
                'SNS自動投稿',
                'プロジェクト管理',
                'CRM・営業管理',
                '500個のGASツール',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">⚡</span>
                  <span className="flex-1 text-white/80">{item}</span>
                  <span className="font-black text-[#FF6B35]">¥0</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-[#FF6B35]/20 pt-6 text-center">
              <div className="text-sm text-white/50">年間合計</div>
              <div className="text-4xl font-black text-[#FF6B35]">¥0</div>
              <div className="mt-2 text-sm font-bold text-[#FF6B35]">
                月額980円だけで、この全てが手に入る。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
