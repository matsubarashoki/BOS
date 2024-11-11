import { WikiType } from "../type/type";

export const WikiRecords: WikiType[] = [
  {
    id: 1,
    parentsId: null,
    key: "howToUseWiki",
    title: "Wikiの使い方",
    contents: `
# MarkDownEditerの使い方

MarkDownEditerは、Markdown記法を使用してシンプルかつ効率的に文書を作成できるエディタです。以下によく使う記法とその例を示します。

## 1. 見出しの作成

\`#\`を使って見出しを作成します。

\`\`\`markdown
# 見出し1
## 見出し2
### 見出し3
\`\`\`

### 出力:
# 見出し1  
## 見出し2  
### 見出し3  

---

## 2. リストの作成

- **箇条書きリスト**は\`-\`や\`*\`で作成できます。
- **番号付きリスト**は\`1.\`、\`2.\`のように記述します。

\`\`\`markdown
- アイテム1
- アイテム2
  - サブアイテム

1. 項目1
2. 項目2
\`\`\`

### 出力:
- アイテム1  
- アイテム2  
  - サブアイテム  

1. 項目1  
2. 項目2  

---

## 3. 強調表示

テキストを強調するために以下の記法を使用します。

\`\`\`markdown
**太字**
*斜体*
~~取り消し線~~
\`\`\`

### 出力:
**太字**  
*斜体*  
~~取り消し線~~  

---

## 4. リンクと画像

リンクと画像の挿入も簡単です。

\`\`\`markdown
[リンクテキスト](https://example.com)

![代替テキスト](https://via.placeholder.com/150)
\`\`\`

### 出力:
[リンクテキスト](https://example.com)  

![代替テキスト](https://via.placeholder.com/150)  

---

## 5. コードブロック

コードを挿入する際は、バッククォートを使用します。

### インラインコード:
\`\`\`markdown
\`const value = 10;\`
\`\`\`
**出力:** \`const value = 10;\`

### コードブロック:
\`\`\`javascript  
const value = 10;  
console.log(value);  
\`\`\`

**出力:**

\`\`\`javascript
const value = 10;
console.log(value);
\`\`\`

---

## 6. 引用

引用文を挿入する場合、\`>\`を使用します。

\`\`\`markdown
> これは引用文です。
\`\`\`

### 出力:
> これは引用文です。

---

## 7. 表の作成

以下の記法で表を作成できます。

\`\`\`markdown
| 見出し1 | 見出し2 | 見出し3 |
|---------|---------|---------|
| データ1 | データ2 | データ3 |
| データ4 | データ5 | データ6 |
\`\`\`

### 出力:

| 見出し1 | 見出し2 | 見出し3 |
|---------|---------|---------|
| データ1 | データ2 | データ3 |
| データ4 | データ5 | データ6 |

---

以上がMarkDownEditerのよく使う基本的な機能です。これらを活用して、効率的に文書を作成してみてください！
`,
  },
  {
    id: 2,
    parentsId: null,
    key: "Java",
    title: "Java",
    contents: `
# Java言語の概要

Javaは、**オブジェクト指向**、**プラットフォーム非依存**、**セキュア**なプログラミング言語として1995年にサン・マイクロシステムズ（現オラクル）によって公開されました。以下にJavaの特徴と用途を解説します。

## 主な特徴

### 1. **プラットフォーム非依存**
Javaで書かれたプログラムは、一度バイトコード（中間コード）にコンパイルされ、JVM（Java Virtual Machine）上で実行されます。このため、**「Write Once, Run Anywhere」**（一度書けばどこでも動く）が実現されます。

### 2. **オブジェクト指向**
Javaはオブジェクト指向プログラミング（OOP）を採用しています。クラスとオブジェクトを使用してコードを整理し、再利用性を高めることができます。主要なOOPの概念には以下が含まれます:
- **カプセル化**
- **継承**
- **ポリモーフィズム**

### 3. **豊富な標準ライブラリ**
Javaには、文字列操作、データ構造、ネットワーキング、データベースアクセス、GUI開発、暗号化など、多くの機能を提供する標準ライブラリが付属しています。

### 4. **強力なメモリ管理**
Javaは**ガベージコレクション**を使用してメモリを自動的に管理します。開発者が明示的にメモリを解放する必要がないため、メモリリークのリスクが減少します。

### 5. **マルチスレッド**
Javaはマルチスレッドをネイティブにサポートしており、並行処理を簡単に実装できます。これにより、効率的なパフォーマンスを実現します。

## 主な用途

### 1. **Webアプリケーション**
Javaは、企業向けのWebアプリケーションを構築するために広く使用されています。特に**Spring**や**Jakarta EE**（旧Java EE）などのフレームワークがよく利用されます。

### 2. **モバイルアプリケーション**
Androidアプリケーションの開発において、Javaは公式な言語として長い間使用されてきました（現在はKotlinも採用）。

### 3. **デスクトップアプリケーション**
JavaのGUIライブラリ（**JavaFX**、**Swing**）を使用してクロスプラットフォームのデスクトップアプリを構築できます。

### 4. **組み込みシステム**
Javaはデバイスや組み込みシステム（例: スマートカード、セットトップボックス）でも使用されます。

### 5. **大規模なエンタープライズシステム**
銀行、保険、在庫管理などの大規模な業務システムでJavaが利用されています。

## Javaプログラムの基本構造

以下は、簡単なJavaプログラムの例です。

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### 解説
- **\`public class HelloWorld\`**: \`HelloWorld\`というクラスを定義。
- **\`public static void main(String[] args)\`**: プログラムのエントリーポイント。
- **\`System.out.println\`**: コンソールにメッセージを表示。

## まとめ

Javaは、**高い移植性**、**堅牢性**、**セキュリティ**を備えたプログラミング言語であり、さまざまな分野で広く活用されています。初学者にも学びやすく、企業システムからモバイルアプリまで幅広い用途に適しています。
`,
  },
  {
    id: 3,
    parentsId: null,
    key: "JavaScrpt",
    title: "JavaScrpt",
    contents: `
# JavaScript言語の概要

JavaScriptは、**動的**で**軽量**なスクリプト言語で、主にWebブラウザ上で動作します。1995年にNetscape社によって開発され、現在ではWebアプリケーション開発において不可欠な技術となっています。以下にJavaScriptの特徴と用途を解説します。

## 主な特徴

### 1. **動的型付け**
JavaScriptでは、変数の型を明示的に指定する必要がありません。同じ変数に異なる型の値を代入できます。

\`\`\`javascript
let value = 42;     // 数値
value = "Hello";    // 文字列
\`\`\`

### 2. **イベント駆動**
JavaScriptは、ユーザーの操作（クリックや入力など）やその他のイベントに応じて処理を実行することが得意です。

### 3. **非同期処理**
非同期処理をサポートしており、**コールバック**、**Promise**、**async/await**を使用して効率的なコードを書くことができます。

\`\`\`javascript
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
\`\`\`

### 4. **プロトタイプベースのオブジェクト指向**
JavaScriptはプロトタイプ継承を使用してオブジェクトを構築します。

\`\`\`javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(\`Hello, my name is ${name}\`);
};

const person = new Person('Alice');
person.greet(); // Hello, my name is Alice
\`\`\`

### 5. **クロスプラットフォーム**
JavaScriptは、Webブラウザだけでなく、Node.jsを使用してサーバーサイドでも実行可能です。

## 主な用途

### 1. **クライアントサイド開発**
ブラウザ上で動作し、動的なユーザーインターフェースや操作を実現します。**DOM操作**を通じてページの内容を動的に更新できます。

### 2. **サーバーサイド開発**
Node.jsを使用すると、JavaScriptをサーバーサイドで実行できます。これにより、クライアントとサーバーの両方で同じ言語を使用することが可能です。

### 3. **モバイルアプリ開発**
**React Native**を使って、JavaScriptでモバイルアプリを開発することができます。

### 4. **デスクトップアプリ開発**
**Electron**フレームワークを使えば、クロスプラットフォームのデスクトップアプリを構築可能です。

## JavaScriptの基本構造

以下は、簡単なJavaScriptプログラムの例です。

\`\`\`javascript
function greet(name) {
    console.log(\`Hello, ${name}!\`);
}

greet('World'); // Hello, World!
\`\`\`

### 解説
- **\`function greet(name)\`**: \`name\`という引数を取る関数を定義。
- **\`console.log\`**: コンソールにメッセージを表示。

## まとめ

JavaScriptは、Web開発において最も重要な言語の一つです。ブラウザでの動作を基本としながらも、サーバーサイドやモバイルアプリなど幅広い用途に利用されています。軽量かつ柔軟な性質を活かして、効率的な開発が可能です。
`,
  },
  {
    id: 4,
    parentsId: null,
    key: "TypeScrpt",
    title: "TypeScrpt",
    contents: "TypeScrptとは~~",
  },
  {
    id: 5,
    parentsId: null,
    key: "React",
    title: "React",
    contents: "Reactとは~~",
  },
  {
    id: 6,
    parentsId: 3,
    key: "Sample",
    title: "Sample",
    contents: "Sampleとは~~",
  },
];
