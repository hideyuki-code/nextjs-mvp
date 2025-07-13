# 🔄 フェーズ4：ISRとデータ取得（10h）

## 📋 フェーズ概要

ISR（Incremental Static Regeneration）の仕組みを理解し、効率的なデータ取得システムを構築します。
**ハンズオン形式**で実際にJSON データベースと ISR を組み合わせた記事管理システムを作成します。

## 🎯 学習目標

- [ ] ISRの仕組みと利点を理解
- [ ] generateStaticParams の使い方を理解
- [ ] JSONデータを使った記事管理システムの構築
- [ ] 404・notFoundハンドリングの実装

## 🎫 チケット一覧

| チケット | 内容 | 時間 | 形式 | 進捗 |
|---------|------|------|------|------|
| [TICKET-4-1](./ticket-4-1-isr-theory.md) | ISRの仕組み（generateStaticParams, revalidate）を理解 | 2h | 📚 理論 | ⭕ |
| [TICKET-4-2](./ticket-4-2-json-data-system.md) | JSONファイル（/data/posts.json）からのデータ取得機能を実装 | 2.5h | 🔨 実装 | ⭕ |
| [TICKET-4-3](./ticket-4-3-isr-pages.md) | 記事一覧（/posts）と記事詳細（/posts/[slug]）でISR適用 | 3h | 🔨 実装 | ⭕ |
| [TICKET-4-4](./ticket-4-4-error-handling.md) | 動的ルートにおける404とnotFound処理の違いを理解 | 2.5h | 🔨 実装 | ⭕ |

**合計時間：** 10h

## 🚀 推奨学習順序

1. **理論理解（2h）**
   - TICKET-4-1：ISR基礎理解

2. **データシステム構築（2.5h）**
   - TICKET-4-2：JSON データ取得システム実装

3. **ISR実装（5.5h）**
   - TICKET-4-3：ISRページ実装
   - TICKET-4-4：エラーハンドリング実装

## 🎓 フェーズ4完了チェック

**すべてのチケットが完了したら以下を確認：**

- [ ] ISRの仕組みを理解している
- [ ] generateStaticParamsを使えるようになっている
- [ ] JSONデータからの記事管理システムが動作している
- [ ] 適切なエラーハンドリングが実装されている
- [ ] パフォーマンス最適化が適用されている

## 🎯 次のステップ

Phase4完了後は [../phase5/README.md](../phase5/README.md) に進んでください。

---

**開始日：** [日付を記入]  
**完了日：** [日付を記入]  
**実際の所要時間：** [時間を記入] 