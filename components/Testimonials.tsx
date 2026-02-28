'use client'

const TESTIMONIALS = [
  {
    name: 'T.K.',
    role: '経理担当・中小企業',
    avatar: '/avatars/testimonial-avatar-1-accountant.png',
    fallbackBg: 'bg-gradient-to-br from-[#FF6B35] to-[#F5A623]',
    fallbackInitial: 'T',
    quote: '経費精算が月3時間→10分に短縮。楽楽精算を解約して月3万円も浮いた。上司にも「なんでもっと早くやらなかったの」って言われました。',
    metric: '月3時間→10分',
    metricDetail: '経費精算の処理時間',
    stars: 5,
  },
  {
    name: 'S.M.',
    role: 'フリーランス・Web制作',
    avatar: '/avatars/testimonial-avatar-3-freelancer.png',
    fallbackBg: 'bg-gradient-to-br from-[#F5A623] to-[#FF6B35]',
    fallbackInitial: 'S',
    quote: 'SNS投稿が完全自動化。Buffer・Hootsuite不要で年間18万円節約できた。空いた時間でクライアントワークに集中。',
    metric: '年間18万円節約',
    metricDetail: 'SNS管理ツール費',
    stars: 5,
  },
  {
    name: 'Y.H.',
    role: '営業マネージャー・IT企業',
    avatar: '/avatars/testimonial-avatar-2-manager.png',
    fallbackBg: 'bg-gradient-to-br from-[#3D2B1F] to-[#FF6B35]',
    fallbackInitial: 'Y',
    quote: '顧客管理をGASに移行。Salesforceの年60万円がゼロに。うちの規模なら機能は十分すぎる。',
    metric: '年間60万円→¥0',
    metricDetail: 'CRM費用',
    stars: 5,
  },
  {
    name: 'A.S.',
    role: 'スタートアップCEO',
    avatar: '/avatars/testimonial-avatar-4-ceo.png',
    fallbackBg: 'bg-gradient-to-br from-[#FF6B35] to-[#3D2B1F]',
    fallbackInitial: 'A',
    quote: '議事録自動化で会議後の作業が激減。チーム全体の生産性が上がった。スタートアップにはGASが最強。',
    metric: '作業時間80%削減',
    metricDetail: '会議後の事務作業',
    stars: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-14 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.1em] text-[#FF6B35] uppercase">ユーザーの声</p>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            導入者の<span className="text-[#FF6B35]">リアルな声</span>
          </h2>
          <p className="text-base text-gray-600">実際にGASツールを使っている方々の体験談</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl bg-white p-8 border border-gray-200 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
            >
              {/* Metric badge */}
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6B35]/8 px-3 py-1">
                  <svg className="w-3.5 h-3.5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                  <span className="text-xs font-bold text-[#FF6B35]">{t.metric}</span>
                </div>
                <span className="text-[10px] text-gray-600">{t.metricDetail}</span>
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className={`w-4 h-4 ${j < t.stars ? 'text-[#F5A623]' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {/* Avatar with fallback */}
                <div className="relative h-12 w-12 shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover object-top border-2 border-gray-300 shadow-md"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = 'none';
                      const fb = el.nextElementSibling as HTMLElement;
                      if (fb) fb.style.display = 'flex';
                    }}
                  />
                  <div
                    className={`h-12 w-12 rounded-full ${t.fallbackBg} items-center justify-center text-white font-bold text-lg border-2 border-[#FF6B35]/15 shadow-sm`}
                    style={{ display: 'none' }}
                  >
                    {t.fallbackInitial}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
