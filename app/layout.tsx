import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GASおじラボ｜GASツール500個で月額SaaSを完全置換',
  description: 'Google Apps Scriptで年間124万円のSaaS費用を削減。月額980円で500ツール使い放題。早期加入で永久据え置き。',
  openGraph: {
    title: 'GASおじラボ｜月額課金から自由になろう',
    description: 'GASツール500個で年間124万円のSaaS費用を削減。今なら月額980円で全ツール使い放題。',
    url: 'https://yuyukuma-blog.com',
    siteName: 'GASおじラボ',
    images: [{ url: '/hero-visual.png', width: 1200, height: 800, alt: 'GASおじラボ' }],
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yuyukuma-blog.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GASおじラボ｜月額課金から自由になろう',
    description: 'GASツール500個で年間124万円削減。月額980円で使い放題。',
    images: ['/hero-visual.png'],
    creator: '@yuyukuma0810',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
