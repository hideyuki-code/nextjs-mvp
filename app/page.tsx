export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js 15 × ナンパブログ MVP
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            学習カリキュラム - 64.5時間の実践的プログラム
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 1: Next.js 基礎
              </h2>
              <p className="text-gray-600">
                App Router、Server Components、Client Components
              </p>
              <div className="mt-4 text-sm text-blue-600">
                14.5時間 / 7チケット
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 2: Tailwind CSS
              </h2>
              <p className="text-gray-600">
                モダンUI構築、レスポンシブデザイン
              </p>
              <div className="mt-4 text-sm text-blue-600">
                6時間 / 4チケット
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 3: SEO対策
              </h2>
              <p className="text-gray-600">
                メタデータ、構造化データ、検索最適化
              </p>
              <div className="mt-4 text-sm text-blue-600">
                10時間 / 5チケット
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 4: ISR・データ取得
              </h2>
              <p className="text-gray-600">
                静的生成、キャッシュ戦略、パフォーマンス
              </p>
              <div className="mt-4 text-sm text-blue-600">
                10時間 / 4チケット
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 5: MVP構築
              </h2>
              <p className="text-gray-600">
                実際のブログアプリケーション構築
              </p>
              <div className="mt-4 text-sm text-blue-600">
                15時間 / 5チケット
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 6: デプロイ・最適化
              </h2>
              <p className="text-gray-600">
                本番環境デプロイ、パフォーマンス最適化
              </p>
              <div className="mt-4 text-sm text-blue-600">
                9時間 / 4チケット
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🚀 技術スタック
              </h2>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="font-semibold text-gray-700">フロントエンド</h3>
                  <ul className="text-sm text-gray-600">
                    <li>• Next.js 15.2</li>
                    <li>• React 19</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS 4.1</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">機能</h3>
                  <ul className="text-sm text-gray-600">
                    <li>• App Router</li>
                    <li>• Server Actions</li>
                    <li>• ISR</li>
                    <li>• SEO最適化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 