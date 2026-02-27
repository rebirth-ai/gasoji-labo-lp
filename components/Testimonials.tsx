const TESTIMONIALS = [
  {
    name: '田中 健太',
    role: 'マーケティング担当',
    avatar: '/lp-avatar-1.png',
    quote: '経費精算が月3時間→10分に短縮。楽楽精算を解約して月3万円も浮いた。',
    metric: '月3時間→10分',
  },
  {
    name: '佐藤 美咲',
    role: 'フリーランス',
    avatar: '/lp-avatar-2.png',
    quote: 'SNS投稿が完全自動化。Buffer・Hootsuite不要で年間18万円節約できた。',
    metric: '年間18万円節約',
  },
  {
    name: '山田 裕也',
    role: '営業マネージャー',
    avatar: '/lp-avatar-3.png',
    quote: '顧客管理をGASに移行。Salesforceの年60万円がゼロに。機能は十分。',
    metric: '年間60万円→¥0',
  },
  {
    name: '鈴木 あゆみ',
    role: '事業部長',
    avatar: '/lp-avatar-4.png',
    quote: '議事録自動化で会議後の作業が激減。チーム全体の生産性が上がった。',
    metric: '作業時間80%削減',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            導入者の<span className="text-[#FF6B35]">リアルな声</span>
          </h2>
          <p className="text-lg text-[#3D2B1F]/60">実際にGASツールを使っている方々の体験談</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-[#FFF8F0] p-8 border border-[#FF6B35]/10"
            >
              <div className="mb-4 inline-block rounded-full bg-[#FF6B35]/10 px-3 py-1 text-sm font-bold text-[#FF6B35]">
                📊 {t.metric}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-[#3D2B1F]/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border-2 border-[#FF6B35]/20 shrink-0 object-cover"
                />
                <div>
                  <div className="font-bold text-[#3D2B1F]">{t.name}</div>
                  <div className="text-sm text-[#3D2B1F]/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
