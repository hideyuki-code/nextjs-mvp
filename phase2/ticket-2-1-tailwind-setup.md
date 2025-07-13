# 🔨 TICKET-2-1：Tailwind 導入 + globals.css セットアップ

**⏰ 予想時間：** 1.5h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

## 🎯 実装内容

- Tailwind CSSの詳細設定
- globals.cssのカスタマイズ
- テーマ設定・カラーパレット
- フォント設定

## 📝 ハンズオン実装手順

### Step 1: tailwind.config.js の設定確認・調整

```javascript
// tailwind.config.js
import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        accent: {
          500: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

### Step 2: globals.css のカスタマイズ

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: Inter, system-ui, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-gray-900;
  }
  
  p {
    @apply text-gray-700 leading-relaxed;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md border border-gray-200 p-6;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### Step 3: layout.tsx でのフォント設定

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ナンパブログ MVP',
  description: 'Next.js 15 × Tailwind CSS 4.1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
```

### Step 4: テスト用コンポーネント作成

```tsx
// app/test-styles/page.tsx
export default function TestStyles() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-primary-900">
        Tailwind CSS テスト
      </h1>
      
      {/* カラーパレットテスト */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-primary-50 p-4 rounded">Primary 50</div>
        <div className="bg-primary-500 text-white p-4 rounded">Primary 500</div>
        <div className="bg-primary-900 text-white p-4 rounded">Primary 900</div>
        <div className="bg-accent-500 text-white p-4 rounded">Accent 500</div>
      </div>
      
      {/* ボタンテスト */}
      <div className="space-x-4">
        <button className="btn-primary">プライマリボタン</button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          セカンダリボタン
        </button>
      </div>
      
      {/* カードテスト */}
      <div className="card max-w-md">
        <h2 className="text-xl font-bold mb-2">カードタイトル</h2>
        <p className="text-gray-600">
          これはテスト用のカードコンポーネントです。
          スタイリングが正しく適用されているか確認します。
        </p>
      </div>
      
      {/* レスポンシブテスト */}
      <div className="bg-blue-100 p-4 rounded text-center md:bg-green-100 lg:bg-yellow-100">
        <p className="text-sm md:text-base lg:text-lg">
          レスポンシブテスト: 
          <span className="block md:inline"> モバイル: 青 </span>
          <span className="block md:inline"> タブレット: 緑 </span>
          <span className="block md:inline"> デスクトップ: 黄 </span>
        </p>
      </div>
    </div>
  )
}
```

## ✅ 検証方法

### 自動チェック
- [ ] `npm run dev` でサーバーが正常起動
- [ ] `/test-styles` ページにアクセス
- [ ] Tailwind CSSクラスが正常に適用される
- [ ] カスタムカラーが表示される
- [ ] フォント設定が反映される
- [ ] レスポンシブクラスが動作する

### 手動チェック
- [ ] ブラウザでモバイル・タブレット・デスクトップ表示を確認
- [ ] ホバーエフェクトが動作する
- [ ] カスタムコンポーネントクラス（.btn-primary, .card）が動作する

### 開発者ツールで確認
```bash
# 以下のコマンドでTailwind CSSのビルドを確認
npm run build
```

## 🧪 動作確認

1. **カラーパレット確認**
   - Primary色（50, 500, 900）が正しく表示される
   - Accent色が正しく表示される

2. **レスポンシブ確認**
   - 画面幅を変更して背景色が変わることを確認
   - テキストサイズが画面幅に応じて変更される

3. **フォント確認**
   - Interフォントが適用されている
   - 日本語フォントが適切にフォールバックされる

## 💭 実装メモ

```
[実装時の気づきや問題点を記録]

✅ 完了事項:
- 

❌ 問題点:
- 

💡 学んだこと:
- 

🔄 改善点:
- 
```

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 