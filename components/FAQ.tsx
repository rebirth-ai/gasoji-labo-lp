'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'GASって何ですか？プログラミング知識は必要？',
    a: 'Google Apps Script（GAS）は、Googleが提供する無料のスクリプト環境です。当ラボのツールはコピペで使えるので、プログラミング知識は不要です。セットアップガイドに従うだけで、すぐに使い始められます。',
  },
  {
    q: 'メンバーシップを解約したらツールは使えなくなる？',
    a: 'いいえ！既にコピーしたGASツールはそのまま使い続けられます。ただし、新規ツールの追加やアップデートの受け取り、サポートは停止します。',
  },
  {
    q: '本当に年間124万円も節約できるの？',
    a: '主要SaaS（Buffer・Notion・Salesforce等）の月額費用を合算した数字です。全てのSaaSを使っていない場合でも、1つのSaaS代替だけで月額以上の節約が可能です。',
  },
  {
    q: '値上げ後に入会したら、元の価格に戻せる？',
    a: 'いいえ、入会時の価格が適用されます。だからこそ今が最もお得なタイミングです。早期加入者は永久据え置きです。',
  },
  {
    q: 'ツールに不具合があったら？',
    a: 'noteのコメント欄で報告いただければ、迅速に対応します。全ツールは継続的にメンテナンスしています。',
  },
  {
    q: 'Googleアカウントは無料版でOK？',
    a: 'はい！Google Workspace（有料版）は不要です。個人のGoogleアカウント（無料）だけで全ツールが動作します。',
  },
  {
    q: 'ツールの使い方がわからない場合はサポートありますか？',
    a: 'もちろんあります。メンバーシップに入れば、詳細マニュアル＋カスタマイズサポートが使えます。「うちの会社に合わせて改造したい」「エラーが出た」→ 相談に乗ります。コミュニティで他のメンバーと情報交換もできます。',
  },
  {
    q: '月額料金以外にかかる費用はありますか？',
    a: 'ゼロです。月額¥980以外、一切かかりません。初期費用なし、追加課金なし、隠れコストなし。Googleアカウントは無料、GASも無料、サーバー代もドメイン代も不要です。',
  },
  {
    q: '既にSaaSを使ってますが、移行は簡単ですか？',
    a: '簡単です。ツールにはCSV出力・インポート機能付き。既存データをCSVでエクスポートして、GASツールにインポートするだけ。移行マニュアルも用意しています。楽楽精算、kintone、Salesforceからの移行事例も多数あります。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="px-6 py-12 md:py-28 bg-[#0f0f23]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            よくある<span className="text-[#FF6B35]">質問</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white/[0.22] border border-white/[0.3] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-trigger-${i}`}
              >
                <span className="pr-4 text-lg font-bold text-white">{faq.q}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-[#FF6B35] transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div
                  className="border-t border-white/10 px-6 pb-6 pt-4"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                >
                  <p className="text-white/70 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
