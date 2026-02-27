/* SVG icon components for floating feature cards */
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
)
const IconZap = () => (
  <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible bg-[#0a0a1a] px-6 pt-28 pb-20 md:px-12 lg:px-16 xl:px-20">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FF6B35]/15 to-[#F5A623]/10 blur-[80px]" />
        <div className="absolute top-[40%] -left-16 w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#FF6B35]/10 to-transparent blur-[60px]" />
        <div className="absolute bottom-[10%] right-[30%] w-[180px] h-[180px] rounded-full bg-[#F5A623]/8 blur-[40px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Split grid: 45% text / 55% visual */}
        <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[45%_55%] lg:gap-16">

          {/* LEFT: Text content */}
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-bold tracking-widest text-[#FF6B35] uppercase">
              初期費用 & 追加コスト ¥0
            </p>

            <h1 className="mb-6 text-[2.5rem] font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              <span className="text-[#FF6B35]">GASツール500個</span>で
              <br className="hidden sm:block" />
              月額SaaSを
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                完全置換
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F5A623]" />
              </span>
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-white/55 lg:text-lg">
              月額課金のSaaSをGoogle Apps Scriptで置き換え。
              <span className="font-semibold text-[#3D2B1F]">年間124万円の削減</span>を実現します。
            </p>

            {/* CTA row */}
            <div className="mb-10 flex flex-wrap gap-3">
              <a
                href="https://note.com/yuyukuma_gasoji/membership"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#FF6B35] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6B35]/20 transition-all duration-300 hover:bg-[#e55a28] hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:-translate-y-0.5"
              >
                月額980円で始める
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#tools"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-white/70 transition-all duration-300 hover:border-[#FF6B35]/30 hover:text-[#FF6B35] hover:-translate-y-0.5"
              >
                ツール一覧を見る
              </a>
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/15">
                <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A1.5 1.5 0 015 10.69V4.308c0-.497.5-.828.942-.596l5.458 2.865m0 8.593v-8.593m0 8.593l5.457-3.187A1.5 1.5 0 0018 14.308V4.308c0-.497-.5-.828-.942-.596L11.58 6.577" /></svg>
                <div>
                  <div className="text-[10px] font-bold text-[#FF6B35]">開発予定</div>
                  <div className="text-xs font-black text-white">500ツール</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/15">
                <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <div className="text-[10px] font-bold text-[#FF6B35]">年間削減額</div>
                  <div className="text-xs font-black text-white">¥124万</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/15">
                <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                <div>
                  <div className="text-[10px] font-bold text-[#FF6B35]">ドキュメント</div>
                  <div className="text-xs font-black text-white">172本</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Device mockup */}
          <div className="relative order-1 flex items-center justify-center lg:order-2 py-8">
            <div className="relative w-[75%] max-w-[380px] mx-auto">
              {/* PC mockup with subtle perspective */}
              <div
                className="relative rounded-2xl bg-[#1a1a2e] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
                style={{ transform: 'perspective(1200px) rotateY(-3deg)' }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex-1 rounded-md bg-white/10 px-3 py-0.5 text-[9px] text-white/40 font-medium">yuyukuma-blog.com</div>
                </div>
                <img
                  src="/hero-visual.png"
                  alt="GASおじラボ - ダッシュボード"
                  className="w-full rounded-b-xl"
                />
              </div>

              {/* Smartphone mockup */}
              <div className="absolute -bottom-4 -right-2 w-[110px] md:w-[130px] rounded-[20px] bg-white p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5 rotate-2">
                <div className="rounded-[16px] bg-gradient-to-br from-[#FF6B35] to-[#F5A623] px-3 py-5 text-center text-white">
                  <div className="mb-0.5 text-[9px] font-bold opacity-70">公開中</div>
                  <div className="text-3xl font-black leading-none">10</div>
                  <div className="mt-0.5 text-[9px] font-medium opacity-70">/ 500 ツール</div>
                  <div className="mt-2 rounded-full bg-white/20 px-2 py-0.5 text-[7px] font-bold">
                    毎週追加中 →
                  </div>
                </div>
              </div>

              {/* Floating feature icon cards (SVG icons, not emoji) */}
              <div className="absolute -top-6 -left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float">
                <IconChart />
              </div>
              <div className="absolute top-[20%] -right-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float" style={{ animationDelay: '1.5s' }}>
                <IconMail />
              </div>
              <div className="absolute bottom-[35%] -left-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float" style={{ animationDelay: '3s' }}>
                <IconBot />
              </div>
              <div className="absolute -bottom-3 left-[20%] flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/15 animate-float" style={{ animationDelay: '2s' }}>
                <IconZap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#FFF8F0] pointer-events-none" />
    </section>
  )
}
