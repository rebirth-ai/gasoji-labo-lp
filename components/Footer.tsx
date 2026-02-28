export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 bg-[#0a0a1a]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-lg font-black text-white">
            <img src="/yuyukuma-icon.png" alt="ゆゆくま" className="h-8 w-8 rounded-lg object-cover" />
            <span>GAS おじラボ</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a href="https://x.com/yuyukuma0810" className="text-white/60 hover:text-white transition-colors" aria-label="X">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://note.com/yuyukuma_gasoji" className="text-white/60 hover:text-white transition-colors" aria-label="note">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#41C9B4"/><path d="M7 8.5h7m-7 3.5h10m-10 3.5h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </a>
            <a href="https://note.com/yuyukuma_gasoji/membership" className="text-sm font-medium text-white/60 hover:text-[#FF6B35] transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 01.832.445l1.96 2.94 3.467.694a1 1 0 01.62 1.56l-2.318 2.783.327 3.515a1 1 0 01-1.32 1.07L10 13.462l-3.568 1.545a1 1 0 01-1.32-1.07l.327-3.515L3.121 7.64a1 1 0 01.62-1.56l3.467-.695 1.96-2.94A1 1 0 0110 2z" clipRule="evenodd"/></svg>
              メンバーシップ
            </a>
            <a href="https://www.threads.net/@yuyukuma0810" className="text-white/60 hover:text-white transition-colors" aria-label="Threads">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.418 2.35 5.564 3.995 3.515 5.845 1.211 8.598.03 12.179.006h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.723 2.082-1.137 3.473-1.2h.01c1.007-.032 1.907.096 2.68.38.07-.502.106-.997.106-1.482 0-1.3-.344-2.342-1.02-3.093-.71-.788-1.755-1.206-3.018-1.209h-.005c-1.248.007-2.266.437-2.955 1.247l-1.5-1.39c1.067-1.252 2.56-1.907 4.455-1.916h.008c1.786.01 3.262.632 4.267 1.8.965 1.12 1.455 2.62 1.455 4.46 0 .496-.04 1.003-.12 1.51 1.77 1.08 2.63 3.04 2.63 5.36 0 3.81-1.66 6.54-4.68 7.92-1.73.79-3.73 1.23-5.96 1.23z"/></svg>
            </a>
            <a href="https://www.instagram.com/yuyukuma0810" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@yuyukuma0810" className="text-white/60 hover:text-white transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-white/70">
          <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <span>|</span>
          <a href="/tokushoho" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          <span>|</span>
          <a href="mailto:contact@yuyukuma-blog.com" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
        <div className="mt-4 text-center text-sm text-white/70">
          © 2026 ゆゆくま（GASおじ） | Googleアカウントを「AI自動エージェント」に変える人
        </div>
      </div>
    </footer>
  )
}
