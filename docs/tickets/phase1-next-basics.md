# 🔰 フェーズ1：Next.js基礎理解と学習（14.5h）

## 📋 フェーズ概要

Next.js 15の基本概念とApp Routerの理解を深め、基本的なSPAを構築します。

## 🎯 学習目標

- [ ] App Router と Pages Router の違いを理解
- [ ] Next.js のディレクトリ構成を理解
- [ ] 基本的なルーティングを実装
- [ ] TypeScript + Tailwind環境を構築
- [ ] Server Components と Client Components の違いを理解
- [ ] Server Actions（Next.js 15）の基本実装
- [ ] Next.js 15の新機能を理解

---

## 🎫 チケット一覧

### 📚 TICKET-1-1：App Router構成とPages Routerとの違いを理解する

**⏰ 予想時間：** 2h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 理解すべき質問（これらに答えられるようになることが目標）：**

**App Router基本理解**
- Q1: App Routerとは何ですか？Next.js 15で何が新しくなりましたか？
- Q2: App RouterとPages Routerの違いを3つ以上説明できますか？
- Q3: app/ ディレクトリの中身はどのような構造になっていますか？
- Q4: Next.js 15での新機能（React 19サポート、改良されたエラーUI、streaming metadata等）の概要は？

**ファイルベースルーティング**
- Q5: ファイルベースルーティングとは何ですか？従来のルーティングとの違いは？
- Q6: `/app/about/page.tsx` を作ると、どのURLでアクセスできますか？
- Q7: 動的ルート（`[slug]`）はどのように動作しますか？

**Next.js 15の新機能**
- Q8: Turbopack（安定版）とは何ですか？従来のwebpackとの違いは？
- Q9: Server Actions（安定版）とは何ですか？どのような場面で使いますか？
- Q10: React 19サポート、after() API、streaming metadataとは何ですか？

**実務応用**
- Q11: どのような場合にApp Routerを選択しますか？
- Q12: 既存のPages Routerプロジェクトを移行する際の注意点は？

**📝 実装手順：**
1. Next.js公式ドキュメントでApp Routerを調査
2. Pages Routerとの比較表を作成
3. ChatGPT Webで知識を整理・言語化

**✅ 検証方法：**
- 上記の質問12つすべてに具体的に答えられる
- 他の人にApp Routerの利点を説明できる
- 実際にApp Routerを使うべき場面を判断できる
- Next.js 15の新機能を理解し、適切に活用できる

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

**🎯 理解すべき質問（これらに答えられるようになることが目標）：**

**ディレクトリ構成**
- Q1: app/ ディレクトリの基本構成はどのようになっていますか？
- Q2: layout.tsx と page.tsx の違いは何ですか？
- Q3: 同じディレクトリに layout.tsx と page.tsx がある場合、どちらが先に読み込まれますか？

**layout.tsx の役割**
- Q4: layout.tsx の主な役割は何ですか？
- Q5: ネストレイアウトとは何ですか？どのような場面で使いますか？
- Q6: app/layout.tsx（ルートレイアウト）と app/blog/layout.tsx の関係は？

**特殊ファイル**
- Q7: loading.tsx, error.tsx, not-found.tsx はそれぞれどのような役割ですか？
- Q8: これらの特殊ファイルはいつ表示されますか？

**実務応用**
- Q9: 全ページ共通のヘッダー・フッターはどこに配置しますか？
- Q10: 特定のセクションだけ異なるサイドバーを表示したい場合はどうしますか？

**📝 実装手順：**
1. app/ ディレクトリ構成の調査
2. layout.tsx と page.tsx の関係性を理解
3. 各ファイルの役割を図解で整理

**✅ 検証方法：**
- 上記の質問10つすべてに具体的に答えられる
- 実際のプロジェクトでレイアウト設計ができる
- 特殊ファイルの使い分けができる

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

**🎯 理解すべき質問（これらに答えられるようになることが目標）：**

**Next.js ルーティング基本**
- Q1: Next.jsのルーティングは従来のSPAとどう違いますか？
- Q2: ファイルベースルーティングのメリットは何ですか？
- Q3: `/app/blog/[slug]/page.tsx` はどのようなURLにマッチしますか？

**Link コンポーネント**
- Q4: `<Link>` コンポーネントと `<a>` タグの違いは何ですか？
- Q5: `<Link href="/about">` と `<Link href="/posts/[slug]">` の使い分けは？
- Q6: Link コンポーネントでページ遷移した時、何が起こりますか？

**Dynamic Routes**
- Q7: `[slug]` と `[...slug]` の違いは何ですか？
- Q8: `/posts/hello-world` にアクセスした時、`slug` パラメータの値は何になりますか？
- Q9: `useParams()` と `useSearchParams()` の違いは何ですか？

**プログラマティック遷移**
- Q10: ボタンクリックで別のページに遷移させるにはどうしますか？
- Q11: `router.push()` と `router.replace()` の違いは何ですか？
- Q12: 条件に応じて異なるページにリダイレクトするにはどうしますか？

**📝 実装手順：**
1. `/posts/[slug]` のようなdynamic routeを作成
2. `useParams` でパラメータを取得
3. Link コンポーネントで動的ルートへの遷移を実装
4. 各ルーティングパターンを実際に動作確認

