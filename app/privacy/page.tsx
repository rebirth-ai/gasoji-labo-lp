export const metadata = {
  title: 'プライバシーポリシー | GASおじラボ',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] px-6 py-24">
      <article className="mx-auto max-w-3xl prose prose-invert prose-orange">
        <h1 className="text-3xl font-black text-white">プライバシーポリシー</h1>
        <p className="text-sm text-white/40">最終更新日: 2026年2月28日</p>

        <h2>1. 基本方針</h2>
        <p>GASおじラボ（以下「当サービス」）は、ユーザーの個人情報保護を重要な責務と認識し、個人情報保護法その他の関連法令を遵守し、適切な取扱いと保護に努めます。</p>

        <h2>2. 個人情報の定義</h2>
        <p>本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、メールアドレスその他の記述等により特定の個人を識別することができるものを指します。</p>

        <h2>3. 収集する情報</h2>
        <h3>3.1 メールアドレス</h3>
        <ul>
          <li><strong>収集方法:</strong> LPのメルマガ登録フォーム、noteメンバーシップ登録</li>
          <li><strong>利用目的:</strong> メールマガジン配信、重要なお知らせの送信</li>
        </ul>
        <h3>3.2 登録日時・登録元</h3>
        <ul>
          <li><strong>収集方法:</strong> 自動記録（LP、note等）</li>
          <li><strong>利用目的:</strong> サービス改善、統計分析</li>
        </ul>
        <h3>3.3 Cookie情報（任意）</h3>
        <ul>
          <li><strong>収集方法:</strong> Webサイト閲覧時の自動取得</li>
          <li><strong>利用目的:</strong> アクセス解析、ユーザー体験の改善</li>
        </ul>

        <h2>4. 個人情報の利用目的</h2>
        <ol>
          <li><strong>メールマガジンの配信</strong> — GASツール・活用情報の配信、メンバーシップ限定情報の配信、重要なお知らせの送信</li>
          <li><strong>サービスの提供・改善</strong> — ユーザーサポート、問い合わせ対応、サービス品質向上のための分析</li>
          <li><strong>統計データの作成</strong> — 個人を特定できない形式での統計データ作成</li>
        </ol>

        <h2>5. 個人情報の第三者提供</h2>
        <p>当サービスは、法令に基づく場合等を除き、ユーザーの同意なく第三者に個人情報を提供しません。</p>
        <p>以下のサービスに個人情報を委託します：</p>
        <ul>
          <li><strong>Google（Google Apps Script）:</strong> メールマガジン配信システムの運営</li>
          <li><strong>note株式会社:</strong> メンバーシップ決済・会員管理</li>
        </ul>

        <h2>6. 個人情報の安全管理</h2>
        <ul>
          <li>Google Apps Script（GAS）によるセキュアな管理</li>
          <li>SSL/TLS暗号化通信の利用</li>
          <li>個人情報へのアクセス権限の制限</li>
        </ul>

        <h2>7. 個人情報の保存期間</h2>
        <ul>
          <li><strong>メールアドレス:</strong> 配信停止または削除依頼があるまで</li>
          <li><strong>配信ログ:</strong> 最大30日間</li>
          <li><strong>問い合わせ履歴:</strong> 最大3年間</li>
        </ul>

        <h2>8. ユーザーの権利</h2>
        <ul>
          <li><strong>配信停止:</strong> メール本文の「配信停止」リンクからいつでも停止可能</li>
          <li><strong>個人情報の開示・訂正・削除:</strong> contact@yuyukuma-blog.com へ請求</li>
          <li><strong>利用停止:</strong> 個人情報の利用停止を請求可能</li>
        </ul>

        <h2>9. Cookie（クッキー）について</h2>
        <p>当サービスでは、アクセス解析・ユーザー体験改善のためCookieを使用する場合があります。ブラウザの設定で無効化可能です。</p>

        <h2>10. 外部サービスの利用</h2>
        <ul>
          <li><strong>Googleアナリティクス:</strong> 匿名化されたアクセス解析データの収集</li>
          <li><strong>note株式会社:</strong> メンバーシップ決済・会員管理</li>
        </ul>

        <h2>11. プライバシーポリシーの変更</h2>
        <p>法令の変更やサービス内容の変更に応じて、本プライバシーポリシーを変更することがあります。重要な変更はメールマガジン等で事前にお知らせします。</p>

        <h2>12. お問い合わせ</h2>
        <p>
          <strong>GASおじラボ 個人情報保護窓口</strong><br />
          Email: <a href="mailto:contact@yuyukuma-blog.com" className="text-[#FF6B35]">contact@yuyukuma-blog.com</a><br />
          受付時間: 平日 10:00-18:00
        </p>

        <hr className="border-white/10" />
        <p className="text-sm text-white/40">
          制定日: 2026年2月28日<br />
          運営者: Re-BIRTH株式会社（GASおじラボ）<br />
          所在地: 〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401号室<br />
          代表者: 松本 大輔
        </p>
      </article>
    </main>
  )
}
