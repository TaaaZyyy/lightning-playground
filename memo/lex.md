# Lightning Experience

## Visualforce
Lightning Experience では Visualforce ページが、Lightning Experience アプリケーション内に表示される HTML iframe に埋め込まれます。
この変更には多大な影響があり、その多くは JavaScript と外部アプリケーションへのアクセスに関係しています。

Lightning Experience で動作しないもの
Visualforce ページでの標準アクションの無効化


### LEXで動作しないもの
- PDF は Lightning Experience ビジュアルデザインで表示されない
- JavaScript コードでの window.location の使用

### LEXのUI
- Lightning Experience のメインナビゲーションヘッダーまたはサイドバーを非表示にできない
- <apex:inputField> タグは Salesforce Classic の外観で表示される
- 標準的な Visualforce ヘッダーとサイドバーは非表示になる
- Visualforce ページでの標準アクションの無効化
- カスタムアプリケーションとタブの作成
- リモートオブジェクト

### ClasicとLightningコンポーネント
Salesforce Classic で Lightning コンポーネントを開発したことがある方もいらっしゃるでしょう。以前のインターフェースを引き続き Lightning コンポーネントに使用できます。また、既存のコンポーネントの機能はすべてシームレスに Lightning Experience に移行されます。
Lightning コンポーネントは Visualforce ページで使用できる。

### Lightningコンポーネント
#### 標準コンポーネントセット
Salesforce では、アプリケーション開発を開始するためのコンポーネントが数多く用意されています。
#### パフォーマンス
このコンポーネントフレームワークは、ステートフルクライアント (JavaScript を使用) とステートレスサーバ (Apex を使用) を利用します。この構造により、クライアントからサーバへのコールはどうしても必要な場合にのみ行われるようになります。サーバへのコール回数が減るため、アプリケーションの応答性と効率が向上します。
#### イベント駆動型アーキテクチャ
イベントは Lightning コンポーネントフレームワークを使用するうえで非常に重要です。コンポーネントはアプリケーションおよびコンポーネントイベントをリスンし、適宜応答します。
#### 迅速な開発
シンプルなマークアップと事前作成されたコンポーネントで、かつてなく迅速にアプリケーションを完成させることができます。特に、Visualforce マークアップに慣れていれば、コンポーネントマークアップはいとも簡単に習得できます。
#### デバイス対応およびブラウザ間の互換性
Lightning コンポーネントの大きな利点は、デバイスやブラウザ間の互換性を心配する必要がないことです。コンポーネントフレームワークによって自動的に処理されます。



JavaScript コードでの window.location の使用


使用時の考慮事項