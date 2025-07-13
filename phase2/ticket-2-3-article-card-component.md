# 🔨 TICKET-2-3：記事カードコンポーネント作成（タイトル・日付・タグ）

**⏰ 予想時間：** 2h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

## 🎯 実装内容

- 記事カードコンポーネントの作成
- タイトル・日付・タグの表示
- ホバーエフェクトの追加
- TypeScript型定義

## 📝 ハンズオン実装手順

### Step 1: 記事データの型定義

```typescript
// types/article.ts
export interface Article {
  id: string
  title: string
  description: string
  publishedAt: string
  tags: string[]
  category: 'pickup' | 'career' | 'self-understanding'
  slug: string
  readingTime: number
}

export interface ArticleCardProps {
  article: Article
  className?: string
}
```

### Step 2: ArticleCard コンポーネント実装

```tsx
// components/ArticleCard.tsx
import Link from 'next/link'
import { Article } from '@/types/article'
import { formatDate } from '@/lib/utils'

interface ArticleCardProps {
  article: Article
  className?: string
}

export default function ArticleCard({ article, className = '' }: ArticleCardProps) {
  const categoryColors = {
    pickup: 'bg-red-100 text-red-800',
    career: 'bg-blue-100 text-blue-800',
    'self-understanding': 'bg-green-100 text-green-800'
  }

  const categoryLabels = {
    pickup: 'ナンパ',
    career: 'キャリア',
    'self-understanding': '自己理解'
  }

  return (
    <Link 
      href={`/posts/${article.slug}`}
      className={`group block ${className}`}
    >
      <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-full
                        hover:shadow-lg hover:border-gray-300 
                        transition-all duration-300 ease-in-out
                        transform hover:-translate-y-1">
        
        {/* カテゴリバッジ */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full
                           ${categoryColors[article.category]}`}>
            {categoryLabels[article.category]}
          </span>
          <time className="text-sm text-gray-500">
            {formatDate(article.publishedAt)}
          </time>
        </div>

        {/* タイトル */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2
                      group-hover:text-blue-600 transition-colors">
          {article.title}
        </h2>

        {/* 説明文 */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 
                       rounded hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{article.tags.length - 3} more
            </span>
          )}
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.readingTime}分で読める</span>
          <span className="text-blue-600 group-hover:text-blue-700 font-medium">
            続きを読む →
          </span>
        </div>
      </article>
    </Link>
  )
}
```

### Step 3: ユーティリティ関数の実装

```typescript
// lib/utils.ts
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
```

### Step 4: CSS ユーティリティの追加

```css
/* globals.css に追加 */
@layer utilities {
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

### Step 5: テストデータの作成

```typescript
// data/sample-articles.ts
import { Article } from '@/types/article'

export const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'ナンパで学んだコミュニケーションの本質',
    description: '街中での声かけから学んだ、人とのつながりを深めるための実践的なコミュニケーション術をお伝えします。',
    publishedAt: '2024-01-15',
    tags: ['コミュニケーション', '実践', '心理学'],
    category: 'pickup',
    slug: 'nanpa-communication-essence',
    readingTime: 5
  },
  {
    id: '2',
    title: 'キャリア形成における自己分析の重要性',
    description: '自分の強みと弱みを正確に把握し、理想のキャリアパスを描くための自己分析手法について解説します。',
    publishedAt: '2024-01-12',
    tags: ['キャリア', '自己分析', '転職'],
    category: 'career',
    slug: 'career-self-analysis',
    readingTime: 8
  },
  {
    id: '3',
    title: '価値観の棚卸しで見つける本当の自分',
    description: '日々の忙しさに埋もれがちな自分自身の価値観を見つめ直し、人生の方向性を明確にする方法をご紹介します。',
    publishedAt: '2024-01-10',
    tags: ['価値観', '自己理解', '人生設計'],
    category: 'self-understanding',
    slug: 'values-inventory-true-self',
    readingTime: 6
  }
]
```

### Step 6: カードの表示テストページ

```tsx
// app/test-cards/page.tsx
import ArticleCard from '@/components/ArticleCard'
import { sampleArticles } from '@/data/sample-articles'

export default function TestCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        記事カードテスト
      </h1>
      
      {/* 単体カード */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">単体カード</h2>
        <div className="max-w-md mx-auto">
          <ArticleCard article={sampleArticles[0]} />
        </div>
      </section>
      
      {/* グリッドレイアウト */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">グリッドレイアウト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article}
            />
          ))}
        </div>
      </section>
      
      {/* レスポンシブテスト */}
      <section>
        <h2 className="text-2xl font-bold mb-6">レスポンシブテスト</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {sampleArticles.map((article) => (
            <ArticleCard 
              key={`responsive-${article.id}`} 
              article={article}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
```

## ✅ 検証方法

### 自動チェック
- [ ] TypeScript のコンパイルエラーがない
- [ ] `/test-cards` ページが正常に表示される
- [ ] 記事カードが適切にレンダリングされる
- [ ] ホバーエフェクトが動作する

### 視覚的チェック
- [ ] カテゴリバッジの色分けが正しい
- [ ] タイトルが2行で切り詰められる
- [ ] 説明文が3行で切り詰められる
- [ ] タグが適切に表示される（3個まで + more表示）
- [ ] 日付が日本語形式で表示される

### レスポンシブチェック
- [ ] モバイル（360px〜）で正常表示
- [ ] タブレット（768px〜）で2列グリッド
- [ ] デスクトップ（1024px〜）で3列グリッド
- [ ] ホバー時のアニメーションが滑らか

### アクセシビリティチェック
- [ ] キーボードナビゲーションが可能
- [ ] スクリーンリーダーで読み上げ可能
- [ ] 色だけに依存しない情報伝達
- [ ] 適切なコントラスト比

## 🧪 カスタマイズ課題

以下の機能を追加実装してみてください：

1. **お気に入り機能**
```tsx
// ハートアイコンのお気に入りボタンを追加
<button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg">
  <HeartIcon className="w-5 h-5" />
</button>
```

2. **カテゴリフィルター**
```tsx
// カテゴリ別に記事をフィルタリング
const [selectedCategory, setSelectedCategory] = useState<string>('all')
```

3. **読み込み状態**
```tsx
// スケルトンローディング
<div className="animate-pulse bg-gray-200 rounded h-4 mb-2"></div>
```

## 💭 実装メモ

```
[実装時の気づきや問題点を記録]

✅ 完了事項:
- 

🎨 デザインの工夫:
- 

🔧 技術的な学び:
- 

🚀 改善アイデア:
- 
```

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 