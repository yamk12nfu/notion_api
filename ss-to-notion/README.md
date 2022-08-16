## これは何？

google spreadsheet の状態を notion に同期する。
あらかじめ notion のテーブルのカラムを期待するデータ型に設定しておく必要はある。

またスプシの方でデータのカラムが増えたら postData の部分に書き足していく必要がある。

また期待する Directly 構造は src 配下に main.js, notion.js の他に secret 情報を書き示した secret.js を作成している。
この辺りは token などの secret 管理をいい感じに各自で行うと良さそう。
