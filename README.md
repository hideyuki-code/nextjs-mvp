# 🚀 Next.js 15 × ナンパブログ MVP 学習カリキュラム

**ハンズオン形式**でNext.js 15 + Tailwind CSS 4.1を使ったブログMVPを構築しながら学習するカリキュラムです。

## 📋 プロジェクト概要

実際のコードを書きながら、Next.js 15の基礎から実践的なMVP構築まで段階的に学習します。
**理論学習 + 実装実践**のバランスを重視したチケット制学習システムです。

## 🎯 学習目標

- [ ] Next.js 15 App Router の完全理解
- [ ] Tailwind CSS 4.1 を使ったモダンUI実装
- [ ] SEO最適化とパフォーマンス向上
- [ ] ISR（Incremental Static Regeneration）の実践活用
- [ ] 実用的なブログMVPの構築
- [ ] Vercelでの本番デプロイ体験

## 📚 カリキュラム構成（合計64.5h）

| フェーズ | 内容 | 時間 | チケット数 | 形式 |
|---------|------|------|-----------|------|
| [Phase 1](./phase1/) | Next.js基礎理解と学習 | 14.5h | 7個 | 📚理論 + 🔨実装 |
| [Phase 2](./phase2/) | Tailwind CSS導入とUI構築 | 6h | 4個 | 📚理論 + 🔨実装 |
| [Phase 3](./phase3/) | SEOと構造化データの学習 | 10h | 5個 | 📚理論 + 🔨実装 |
| [Phase 4](./phase4/) | ISRとデータ取得 | 10h | 4個 | 📚理論 + 🔨実装 |
| [Phase 5](./phase5/) | MVP構築（ナンパ×思想×自己理解ブログ） | 15h | 5個 | 🔨実装 + 📚理論 |
| [Phase 6](./phase6/) | デプロイ・公開・振り返り | 9h | 4個 | 🔨実装 + 📚理論 |

## 🎫 チケット制学習システム

### 📋 チケットの種類
- **📚 理論チケット**: 概念理解・知識定着に重点
- **🔨 実装チケット**: コード実装・ハンズオンに重点

### ✅ 進捗管理
各チケットには以下の完了チェックがあります：
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

### 🧪 ハンズオン要素
- **実際のコード例**：そのまま使える実装コード
- **Step-by-Step実装手順**：迷わず進められるガイド
- **検証方法**：動作確認の具体的手順
- **実践課題**：応用力を身につける追加課題

## 🛠 技術スタック

### Core
- **Next.js 15.2** (latest stable)
- **React 19** 
- **TypeScript 5.x**
- **Tailwind CSS 4.1** (latest stable)

### Features
- **App Router**: 最新のNext.jsルーティング
- **Server Components**: サーバーサイドコンポーネント
- **Server Actions**: フォーム処理・データ更新
- **ISR**: インクリメンタル静的再生成
- **CSS-first Configuration**: Tailwind CSS 4.1の新機能

### Tools
- **Vercel**: デプロイ・ホスティング
- **ESLint**: コード品質管理
- **Prettier**: コードフォーマット

## 🚀 学習の始め方

### 1. 環境セットアップ
```bash
# リポジトリのクローン
git clone <repository-url>
cd NextJS

# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

### 2. Phase 1から開始
```bash
# Phase 1ディレクトリへ移動
cd phase1

# README.mdを確認して学習開始
cat README.md
```

### 3. チケット単位で学習
- 各チケットファイル（`ticket-x-x-xxx.md`）を順番に進める
- 実装コードをそのまま書き写して動作確認
- 完了チェックで進捗を管理

## 📁 ディレクトリ構成

```
NextJS/
├── phase1/                 # Phase 1: Next.js基礎
│   ├── README.md
│   ├── ticket-1-1-app-router-basics.md
│   ├── ticket-1-2-directory-structure.md
│   └── ...
├── phase2/                 # Phase 2: Tailwind CSS
│   ├── README.md
│   ├── ticket-2-1-tailwind-setup.md
│   └── ...
├── phase3/                 # Phase 3: SEO
├── phase4/                 # Phase 4: ISR
├── phase5/                 # Phase 5: MVP構築
├── phase6/                 # Phase 6: デプロイ
├── app/                    # Next.js App Router
├── components/             # Reactコンポーネント
├── types/                  # TypeScript型定義
├── lib/                    # ユーティリティ関数
├── data/                   # JSONデータ
└── docs/                   # ドキュメント
```

## 🎓 学習効果を最大化するコツ

### 1. **ハンズオンファースト**
- 理論を読んだらすぐに実装
- コードを書きながら理解を深める

### 2. **進捗の可視化**
- チェックボックスで完了状況を管理
- 実装メモで学びを記録

### 3. **実践課題へのチャレンジ**
- 基本実装後は応用課題にも挑戦
- 自分なりのカスタマイズを追加

### 4. **段階的な学習**
- Phase順に進める（飛ばさない）
- 前のPhaseの知識を活用して進歩を実感

## 🌟 完成時のスキル

このカリキュラム完了時には以下ができるようになります：

### 技術スキル
- [ ] Next.js 15 App Routerの実装
- [ ] Tailwind CSS 4.1でのモダンUI構築
- [ ] TypeScriptでの型安全な開発
- [ ] ISRを活用したパフォーマンス最適化
- [ ] SEO最適化とアクセシビリティ対応
- [ ] Vercelでの本番デプロイ

### 実務スキル
- [ ] MVPの設計・実装・デプロイ
- [ ] レスポンシブWebデザイン
- [ ] コンポーネント設計
- [ ] 構造化データとメタデータ管理
- [ ] エラーハンドリング
- [ ] パフォーマンス測定・改善

## 🤝 学習サポート

### 質問・相談
- 各チケットの実装メモセクションを活用
- 詰まった箇所は具体的に記録

### コミュニティ
- 学習進捗をSNSでシェア
- #NextJS学習 などのハッシュタグで仲間と情報交換

---

**🎯 Let's Build Something Amazing!**

このカリキュラムで、実践的なNext.js開発スキルを身につけて、
理想のWebアプリケーションを構築できるようになりましょう！ 