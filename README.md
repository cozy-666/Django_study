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