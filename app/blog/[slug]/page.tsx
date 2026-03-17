import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '記事が見つかりません | GASおじラボ',
    };
  }

  return {
    title: `${post.title} | GASおじラボ`,
    description: post.excerpt || `${post.title}の記事`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `${post.title}の記事`,
      type: 'article',
      publishedTime: post.date,
      images: post.ogImage ? [post.ogImage] : [],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // 構造化データ（Article schema）
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'GASおじ',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                <Link href="/blog" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  ブログ
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto">
            {/* パンくずリスト */}
            <nav className="mb-8 text-sm text-gray-500">
              <Link href="/" className="hover:text-[#FF6B35] transition-colors">
                ホーム
              </Link>
              {' / '}
              <Link href="/blog" className="hover:text-[#FF6B35] transition-colors">
                ブログ
              </Link>
              {' / '}
              <span className="text-gray-400">{post.title}</span>
            </nav>

            {/* 記事ヘッダー */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-gray-400">
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
            </header>

            {/* 記事本文 */}
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-[#FF6B35]
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-[#FF6B35] prose-a:no-underline hover:prose-a:underline
                prose-code:text-[#FF6B35] prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
                prose-ul:list-disc prose-ul:ml-6 prose-ul:text-gray-300
                prose-ol:list-decimal prose-ol:ml-6 prose-ol:text-gray-300
                prose-li:mb-2
                prose-strong:text-white prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-[#FF6B35] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* 記事フッター */}
            <footer className="mt-16 pt-8 border-t border-gray-800">
              <Link
                href="/blog"
                className="inline-block bg-gray-900 border border-gray-800 hover:border-[#FF6B35] px-6 py-3 rounded-lg transition-colors"
              >
                ← ブログ一覧に戻る
              </Link>
            </footer>
          </article>
        </main>

        {/* フッター */}
        <footer className="border-t border-gray-800 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>&copy; 2024 GASおじラボ. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
