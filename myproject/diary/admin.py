from django.contrib import admin
from .models import Page

# デフォルトは変更できないデータは見れもしないようになっていたのを表示させる
@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    readonly_fields = ["id", "created_at", "updated_at"]