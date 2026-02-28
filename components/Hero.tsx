/* SVG icon components */
const IconChart = () => (
  <svg className="w-6 h-6 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16l4-4 4 4 5-5" />
  </svg>
)
const IconMail = () => (
  <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
  </svg>
)
const IconBot = () => (
  <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
)
const IconZap = () => (
  <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a1a] px-6 pt-24 pb-16 md:pt-28 md:pb-24 md:px-12 lg:px-16 xl:px-20">
      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FF6B35]/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[50%] -left-20 w-[350px] h-[350px] rounded-full bg-[#F5A623]/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] rounded-full bg-[#FF6B35]/8 blur-[80px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid min-h-[75vh] items-center gap-8 lg:grid-cols-[42%_58%] lg:gap-12">

          {/* LEFT: Text */}
          <div className="order-2 lg:order-1 relative z-10">
            <p className="mb-4 text-sm font-bold tracking-[0.1em] text-[#FF6B35] uppercase">
              初期費用 & 追加コスト ¥0
            </p>

            <h1 className="mb-6 text-[1.75rem] font-black leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              <span className="text-[#FF6B35]">GASツール500個</span>
              <br />
              で月額SaaSが
              <br />
              <span className="relative inline-block">
                完全無料に！
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F5A623]" />
              </span>
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-white/50 lg:text-lg">
              月額課金のSaaSをGoogle Apps Scriptで置き換え。
              <span className="font-semibold text-white/80">年間124万円の削減</span>を実現。
            </p>

            {/* CTA */}
            <div className="mb-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://note.com/yuyukuma_gasoji/membership"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#F5A623] px-8 py-4 text-sm font-black text-white shadow-lg shadow-[#FF6B35]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B35]/40 hover:-translate-y-1 hover:scale-[1.02]"
              >
                月額980円で始める
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#tools"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1"
              >
                ツール一覧を見る
              </a>
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { icon: <IconChart />, label: '開発予定', value: '500ツール' },
                { icon: <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: '年間削減', value: '¥124万' },
                { icon: <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>, label: 'ドキュメント', value: '172本' },
              ].map((b) => (
                <div key={b.value} className="flex items-center gap-2 rounded-full bg-white/8 backdrop-blur-sm px-4 py-2 border border-white/10">
                  {b.icon}
                  <div>
                    <div className="text-[10px] font-bold text-[#FF6B35]">{b.label}</div>
                    <div className="text-xs font-black text-white">{b.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Hero image — FREE from mockup, full impact */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center overflow-visible">
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl">
              {/* Main hero image — large, no mockup frame, just the image with glow */}
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 to-[#F5A623]/10 blur-[60px]" />
                <img
                  src="/hero-visual.png"
                  alt="GASおじさん - GASツール500個で年間100万円削減"
                  className="relative w-full drop-shadow-[0_20px_60px_rgba(255,107,53,0.3)] animate-float"
                  style={{ animationDuration: '8s' }}
                />
              </div>

              {/* Stats card overlay — bottom-left */}
              <div className="absolute -bottom-4 -left-2 md:left-4 rounded-2xl bg-white/10 backdrop-blur-md px-5 py-4 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="text-[10px] font-bold text-white/50 mb-0.5">公開中</div>
                <div className="text-3xl font-black text-white leading-none">10<span className="text-sm font-bold text-white/40 ml-1">/ 500</span></div>
                <div className="mt-1 text-[10px] font-bold text-[#FF6B35]">毎週追加中 →</div>
              </div>

              {/* Floating feature cards */}
              <div className="absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float">
                <IconChart />
              </div>
              <div className="absolute top-[15%] -right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float" style={{ animationDelay: '1.5s' }}>
                <IconMail />
              </div>
              <div className="absolute bottom-[30%] -left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float" style={{ animationDelay: '3s' }}>
                <IconBot />
              </div>
              <div className="absolute -bottom-2 right-[15%] flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float" style={{ animationDelay: '2s' }}>
                <IconZap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FFF8F0] pointer-events-none" />
    </section>
  )
}
