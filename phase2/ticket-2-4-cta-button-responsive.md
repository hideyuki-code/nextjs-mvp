# 🔨 TICKET-2-4：CTAボタン／レスポンシブ対応

**⏰ 予想時間：** 1.5h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

## 🎯 実装内容

- CTAボタンコンポーネントの作成
- プライマリ・セカンダリボタンのバリエーション
- レスポンシブ対応の実装
- アクセシビリティ考慮

## 📝 ハンズオン実装手順

### Step 1: ボタンの型定義

```typescript
// types/button.ts
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
```

### Step 2: Button コンポーネント実装

```tsx
// components/Button.tsx
import Link from 'next/link'
import { ButtonProps } from '@/types/button'
import { cn } from '@/lib/utils'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  href,
  className = '',
  type = 'button',
}: ButtonProps) {
  
  // バリエーション別スタイル
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:bg-blue-50'
  }

  // サイズ別スタイル
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }

  // 基本スタイル
  const baseClasses = cn(
    'font-semibold rounded-lg transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:-translate-y-0.5 active:translate-y-0',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  )

  // ローディング時のスピナー
  const Spinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  // ボタンの内容
  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  )

  // hrefが指定されている場合はLinkコンポーネントを使用
  if (href) {
    return (
      <Link 
        href={href}
        className={baseClasses}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  // 通常のbuttonタグ
  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
```

### Step 3: CTA専用コンポーネント

```tsx
// components/CTASection.tsx
import Button from './Button'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = ''
}: CTASectionProps) {
  return (
    <section className={`bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        {/* レスポンシブボタンレイアウト */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href={primaryButtonHref}
            variant="primary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 min-w-48"
          >
            {primaryButtonText}
          </Button>
          
          {secondaryButtonText && secondaryButtonHref && (
            <Button
              href={secondaryButtonHref}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 min-w-48"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
```

### Step 4: レスポンシブナビゲーション

```tsx
// components/Navigation.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* ロゴ */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            ナンパブログ
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            <Link href="/posts" className="text-gray-600 hover:text-gray-900">
              記事一覧
            </Link>
            <Link href="/category/pickup" className="text-gray-600 hover:text-gray-900">
              ナンパ
            </Link>
            <Link href="/category/career" className="text-gray-600 hover:text-gray-900">
              キャリア
            </Link>
            <Link href="/category/self-understanding" className="text-gray-600 hover:text-gray-900">
              自己理解
            </Link>
          </div>

          {/* デスクトップCTAボタン */}
          <div className="hidden md:block">
            <Button href="/subscribe" size="sm">
              購読する
            </Button>
          </div>

          {/* モバイルハンバーガーメニュー */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/posts" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                記事一覧
              </Link>
              <Link 
                href="/category/pickup" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ナンパ
              </Link>
              <Link 
                href="/category/career" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                キャリア
              </Link>
              <Link 
                href="/category/self-understanding" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                自己理解
              </Link>
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button href="/subscribe" fullWidth>
                  購読する
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
```

### Step 5: テストページの作成

```tsx
// app/test-buttons/page.tsx
'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'

export default function TestButtons() {
  const [loading, setLoading] = useState(false)

  const handleLoadingTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      {/* ボタンバリエーション */}
      <section>
        <h2 className="text-2xl font-bold mb-6">ボタンバリエーション</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* ボタンサイズ */}
      <section>
        <h2 className="text-2xl font-bold mb-6">ボタンサイズ</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>

      {/* 状態テスト */}
      <section>
        <h2 className="text-2xl font-bold mb-6">ボタン状態</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={handleLoadingTest}>
            {loading ? 'Loading...' : 'Test Loading'}
          </Button>
          <Button fullWidth className="sm:max-w-xs">Full Width</Button>
        </div>
      </section>

      {/* レスポンシブボタングループ */}
      <section>
        <h2 className="text-2xl font-bold mb-6">レスポンシブボタングループ</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="sm:min-w-48">
            メインアクション
          </Button>
          <Button variant="outline" size="lg" className="sm:min-w-48">
            サブアクション
          </Button>
        </div>
      </section>

      {/* CTAセクション */}
      <CTASection
        title="ナンパブログで人生を変えよう"
        description="コミュニケーション力向上からキャリア形成まで、あなたの成長をサポートする記事をお届けします。"
        primaryButtonText="今すぐ始める"
        primaryButtonHref="/posts"
        secondaryButtonText="詳細を見る"
        secondaryButtonHref="/about"
      />
    </div>
  )
}
```

## ✅ 検証方法

### 機能チェック
- [ ] 全ボタンバリエーションが正常に表示される
- [ ] ホバーエフェクトが動作する
- [ ] ローディング状態が動作する
- [ ] disabled状態が動作する
- [ ] リンクボタン（href付き）が動作する

### レスポンシブチェック
- [ ] モバイル（360px〜）でボタンが適切に表示される
- [ ] タブレット（768px〜）でレイアウトが調整される
- [ ] デスクトップ（1024px〜）で最適な表示になる
- [ ] ナビゲーションのハンバーガーメニューが動作する

### アクセシビリティチェック
- [ ] キーボードでボタンにフォーカスできる
- [ ] フォーカス時の視覚的インジケーターが表示される
- [ ] スクリーンリーダーで適切に読み上げられる
- [ ] 色だけに依存しない情報伝達ができている

### パフォーマンスチェック
- [ ] アニメーションが滑らか（60fps）
- [ ] ボタンの応答が瞬時
- [ ] 不要な再レンダリングが発生しない

## 🧪 カスタマイズ課題

以下の機能を追加実装してみてください：

1. **アイコン付きボタン**
```tsx
<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  追加する
</Button>
```

2. **ドロップダウンボタン**
```tsx
<ButtonGroup>
  <Button>保存</Button>
  <DropdownButton options={['下書き保存', '公開']} />
</ButtonGroup>
```

3. **フローティングアクションボタン**
```tsx
<FloatingButton 
  className="fixed bottom-6 right-6"
  variant="primary"
  size="lg"
/>
```

## 💭 実装メモ

```
[実装時の気づきや問題点を記録]

🎨 デザイン決定事項:
- 

📱 レスポンシブ対応のポイント:
- 

♿ アクセシビリティで工夫した点:
- 

⚡ パフォーマンス最適化:
- 
```

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 