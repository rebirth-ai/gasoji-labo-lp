export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 bg-[#0a0a1a]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-lg font-black text-white">
            <img src="/yuyukuma-icon.png" alt="ゆゆくま" className="h-8 w-8 rounded-lg object-cover" />
            <span>GAS おじラボ</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="https://x.com/yuyukuma0810" className="text-sm text-white/50 hover:text-[#FF6B35] transition-colors">𝕏 Twitter</a>
            <a href="https://note.com/yuyukuma_gasoji" className="text-sm text-white/50 hover:text-[#FF6B35] transition-colors">📝 note</a>
            <a href="https://note.com/yuyukuma_gasoji/membership" className="text-sm text-white/50 hover:text-[#FF6B35] transition-colors">🎯 メンバーシップ</a>
            <a href="https://www.threads.net/@yuyukuma0810" className="text-sm text-white/50 hover:text-[#FF6B35] transition-colors">🧵 Threads</a>
            <a href="https://www.instagram.com/yuyukuma0810" className="text-sm text-white/50 hover:text-[#FF6B35] transition-colors">📷 Instagram</a>
            <a href="https://www.tiktok.com/@yuyukuma0810" className="text-sm text-white/50 hover:text-[#FF6B35] transition-colors">🎵 TikTok</a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white/30">
          © 2026 yuyukuma | Googleアカウントを「AI自動エージェント」に変える人
        </div>
      </div>
    </footer>
  )
}
