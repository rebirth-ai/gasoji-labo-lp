import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'ブログ | GASおじラボ',
  description: 'GAS（Google Apps Script）の活用術、自動化テクニック、ノーコード開発のTipsをお届けします。',
  openGraph: {
    title: 'ブログ | GASおじラボ',
    description: 'GAS（Google Apps Script）の活用術、自動化テクニック、ノーコード開発のTipsをお届けします。',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* ヘッダー */}
      <header className="border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#FF6B35] hover:opacity-80 transition-opacity">
              GASおじラボ
            </Link>
            <nav className="space-x-6">
              <Link href="/" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                ホーム
              </Link>
              <Link href="/blog" className="text-[#FF6B35] font-semibold">
                ブログ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ブログ
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            GAS活用術、自動化テクニック、ノーコード開発のTipsをお届け
          </p>

          {posts.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
              <p className="text-gray-400 text-lg">記事はまだありません。</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-[#FF6B35] transition-colors"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <h2 className="text-2xl font-bold text-white hover:text-[#FF6B35] transition-colors">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-gray-400 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="text-[#FF6B35] font-semibold hover:opacity-80 transition-opacity">
                        続きを読む →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2024 GASおじラボ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
