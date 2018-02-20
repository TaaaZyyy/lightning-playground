## Visualforceでの使用

```
    <apex:page
        showHeader="false"
        standardStylesheets="false"
        sidebar="false"
        applyHtmlTag="false"
        applyBodyTag="false"
        docType="html-5.0">


    <!-- xmlnsの記述はVisualforceでSVG icon sprite mapsを使用するのに必要 -->
    <!-- この指定にはsidebar、showHeaderがfalseである必要がある -->
    <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" /> <!-- IEの場合、最新バージョンの標準モードで表示 -->
    <title>Salesforce Lightning Design System Trailhead Module</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" /> <!-- viewportをデバイスの幅の1倍に合わせる -->

    <!-- LSDSのCSSをインポート -->
    <apex:slds />
    </head>
    <body>
    <!-- REQUIRED SLDS WRAPPER -->
    <!-- Visualforceの場合、SLDSを使用するには要素がslds-scopeの影響下にある必要がある -->
    <div class="slds-scope">
```
## ユーティリティクラス
### [テキスト](https://www.lightningdesignsystem.com/utilities/text/)
我々のフレームワークでは、すべての見出し（h1〜h6）は、マージンとパディングがゼロにリセットされたベース（本文）サイズにリセットされます。ンタープライズアプリケーションを構築する場合、見出しレベルはコンポーネントまたはページのコンテキストによって異なる場合があります。アクセシビリティのためには、正しい見出しレベルを使用することが重要です。テキストヘルパークラスは、 **構造マークアップ階層とは別にビジュアル階層を維持** するのに役立ちます。
- テキストの見た目の変更をアプリケーション全体で一貫性を持たせるため使用する。
slds-text-body_
slds-text-heading_
slds-text-title_
slds-text-link_
slds-text-color_
slds-text-align_
slds-text-longform

### [マージン](https://www.lightningdesignsystem.com/utilities/margin)、[パディング](https://www.lightningdesignsystem.com/utilities/padding)
SLDSではアプリケーションの構築を前提としているため、デフォルトのマージンはすべて削除されているので、明示的に入れる必要がある。
slds-m-bottom_small
- -m -p
- _xxx-small _xx-small _x-small _small _mediam _large _x-large _xx-large
- -top -bottom -right -left -horizontal -vartical -around

## コンポーネント
### バッジ
slds-badge

## BEM
- block: 高位のコンポネント
- element: 下位のコンポネント
- modifier: 状態
複数-単語
ブロック__エレメント--モディファー
