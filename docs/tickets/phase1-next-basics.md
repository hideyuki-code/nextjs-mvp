# 🔰 フェーズ1：Next.js基礎理解と学習（10h）

## 📋 フェーズ概要

Next.jsの基本概念とApp Routerの理解を深め、基本的なSPAを構築します。

## 🎯 学習目標

- [ ] App Router と Pages Router の違いを理解
- [ ] Next.js のディレクトリ構成を理解
- [ ] 基本的なルーティングを実装
- [ ] TypeScript + Tailwind環境を構築

---

## 🎫 チケット一覧

### 📚 TICKET-1-1：App Router構成とPages Routerとの違いを理解する

**⏰ 予想時間：** 2h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 学習内容：**
- App Router (Next.js 13+) の特徴
- Pages Router との違い
- ファイルベースルーティングの仕組み

**📝 実装手順：**
1. Next.js公式ドキュメントでApp Routerを調査
2. Pages Routerとの比較表を作成
3. ChatGPT Webで知識を整理・言語化

**✅ 検証方法：**
- App RouterとPages Routerの違いを3つ以上説明できる
- ファイルベースルーティングの仕組みを説明できる

**📖 参考資料：**
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Migration from Pages to App](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

**💭 学習メモ：**
```
[ここに学習で得た知識を記録]
```

---

### 📚 TICKET-1-2：app/ ディレクトリ構成と layout.tsx, page.tsx の役割を理解する

**⏰ 予想時間：** 1.5h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 学習内容：**
- app/ ディレクトリの構成パターン
- layout.tsx の役割とネストレイアウト
- page.tsx の役割
- 特殊ファイル（loading.tsx, error.tsx等）

**📝 実装手順：**
1. app/ ディレクトリ構成の調査
2. layout.tsx と page.tsx の関係性を理解
3. 各ファイルの役割を図解で整理

**✅ 検証方法：**
- layout.tsx と page.tsx の違いを説明できる
- ネストレイアウトの仕組みを説明できる

**💭 学習メモ：**
```
[ここに学習で得た知識を記録]
```

---

### 🔨 TICKET-1-3：Cursorで新規プロジェクト作成（Tailwind + TypeScript）

**⏰ 予想時間：** 2h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 実装内容：**
- Next.js プロジェクトの初期化
- TypeScript + Tailwind CSS の設定
- 基本的なディレクトリ構成の構築

**📝 実装手順：**
1. `npx create-next-app@latest` でプロジェクト作成
2. TypeScript, Tailwind CSS, ESLint オプションを選択
3. 基本的なディレクトリ構成を確認
4. 開発サーバーを起動して動作確認

**✅ 検証方法：**
- [ ] プロジェクトが正常に作成される
- [ ] `npm run dev` で開発サーバーが起動
- [ ] TypeScript のコンパイルが正常に動作
- [ ] Tailwind CSS のクラスが適用される

**💭 実装メモ：**
```
[実装時の気づきや問題点を記録]
```

---

### 🔨 TICKET-1-4：2ページ構成（/ と /about）のSPAを構築

**⏰ 予想時間：** 2.5h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 実装内容：**
- ホームページ（/）の作成
- aboutページ（/about）の作成
- ナビゲーションコンポーネント
- ページ間の遷移

**📝 実装手順：**
1. `app/page.tsx` にホームページを実装
2. `app/about/page.tsx` にaboutページを実装
3. ナビゲーションコンポーネントを作成
4. `Link` コンポーネントでページ遷移を実装

**✅ 検証方法：**
- [ ] 両ページが正常に表示される
- [ ] ナビゲーションでページ遷移が動作
- [ ] URLが正しく変更される
- [ ] ブラウザの戻る/進むボタンが動作

**💭 実装メモ：**
```
[実装時の気づきや問題点を記録]
```

---

### 📚 TICKET-1-5：Routing、Link、dynamic routing（[slug]）の基礎を理解する

**⏰ 予想時間：** 2h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 学習内容：**
- Next.js のルーティング仕組み
- Link コンポーネントの使い方
- Dynamic Routes（[slug]）の基本
- パラメータの取得方法

**📝 実装手順：**
1. `/posts/[slug]` のようなdynamic routeを作成
2. `useParams` でパラメータを取得
3. Link コンポーネントで動的ルートへの遷移を実装
4. 各ルーティングパターンを実際に動作確認

**✅ 検証方法：**
- [ ] Dynamic routeが正常に動作
- [ ] パラメータが正しく取得される
- [ ] Link コンポーネントによる遷移が動作
- [ ] プログラマティックな遷移が動作

**💭 学習メモ：**
```
[ここに学習で得た知識を記録]
```

---

## 🎓 フェーズ1完了チェック

**すべてのチケットが完了したら以下を確認：**

- [ ] App Router の基本概念を理解している
- [ ] Next.js プロジェクトが正常に動作している
- [ ] TypeScript + Tailwind 環境が構築できている
- [ ] 基本的なルーティングが実装できている
- [ ] Dynamic Routes の仕組みを理解している

**🎯 次のステップ：**
[phase2-tailwind-ui.md](./phase2-tailwind-ui.md) に進む

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 