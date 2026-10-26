# Django_study
# Pythonバージョンを設定
pyenv local 3.11.6

# Djangoをインストール
pip install django

django-admin startproject myproject

# WEBで確認
python manage.py runserver
http://127.0.0.1:8000/diary/

# migration
python manage.py makemigrations
python manage.py sqlmigrate diary 0001
BEGIN;
--
-- Create model Page
--
CREATE TABLE "diary_page" ("id" char(32) NOT NULL PRIMARY KEY, "title" varchar(100) NOT NULL, "body" text NOT NULL, "page_data" date NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
COMMIT;

python manage.py migrate

# 管理サイトでログインできるユーザー作成
python manage.py createsuperuser

user
test@gmail.com
password

#　画像ファイルを扱うとき下記インストール必要
pip install pillow

## ログイン、ログアウト機能
python manage.py startapp accounts
## 作例デモの起動（Mac）

リポジトリ直下で `bash run-demo.sh` を実行してください。初回は依存をインストールし、撮影専用DBを準備して架空データを投入します。起動後のURLは http://localhost:8101 です。

- 撮影候補: `http://localhost:8101/diary/`, `http://localhost:8101/diary/pages/`, `http://localhost:8101/diary/page/create/`
- ログイン: demo / DemoOnly123!
- 撮影前: /login/ でログイン。一覧から日記の詳細にも移動できます。
- データ: SQLite: myproject/demo.sqlite3
- 停止: 起動したターミナルで Ctrl+C。

`bash run-demo.sh --prepare-only` では依存・DB・シード・ビルドまで行い、サーバーを起動せず終了します。`.env.example` を `.env.demo` にコピーし、必要な接続値と秘密値はスクリプトが専用設定として生成・指定します（環境ファイルが必要ない単純なPHPデモを除く）。既存の `.env` を上書きしません。キャッシュはリポジトリ内 `.demo/`、Python仮想環境は `.venv-demo/` に作ります。

検証範囲・残る確認: Python依存の取得がDNS制限で失敗したため、migrate・Django check・画面の実行確認はMac側で必要です。
