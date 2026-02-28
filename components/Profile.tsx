export default function Profile() {
  return (
    <section className="px-6 py-12 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-[#FFF8F0] p-8 border border-[#FF6B35]/10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="h-36 w-36 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F5A623] p-1 shadow-xl shadow-[#FF6B35]/20">
                <img src="/yuyukuma-icon.png" alt="ゆゆくま" className="h-full w-full rounded-full object-cover" />
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
                元々、小さな会社の経営者だった。楽楽精算、kintone、Slack、Trello、Salesforce…
                便利なSaaSを次々と導入して、気づいたら<strong className="text-[#3D2B1F]">年間¥124万</strong>払ってた。
                そこでGoogleスプレッドシート + GASで月額課金ツールを全部無料化。
                <strong className="text-[#3D2B1F]">年間¥124万→¥0</strong>に。
                この経験を、あなたにも共有したい。
                「難しいツールを、誰でも使えるシンプルなものに。」それが俺のミッションだ。
              </p>

              {/* Stats */}
              <div className="mt-6 flex justify-center gap-6 md:justify-start">
                {[
                  { value: '500+', label: '開発予定ツール' },
                  { value: '¥124万', label: '年間削減額' },
                  { value: '¥0', label: '初期費用' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-[#FF6B35]">{stat.value}</div>
                    <div className="text-xs text-[#3D2B1F]/50">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                <a href="https://x.com/yuyukuma0810" className="rounded-full bg-[#FF6B35]/10 px-3 py-1.5 text-xs font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">𝕏 Twitter</a>
                <a href="https://note.com/yuyukuma_gasoji" className="rounded-full bg-[#FF6B35]/10 px-3 py-1.5 text-xs font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">📝 note</a>
                <a href="https://www.threads.net/@yuyukuma0810" className="rounded-full bg-[#FF6B35]/10 px-3 py-1.5 text-xs font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">🧵 Threads</a>
                <a href="https://www.instagram.com/yuyukuma0810" className="rounded-full bg-[#FF6B35]/10 px-3 py-1.5 text-xs font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">📷 Instagram</a>
                <a href="https://www.tiktok.com/@yuyukuma0810" className="rounded-full bg-[#FF6B35]/10 px-3 py-1.5 text-xs font-medium text-[#FF6B35] hover:bg-[#FF6B35]/20 transition-colors">🎵 TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
