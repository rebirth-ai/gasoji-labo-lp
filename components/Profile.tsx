export default function Profile() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-[#FFF8F0] p-8 border border-[#FF6B35]/10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="h-36 w-36 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F5A623] p-1 shadow-xl shadow-[#FF6B35]/20">
                <div className="h-full w-full rounded-full bg-[#FFF8F0] flex items-center justify-center">
                  <span className="text-7xl">🐻</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-black text-white shadow">
                GASおじ
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2 text-3xl font-black text-[#3D2B1F]">
                yuyukuma（ゆゆくま）
              </h3>
              <p className="mb-4 text-lg font-bold text-[#FF6B35]">
                Googleアカウントを「AI自動エージェント」に変える人
              </p>
              <p className="text-[#3D2B1F]/70 leading-relaxed">
                月額課金に悩んでいた私が、GASで完全無料の自動化ツール500個を開発中。
                <strong className="text-[#3D2B1F]"> 年間124万円のSaaSコストを¥0に </strong>
                する方法の全てを、noteメンバー限定で公開中。
              </p>

              {/* Stats */}
              <div className="mt-6 flex justify-center gap-6 md:justify-start">
                {[
                  { value: '500+', label: 'ツール' },
                  { value: '6日', label: '開発期間' },
                  { value: '¥0', label: 'コスト' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-[#FF6B35]">{stat.value}</div>
                    <div className="text-xs text-[#3D2B1F]/50">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-6 flex justify-center gap-3 md:justify-start">
                <a href="https://x.com/yuyukuma0810" className="rounded-full bg-[#FF6B35]/10 px-4 py-2 text-sm font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">
                  𝕏 @yuyukuma0810
                </a>
                <a href="https://note.com/yuyukuma_gasoji" className="rounded-full bg-[#FF6B35]/10 px-4 py-2 text-sm font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">
                  📝 note
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
