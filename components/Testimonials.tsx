const TESTIMONIALS = [
  {
    name: '田中 健太',
    role: 'マーケティング担当',
    avatarPos: '0% 0%',
    quote: '経費精算が月3時間→10分に短縮。楽楽精算を解約して月3万円も浮いた。',
    metric: '月3時間→10分',
    stars: 5,
  },
  {
    name: '佐藤 美咲',
    role: 'フリーランス',
    avatarPos: '100% 0%',
    quote: 'SNS投稿が完全自動化。Buffer・Hootsuite不要で年間18万円節約できた。',
    metric: '年間18万円節約',
    stars: 5,
  },
  {
    name: '山田 裕也',
    role: '営業マネージャー',
    avatarPos: '100% 100%',
    quote: '顧客管理をGASに移行。Salesforceの年60万円がゼロに。機能は十分。',
    metric: '年間60万円→¥0',
    stars: 5,
  },
  {
    name: '鈴木 あゆみ',
    role: '事業部長',
    avatarPos: '0% 100%',
    quote: '議事録自動化で会議後の作業が激減。チーム全体の生産性が上がった。',
    metric: '作業時間80%削減',
    stars: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32 bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#FF6B35] uppercase">ユーザーの声</p>
          <h2 className="mb-4 text-4xl font-black text-[#1a1a2e] md:text-5xl">
            導入者の<span className="text-[#FF6B35]">リアルな声</span>
          </h2>
          <p className="text-base text-[#3D2B1F]/50">実際にGASツールを使っている方々の体験談</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="group relative rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#3D2B1F]/5 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Metric badge */}
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-[#FF6B35]/8 px-3 py-1">
                <svg className="w-3.5 h-3.5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <span className="text-xs font-bold text-[#FF6B35]">{t.metric}</span>
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className={`w-4 h-4 ${j < t.stars ? 'text-[#F5A623]' : 'text-[#3D2B1F]/10'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-base leading-relaxed text-[#3D2B1F]/70">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#3D2B1F]/5">
                <div
                  className="h-11 w-11 rounded-full bg-cover bg-no-repeat border-2 border-[#FF6B35]/15 shrink-0 shadow-sm"
                  style={{ backgroundImage: 'url(/user-avatars.png)', backgroundSize: '200%', backgroundPosition: t.avatarPos }}
                />
                <div>
                  <div className="text-sm font-bold text-[#1a1a2e]">{t.name}</div>
                  <div className="text-xs text-[#3D2B1F]/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
