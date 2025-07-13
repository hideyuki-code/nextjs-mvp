# 📚 TICKET-2-2：ユーティリティCSSの考え方／クラスの構成を理解する

**⏰ 予想時間：** 1h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

## 🎯 理解すべき質問（これらに答えられるようになることが目標）

### ユーティリティファーストCSS
- **Q1:** ユーティリティファーストCSSとは何ですか？
- **Q2:** 従来のCSS設計（BEM、OOCSS等）との違いは何ですか？
- **Q3:** ユーティリティファーストCSSのメリットとデメリットは？
- **Q4:** どのような場面でユーティリティファーストCSSを使うべきですか？

### Tailwind CSSの基本
- **Q5:** Tailwind CSSの命名規則はどのようになっていますか？
- **Q6:** `w-4` と `w-16` の違いは何ですか？サイズの基準は？
- **Q7:** `text-red-500` と `text-red-700` の違いは何ですか？
- **Q8:** `m-4` と `p-4` の違いは何ですか？

### レスポンシブデザイン
- **Q9:** Tailwind CSSでレスポンシブデザインを実装するにはどうしますか？
- **Q10:** `sm:`, `md:`, `lg:`, `xl:` の各ブレークポイントの幅は？
- **Q11:** `hidden md:block` は何を意味しますか？
- **Q12:** モバイルファーストとデスクトップファーストの違いは？

### 効率的なクラスの使い方
- **Q13:** 同じスタイルを複数の要素に適用する場合の最適な方法は？
- **Q14:** `@apply` ディレクティブはいつ使うべきですか？
- **Q15:** コンポーネントの再利用性を高めるためのベストプラクティスは？

### 実務応用
- **Q16:** ダークモードの実装にはどのクラスを使いますか？
- **Q17:** Flexboxレイアウトの実装によく使うクラスは？
- **Q18:** グリッドレイアウトの実装によく使うクラスは？

## 📝 ハンズオン学習手順

### Step 1: 基本的なサイズ・色の理解

```tsx
// 実際にコードを書いて確認してみましょう
// app/utility-practice/page.tsx
export default function UtilityPractice() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* サイズの理解 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">サイズの理解</h2>
        <div className="space-y-2">
          <div className="w-4 h-4 bg-blue-500">w-4 h-4 (16px)</div>
          <div className="w-8 h-8 bg-blue-500">w-8 h-8 (32px)</div>
          <div className="w-16 h-16 bg-blue-500">w-16 h-16 (64px)</div>
        </div>
      </section>

      {/* 色の理解 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">色の理解</h2>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-red-100 p-2 text-center">100</div>
          <div className="bg-red-300 p-2 text-center">300</div>
          <div className="bg-red-500 p-2 text-center text-white">500</div>
          <div className="bg-red-700 p-2 text-center text-white">700</div>
          <div className="bg-red-900 p-2 text-center text-white">900</div>
        </div>
      </section>

      {/* マージン・パディングの違い */}
      <section>
        <h2 className="text-2xl font-bold mb-4">マージン vs パディング</h2>
        <div className="bg-gray-100 p-4">
          <div className="bg-blue-200 m-4 p-4">
            m-4 (margin) + p-4 (padding)
          </div>
        </div>
      </section>
    </div>
  )
}
```

### Step 2: レスポンシブデザインの実装

```tsx
// レスポンシブ実装例
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-red-100 p-4 text-center">
    <p className="text-sm md:text-base lg:text-lg">
      モバイル: 1列<br />
      タブレット: 2列<br />
      デスクトップ: 3列
    </p>
  </div>
</div>

{/* ナビゲーションメニューの例 */}
<nav className="hidden md:flex space-x-4">
  <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
  <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
  <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
</nav>
```

### Step 3: @apply ディレクティブの実践

```css
/* globals.css に追加 */
@layer components {
  .btn-base {
    @apply font-semibold py-2 px-4 rounded-lg transition-colors;
  }
  
  .btn-primary {
    @apply btn-base bg-blue-500 hover:bg-blue-600 text-white;
  }
  
  .btn-secondary {
    @apply btn-base bg-gray-200 hover:bg-gray-300 text-gray-800;
  }
  
  .card-hover {
    @apply bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300;
  }
}
```

### Step 4: Flexbox vs Grid の実装比較

```tsx
// Flexboxレイアウト
<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 bg-blue-100 p-4">メイン</div>
  <div className="w-full md:w-64 bg-gray-100 p-4">サイドバー</div>
</div>

// Gridレイアウト
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <div className="md:col-span-3 bg-blue-100 p-4">メイン</div>
  <div className="bg-gray-100 p-4">サイドバー</div>
</div>
```

## ✅ 検証方法

### 理論理解チェック
- [ ] 上記の質問18つすべてに具体的に答えられる
- [ ] 実際のプロジェクトでTailwind CSSを効率的に使える
- [ ] レスポンシブデザインを適切に実装できる
- [ ] 効率的なクラスの組み合わせ方を理解している

### 実装チェック
- [ ] `/utility-practice` ページが正常に表示される
- [ ] レスポンシブデザインが動作する
- [ ] @apply ディレクティブが動作する
- [ ] Flexbox と Grid の使い分けができる

### ブレークポイント確認
```javascript
// Tailwind CSS のブレークポイント
const breakpoints = {
  sm: '640px',   // スマートフォン
  md: '768px',   // タブレット
  lg: '1024px',  // ラップトップ
  xl: '1280px',  // デスクトップ
  '2xl': '1536px' // 大型デスクトップ
}
```

## 🧪 実践課題

以下のレイアウトを Tailwind CSS で実装してみてください：

1. **ヘッダー**
   - モバイル: ハンバーガーメニュー
   - デスクトップ: 横並びナビゲーション

2. **カードグリッド**
   - モバイル: 1列
   - タブレット: 2列
   - デスクトップ: 3列

3. **フッター**
   - 2段組レイアウト
   - レスポンシブ対応

## 💭 学習メモ

```
[ここに学習で得た知識を記録]

🔑 重要なポイント:
- 

📱 レスポンシブのコツ:
- 

🎨 効率的なスタイリング:
- 

⚡ パフォーマンス考慮点:
- 
```

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 