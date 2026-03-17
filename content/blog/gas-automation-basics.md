---
title: "GASで始める業務自動化 - 初心者向け完全ガイド"
date: "2026-03-17"
excerpt: "Google Apps Script（GAS）を使った業務自動化の基本を解説します。SaaS課金から脱却して、無料で強力な自動化を実現しましょう。"
tags: ["GAS", "自動化", "初心者向け"]
thumbnail: "/blog/gas-automation-basics.png"
---

## はじめに

「また今月もSaaSの請求が来た...」  
「Zapierの課金、高すぎる...」

そんな悩みを抱えていませんか？

**Google Apps Script**（GAS）を使えば、月額課金なしで強力な業務自動化が実現できます。

この記事では、GAS初心者の方でも今日から始められる自動化の基本を解説します。

## GASとは？

Google Apps Script（GAS）は、Googleが提供する**無料のスクリプト言語**です。

### GASでできること

- Googleスプレッドシートの自動処理
- Gmail の自動送信・整理
- Google カレンダーの予定追加
- Google フォームの回答を自動集計
- 外部APIとの連携
- Slack/Discord への通知

...そして、**全て無料**です。

## 実際の活用例

### 例1: 毎朝のレポートメール自動送信

```javascript
function sendDailyReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('データ');
  const data = sheet.getDataRange().getValues();
  
  // メール本文を作成
  let body = '本日のレポート\n\n';
  data.forEach(row => {
    body += `${row[0]}: ${row[1]}\n`;
  });
  
  // メール送信
  GmailApp.sendEmail(
    'example@example.com',
    '【自動送信】日次レポート',
    body
  );
}
```

### 例2: フォーム回答をSlackに通知

```javascript
function onFormSubmit(e) {
  const response = e.values;
  const name = response[1];
  const email = response[2];
  
  const webhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
  
  const payload = {
    text: `新しい問い合わせ\n名前: ${name}\nメール: ${email}`
  };
  
  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}
```

## まとめ

GASを使えば、**SaaS課金なしで**強力な業務自動化が実現できます。

**次のステップ:**
1. GASエディタを開いてみる
2. 簡単なスクリプトを書いてみる
3. トリガーで自動実行を設定する

GASおじラボでは、すぐに使えるGASツールを500個以上提供しています。  
月額980円で全ツール使い放題。

[メンバーシップに参加する →](https://note.com/yuyukuma_gasoji/membership)
