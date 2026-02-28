export default function FinalCTA() {
  return (
    <section className="px-6 py-12 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#FFF8F0] to-white p-12 text-center shadow-2xl border border-[#FF6B35]/10 md:p-16">
          <h2 className="mb-6 text-4xl font-black leading-tight md:text-5xl">
            あなたも
            <br />
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F5A623] bg-clip-text text-transparent">
              始めてみませんか？
            </span>
          </h2>

          <p className="mb-4 text-xl text-[#3D2B1F]/70">
            月額980円で、
            <strong className="text-[#3D2B1F]"> 年間124万円 </strong>
            のコスト削減。
          </p>
          <p className="mb-4 text-lg text-[#3D2B1F]/60">
            <span className="text-[#F5A623] font-bold">カフェのコーヒー2杯分</span>
            の投資で、圧倒的なリターン。
          </p>
          <p className="mb-10 text-2xl font-black text-[#FF6B35]">
            初月から削減効果を実感できます。
          </p>

          <a
            href="https://note.com/yuyukuma_gasoji/membership"
            className="group inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F5A623] px-12 py-6 text-xl font-black text-white shadow-xl shadow-[#FF6B35]/25 transition-all hover:scale-105 hover:shadow-2xl"
          >
            <span className="sm:hidden">今すぐ参加</span><span className="hidden sm:inline">noteメンバーシップに参加</span>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-6 text-sm text-[#3D2B1F]/40">
            🎁 入会特典: 全ツール即時アクセス + ドキュメント + 無制限サポート + 永久据え置き価格
          </p>
        </div>
      </div>
    </section>
  )
}
