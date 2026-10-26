from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from diary.models import Page
from datetime import date

class Command(BaseCommand):
    help = "Create fictional screenshot data in a separate demo database"
    def handle(self, *args, **kwargs):
        u, _ = get_user_model().objects.get_or_create(username="demo", defaults={"email": "demo@example.invalid"})
        u.set_password("DemoOnly123!")
        u.save()
        for i, title in enumerate(["架空の庭の観察", "試作ノートの記録"], 1):
            Page.objects.update_or_create(owner=u, title=title, defaults={"body": "画面撮影専用の架空の日記です。", "page_date": date(2026, 10, i)})
        self.stdout.write("Fictional demo data ready")
