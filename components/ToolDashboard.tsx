'use client'
import { useState, useMemo } from 'react'

const CURRENT_TOOLS = 9
const TOTAL_TOOLS = 500

const CATEGORIES = [
  { id: 'all', name: '全て', emoji: '📦' },
  { id: 'sns', name: 'SNS・マーケ', emoji: '📱' },
  { id: 'ai', name: 'AI・自動化', emoji: '🤖' },
  { id: 'data', name: 'データ分析', emoji: '📊' },
  { id: 'crm', name: 'CRM・営業', emoji: '💼' },
  { id: 'hr', name: '人事・労務', emoji: '👥' },
  { id: 'finance', name: '経理・財務', emoji: '💰' },
  { id: 'ops', name: '業務効率化', emoji: '⚡' },
  { id: 'dev', name: '開発ツール', emoji: '🔧' },
]

const TOOLS = [
  // Published (9) — メンバーシップ公開済み基準
  { name: '経費精算', cat: 'finance', emoji: '💰', desc: '楽楽精算代替。レシートOCR対応', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/n6ec7dfe47d70' },
  { name: 'X自動投稿', cat: 'sns', emoji: '📱', desc: 'Buffer代替。毎日自動投稿', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/nc1ac8441ab82' },
  { name: 'カレンダー同期', cat: 'ops', emoji: '📅', desc: 'スケジュール自動管理＋通知', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/n618deabf2eca' },
  { name: 'メール差し込み送信', cat: 'ops', emoji: '📧', desc: '一括メール配信＋テンプレート', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/ne90c563d5a63' },
  { name: 'フォーム通知', cat: 'ops', emoji: '🔔', desc: 'フォーム回答をSlack・メール即通知', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/nb94ebb7e0d68' },
  { name: 'スプシ自動バックアップ', cat: 'ops', emoji: '💾', desc: 'スプシを毎日自動バックアップ', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/n7f630985a409' },
  { name: 'Slack通知連携', cat: 'dev', emoji: '🔔', desc: 'スプシ更新をSlackに自動通知', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/n0383924a78cb' },
  { name: '請求書自動生成', cat: 'finance', emoji: '🧾', desc: 'freee代替。PDF出力＋メール送信', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/nc19347fafe6f' },
  { name: '連絡先管理', cat: 'crm', emoji: '📇', desc: '顧客・取引先の連絡先一元管理', status: 'published', noteUrl: 'https://note.com/yuyukuma_gasoji/n/n4212b0a2ca10' },
  // Coming soon (30+) — タスク管理は近日公開に移動
  { name: 'タスク管理', cat: 'ops', emoji: '🎯', desc: 'Asana代替。チーム向けタスク管理', status: 'coming' },
  { name: 'SNS予約投稿', cat: 'sns', emoji: '🗓️', desc: 'Hootsuite代替。複数SNS一括予約', status: 'coming' },
  { name: 'Instagram分析', cat: 'sns', emoji: '📸', desc: 'フォロワー推移・エンゲージメント', status: 'coming' },
  { name: 'LINE配信管理', cat: 'sns', emoji: '💚', desc: 'LINE公式アカウント配信自動化', status: 'coming' },
  { name: 'SNSハッシュタグ分析', cat: 'sns', emoji: '#️⃣', desc: 'トレンドタグ解析・レコメンド', status: 'coming' },
  { name: 'AI議事録', cat: 'ai', emoji: '📝', desc: '会議内容を自動要約・共有', status: 'coming' },
  { name: 'AI画像生成', cat: 'ai', emoji: '🎨', desc: 'SNS用画像を自動生成', status: 'coming' },
  { name: 'AIメール返信', cat: 'ai', emoji: '✉️', desc: 'メール自動下書き生成', status: 'coming' },
  { name: 'AI翻訳ツール', cat: 'ai', emoji: '🌐', desc: '多言語翻訳＋ローカライズ', status: 'coming' },
  { name: 'Googleアナリティクス連携', cat: 'data', emoji: '🔍', desc: 'GA4データ自動レポート', status: 'coming' },
  { name: 'KPIダッシュボード', cat: 'data', emoji: '🏆', desc: '主要指標リアルタイム監視', status: 'coming' },
  { name: 'ABテスト管理', cat: 'data', emoji: '🔬', desc: 'テスト設計・結果分析', status: 'coming' },
  { name: '競合分析', cat: 'data', emoji: '🕵️', desc: '競合サイト自動モニタリング', status: 'coming' },
  { name: 'リード管理', cat: 'crm', emoji: '🎣', desc: 'リード獲得〜商談まで追跡', status: 'coming' },
  { name: '見積書自動生成', cat: 'crm', emoji: '📋', desc: 'テンプレート＋PDF出力', status: 'coming' },
  { name: '顧客フォローアップ', cat: 'crm', emoji: '🔔', desc: 'フォロー漏れ防止＋自動リマインド', status: 'coming' },
  { name: '営業レポート', cat: 'crm', emoji: '📊', desc: '商談・受注率の自動集計', status: 'coming' },
  { name: '勤怠管理', cat: 'hr', emoji: '⏰', desc: 'KING OF TIME代替。出退勤記録', status: 'coming' },
  { name: '給与計算', cat: 'hr', emoji: '💵', desc: '自動計算＋明細生成', status: 'coming' },
  { name: '採用管理', cat: 'hr', emoji: '🤝', desc: '応募者トラッキング＋面接管理', status: 'coming' },
  { name: '社内アンケート', cat: 'hr', emoji: '📋', desc: 'フォーム＋自動集計＋分析', status: 'coming' },
  { name: '予実管理', cat: 'finance', emoji: '📊', desc: '予算vs実績を自動対比・レポート', status: 'coming' },
  { name: '入出金管理', cat: 'finance', emoji: '🏦', desc: '口座連携＋自動仕訳', status: 'coming' },
  { name: '予算管理', cat: 'finance', emoji: '📉', desc: '部門別予算＋実績対比', status: 'coming' },
  { name: '領収書OCR', cat: 'finance', emoji: '🧾', desc: '写真→自動テキスト抽出', status: 'coming' },
  { name: 'ワークフロー承認', cat: 'ops', emoji: '✅', desc: '稟議・申請の自動化', status: 'coming' },
  { name: 'ドキュメント自動生成', cat: 'ops', emoji: '📄', desc: 'テンプレ→契約書・提案書', status: 'coming' },
  { name: '在庫管理', cat: 'ops', emoji: '📦', desc: '在庫追跡＋発注アラート', status: 'coming' },
  { name: '日報自動化', cat: 'ops', emoji: '📓', desc: '入力→集計→上司へ自動送信', status: 'coming' },
  { name: 'Slack連携Bot', cat: 'dev', emoji: '🔔', desc: '通知・自動返信Bot', status: 'coming' },
  { name: 'Webスクレイピング', cat: 'dev', emoji: '🕷️', desc: '競合分析・データ収集', status: 'coming' },
  { name: 'API連携ハブ', cat: 'dev', emoji: '🔗', desc: '複数サービス連携の中継点', status: 'coming' },
  { name: 'GitHub連携', cat: 'dev', emoji: '🐙', desc: 'Issue管理＋通知連携', status: 'coming' },
]

export default function ToolDashboard() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchCat = activeCategory === 'all' || tool.cat === activeCategory
      const matchSearch = !search || tool.name.toLowerCase().includes(search.toLowerCase()) || tool.desc.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  const publishedCount = TOOLS.filter(t => t.status === 'published').length
  const comingCount = TOOLS.filter(t => t.status === 'coming').length

  return (
    <section id="tools" className="px-4 sm:px-6 py-12 md:py-28 bg-[#0f0f23]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            {TOTAL_TOOLS}個の無料ツールで
            <br />
            <span className="text-[#FF6B35]">何ができる？</span>
          </h2>
          <p className="text-lg text-white/70">
            全てGoogle Apps Script（GAS）で動く。サーバー代も月額課金もゼロ。
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <span className="rounded-full bg-green-500/10 text-green-400 px-3 py-1 font-bold">✅ {publishedCount}ツール公開中</span>
            <span className="rounded-full bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 font-bold">🔜 {comingCount}ツール開発中</span>
            <span className="rounded-full bg-white/10 text-white/70 px-3 py-1 font-bold">🎯 目標 {TOTAL_TOOLS}ツール</span>
          </div>
        </div>

        {/* Tool showcase illustration — 透過で背景に馴染ませる */}
        <div className="relative mb-12 -mx-4 sm:-mx-6">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0f0f23] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f0f23] to-transparent z-10" />
          <img src="/tools-showcase.png" alt="GASツールショーケース" className="w-full max-w-3xl mx-auto h-auto opacity-80" />
        </div>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="ツール名で検索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="ツール名で検索"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/20 border border-white/10'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {(showAll ? filteredTools : filteredTools.slice(0, 8)).map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl bg-slate-800/90 p-6 border border-white/[0.3] transition-all hover:bg-white/20 hover:border-[#FF6B35]/30 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-3xl">{tool.emoji}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    tool.status === 'published'
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-[#FF6B35]/10 text-[#FF6B35]'
                  }`}
                >
                  {tool.status === 'published' ? '✅ 公開中' : '🔜 近日公開'}
                </span>
              </div>
              <h3 className="mb-1 text-lg font-black text-white">{tool.name}</h3>
              <p className="text-sm text-white/70 flex-1">{tool.desc}</p>
              {'noteUrl' in tool && tool.noteUrl && (
                <a
                  href={tool.noteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#FF6B35] hover:text-[#ff8c5a] transition-colors"
                >
                  📝 詳しく見る →
                </a>
              )}
            </div>
          ))}
        </div>

        {!showAll && filteredTools.length > 8 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-[#FF6B35] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF6B35]/20 transition-all hover:scale-105 hover:shadow-xl"
            >
              残り{filteredTools.length - 8}ツールを表示 ↓
            </button>
          </div>
        )}
        <p className="mt-8 text-center text-sm text-white/70">
          + 他{TOTAL_TOOLS - TOOLS.length}以上のツールがnoteメンバー限定で順次公開
        </p>
      </div>
    </section>
  )
}
