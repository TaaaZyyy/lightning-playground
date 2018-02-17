## 変数
- const
    再代入しないときに使用する
- let
    再代入するときのみ使用する


## リテラル
リテラルとはデータ型に格納できる値、値の表現方法のこと。
- 文字列
- 数値
- 配列
    ブラケット（[]）で囲って表現する。
    入れ子可能
- オブジェクト
    {キー1: バリュー1,キー2: バリュー2}
    値が変数のときはプロパティ、関数のときはメソッドという
    プロパティのキーをプロパティ名、関数のキーをメソッド名という
- 関数
- 正規表現
    /で囲って表現する

```
/* オブジェクトリテラルのメソッドの書き方 */
var obj = {
    func1: function() {
        // 処理
    },
    func2() {
        // 処理
    }
}
```


## オブジェクト
名前とデータの組み合わせでデータを管理できるようにしたもの。


### オブジェクトの作り方
1. new演算子の使用
    オブジェクトの呼び出しにnewをつけることでインスタンスが返される
2. オブジェクトリテラルの使用

### オブジェクトのプロパティアクセス方法
1. ドット演算子
2. ブランケット構文
    keyに変数を指定可能

```
obj.key
obj['key'];

let hoge = 'key';
obj[hoge];
```

### メソッド、プロパティの追加

```
var myObj = new Object();
myObj.name = 'myObj';
myObj.getName = function() { return this.name ｝

```


## 関数
オブジェクトの一種。
()をつけることで呼び出すことができるのは関数だけ

- 関数
    - 定義
        function 関数名(引数){処理}
        let 関数名 = function(引数){処理}
    - 実行
        関数名(引数);
- 無名関数
    関数名省略
    function(引数){処理}
- 即時関数
    無名関数の定義と実行を同時に行う
    (無名関数)();
    (無名関数());



## DOM操作
Document Object Model
Webページの要素にアクセスする仕組み
- Windowオブジェクト
- Documentオブジェクト
- Elementオブジェクト
    <div id="Id名">～</div>
- Eventオブジェクト
- LocalStorageオブジェクト

### 要素（Elementオブジェクト）の取得
- IDを指定して取得
    let 変数名 = document.getElementById('Id名');
- CSSセレクタを指定して取得
    let 変数名 = document.querySelector('#form input');
- 親のElementオブジェクトを取得
    Elementオブジェクト.parentElement

### 要素リストの取得
- 要素名を取得して取得
    getElementsByTagName(tagName)
- クラス名を指定して取得
    getElementsByClassName(class)
- CSSセレクタを指定して取得
    querySelectorAll(selector)


### 値の取得
#### Elementオブジェクト.要素名
インプットテキストから入力された値を取得したいとき
document.getElementById('input').value;

### 要素の追加
- 要素の作成
var 変数名 = document.createElement("p"); // タグ名の指定
- 要素の内容を作成
    var text = document.createTextNode('text');
    要素.textContent = 'text'
- 子要素の追加
    document.body.appendChild(変数名).appendChild(text);
    親要素.appendChild(追加したい要素);

### 要素の更新(textContent,.属性名)
// textContent
var 変数名 = document.getElementById("Id名");
変数名.textContent = "hoge";

// 要素
var 変数名 = document.getElementById("Id名");
変数名.src = "hoge.png";

### 要素の削除
- 指定の子要素の削除
    Elementオブジェクト.removeChild（Elementオブジェクト)


### 要素を操作するメソッド
- イベントによる規定の動作をキャンセルする
    Event.preventDefault()
- 要素名を指定して新しい要素



## イベント
htmlで発生したイベントとjavascriptの処理を結びつけるのにイベントリスナーが必要

### htmel
onclick="関数名"

### javascript（イベントリスナー）
Elementオブジェクト.addEventListener(イベントタイプ, 関数名);
「Elementオブジェクト」に対し「イベントタイプ」のイベントが発生した場合、「関数名」が実行される。
この際、第一引数にEventオブジェクトが渡される。

### Eventオブジェクト
- event.target.parentElement
    イベントが発生したElementの親のElementを取得する

### イベントタイプ
- click
- submit


## ローカルに保存
文字列に変換されて保存される
- 登録
    localStorage.setItem('key', value)
- 取得
    localStorage.getItem('key')
- 削除
    localStorage.removeItem('key')

### 配列-文字列の変換メソッド
- JSONに変換
    JSON.stringify(obj)
- JSONから変換
    JSON.parse(jsonStr)



## 非同期通信
サーバーにリクエストを送ってから続きのコードの処理に移り、サーバーからレスポンスが帰ってきたときにコールバックが呼ばれる

XMLHttpRequest（XHR）

### 同じドメインからデータを取得する

```
  var request = new XMLHttpRequest();
  request.open('GET', 'data.json');  // 引数: 取得形式、取得先ドメイン（相対ドメイン）

  request.onload = function(data) { // コールバック（成功時） 引数にデータが来る
    console.log(data);
  };
  request.onerror = function() { // コールバック（失敗時）
    console.log('error!');
  };
  request.send(); // 送信する
```

### 異なるドメイン（クロスドメイン）からデータを取得する
XHRでは原則、クロスドメインで取得できない
- CORS(Cross-Origin Resource Sharing)
    リクエスト先のサーバが、Access-Control-Allow-Originヘッダにリクエスト元のドメインを許可していれば取得できる。
- JSONP
    XHRではなく、scriptタグを使用する
    リクエスト先のサーバーがJSONP形式（javascriptとして実行できる形式）でデータを返す必要がある。

### JSONP
scriptタブはクロスドメインOK
- 取得したいURLをscriptたぐからjavascriptとしてよみこむ
- JSONPのレスポンスに含まれる名前と同じ名前のコールバック関数（URLに直接アクセスするとJSONPの中身が見れる）を用意する
- 取得したいデータがそのコールバックに渡される
※取得したいURLがデータをJSONPの形で返却される必要がある
    callback(JSON形式のデータ);















## オブジェクト指向
一般的なオブジェクト指向「クラスからオブジェクトが作られる」
javascriptはクラスがない

javascriptのオブジェクト指向「オブジェクトはプロトタイプオブジェクトを参照することができる」

javascriptにおいては「関数=オブジェクト」

// 関数定義
var Person = function(name) {
    this.name = name || 'nanasi';
    this.sayhHello = function(){
        console.log('Hello, ' + this.name + '!');  
    };
};

// new をつけて関数をコールすると、オブジェクトが返される
var j = new Person('John');

var Hero = function(name, hp, job) {
    this.naem = name;
    this.hp = hp;
    this.job = job;
};

// Hero関数でPerson関数を継承する
Hero.prototype = new Person();

// メソッド追加
Person.prototype.teleport = function() {
    console.log('Oops!');
}


### this
1. メソッド（オブジェクトの持つ関数）呼び出し
    オブジェクト自体を表す
2. 関数呼び出し
    グローバルオブジェクトであるwindowが呼ばれる
3. コンストラクタ呼び出し
    newして作られるオブジェクト自体
4. apply,call呼び出し


### 配列
Array.push(item)
    配列の末尾に値を追加する
Array.forEach(func)
    配列の各値に対して関数を実行する
Array.indexOf(item)
    引数の値がその配列の何番目に存在するかを返す
    存在しない場合-1を返す
Array.splice(index, howMany)
    配列から値を取り除いたり、追加したりする