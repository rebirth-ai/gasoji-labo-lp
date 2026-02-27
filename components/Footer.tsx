export default function Footer() {
  return (
    <footer className="border-t border-[#FF6B35]/10 px-6 py-12 bg-[#FFF8F0]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-lg font-black text-[#3D2B1F]">
            <span className="text-2xl">🐻</span>
            <span>GAS おじラボ</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/yuyukuma0810" className="text-sm text-[#3D2B1F]/50 hover:text-[#FF6B35] transition-colors">
              X (Twitter)
            </a>
            <a href="https://note.com/yuyukuma_gasoji" className="text-sm text-[#3D2B1F]/50 hover:text-[#FF6B35] transition-colors">
              note
            </a>
            <a href="https://note.com/yuyukuma_gasoji/membership" className="text-sm text-[#3D2B1F]/50 hover:text-[#FF6B35] transition-colors">
              メンバーシップ
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#3D2B1F]/30">
          © 2026 yuyukuma | Googleアカウントを「AI自動エージェント」に変える人
        </div>
      </div>
    </footer>
  )
}