**✅ 検証方法：**
- 上記の質問12つすべてに具体的に答えられる
- 実際のプロジェクトでルーティング設計ができる
- Link コンポーネントとプログラマティック遷移を使い分けられる
- [ ] Dynamic routeが正常に動作
- [ ] パラメータが正しく取得される
- [ ] Link コンポーネントによる遷移が動作
- [ ] プログラマティックな遷移が動作

**💭 学習メモ：**
```
[ここに学習で得た知識を記録]
```

---

### 📚 TICKET-1-6：Server Components と Client Components の理解

**⏰ 予想時間：** 2.5h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 理解すべき質問（これらに答えられるようになることが目標）：**

**基本概念**
- Q1: Server Componentsとは何ですか？従来のReactコンポーネントとの違いは？
- Q2: Client Componentsとは何ですか？Server Componentsとの違いは？
- Q3: `'use client'` ディレクティブは何をしますか？いつ使いますか？
- Q4: Next.js App Routerでは、デフォルトでコンポーネントはServer/Clientどちらですか？

**実行環境とタイミング**
- Q5: Server Componentsはいつ・どこで実行されますか？
- Q6: Client Componentsはいつ・どこで実行されますか？
- Q7: Server Componentsでは `useState` や `useEffect` を使えますか？理由は？
- Q8: Client Componentsでは `fetch` を直接使えますか？注意点は？

**データフェッチ**
- Q9: Server Componentsでのデータフェッチはどのように行いますか？
- Q10: Client Componentsでのデータフェッチはどのように行いますか？
- Q11: Server Componentsで取得したデータをClient Componentsに渡すには？
- Q12: なぜServer Componentsでのデータフェッチが推奨されるのですか？

**パフォーマンス**
- Q13: Server Componentsのパフォーマンス上の利点は何ですか？
- Q14: Client Componentsのパフォーマンス上の注意点は何ですか？
- Q15: バンドルサイズにどのような影響がありますか？

**実務での使い分け**
- Q16: どのような場合にServer Componentsを使うべきですか？
- Q17: どのような場合にClient Componentsを使うべきですか？
- Q18: インタラクティブな要素（ボタン、フォーム）はどちらで作るべきですか？
- Q19: 外部ライブラリを使う場合の注意点は？
- Q20: Server ComponentsとClient Componentsを混在させる際のベストプラクティスは？

**📝 実装手順：**
1. Server Componentsの基本概念を学習
2. Client Componentsとの違いを理解
3. 実際にサンプルコンポーネントを作成して動作確認
4. データフェッチの違いを実装で確認

**✅ 検証方法：**
- 上記の質問20つすべてに具体的に答えられる
- Server ComponentsとClient Componentsを適切に使い分けられる
- 実際のプロジェクトでパフォーマンスを考慮した設計ができる
- 他の人にServer/Client Componentsの違いを説明できる

**💭 学習メモ：**
```
[ここに学習で得た知識を記録]
```

---

### 🔨 TICKET-1-7：Server Actions の基本実装（Next.js 15）

**⏰ 予想時間：** 2h  
**📊 進捗：** 
- [ ] 実装完了
- [ ] 検証完了  
- [ ] 知識定着完了

**🎯 理解すべき質問（これらに答えられるようになることが目標）：**

**Server Actions基本**
- Q1: Server Actionsとは何ですか？Next.js 15での位置づけは？
- Q2: Server Actionsと従来のAPI routesの違いは何ですか？
- Q3: `'use server'` ディレクティブの役割は何ですか？
- Q4: Server Actionsはどこで実行されますか？

**フォーム処理**
- Q5: フォームでServer Actionsを使うにはどうしますか？
- Q6: `action` propにServer Actionsを渡す方法は？
- Q7: FormDataを使ったデータ取得方法は？
- Q8: Server Actionsでのバリデーション方法は？

**エラーハンドリング**
- Q9: Server Actionsでのエラーハンドリングはどうしますか？
- Q10: クライアントサイドでServer Actionsのエラーを処理するには？
- Q11: `redirect()` や `revalidatePath()` の使い方は？

**実務応用**
- Q12: どのような場面でServer Actionsを使うべきですか？
- Q13: Server ActionsとServer Componentsの組み合わせ方は？
- Q14: Server Actionsのセキュリティ考慮事項は？
- Q15: Server ActionsとClient Componentsの連携方法は？

**📝 実装手順：**
1. Server Actionsの基本概念を学習
2. 簡単なフォーム処理を実装
3. エラーハンドリングを追加
4. 実用的なサンプルを作成

**✅ 検証方法：**
- 上記の質問15つすべてに具体的に答えられる
- Server Actionsを使ったフォーム処理を実装できる
- 適切なエラーハンドリングができる
- Server ActionsとAPI routesの使い分けができる

**💭 実装メモ：**
```
[実装時の気づきや問題点を記録]
```

---

## 🎓 フェーズ1完了チェック

**すべてのチケットが完了したら以下を確認：**

- [ ] App Router の基本概念を理解している
- [ ] Next.js プロジェクトが正常に動作している
- [ ] TypeScript + Tailwind 環境が構築できている
- [ ] 基本的なルーティングが実装できている
- [ ] Dynamic Routes の仕組みを理解している
- [ ] Server Components と Client Components の違いを理解している
- [ ] 'use client' ディレクティブの使い方を理解している
- [ ] Server Actions の基本実装ができている
- [ ] Next.js 15の新機能を理解している

**🎯 次のステップ：**
[phase2-tailwind-ui.md](./phase2-tailwind-ui.md) に進む

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 