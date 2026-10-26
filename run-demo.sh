#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
umask 077
mkdir -p .demo
export npm_config_cache="$PWD/.demo/npm-cache"
export PIP_CACHE_DIR="$PWD/.demo/pip-cache"
export COMPOSER_HOME="$PWD/.demo/composer" COMPOSER_CACHE_DIR="$PWD/.demo/composer-cache"
[[ -f .env.demo ]] || cp .env.example .env.demo
python3.11 -m venv .venv-demo
.venv-demo/bin/python -m pip install -r requirements.txt
export DJANGO_SECRET_KEY="$(.venv-demo/bin/python -c 'import secrets; print(secrets.token_urlsafe(48))')"
export DIARY_DB="$PWD/myproject/demo.sqlite3"
cd myproject
../.venv-demo/bin/python manage.py migrate --noinput
../.venv-demo/bin/python manage.py seed_demo
../.venv-demo/bin/python manage.py check
[[ "${1:-}" == "--prepare-only" ]] && exit 0
exec ../.venv-demo/bin/python manage.py runserver 127.0.0.1:8101 --noreload
