/**
 * Diary App Common Scripts
 */
document.addEventListener('DOMContentLoaded', () => {

    // 1. 削除ボタンの確認ダイアログ
    // class="button-delete" がついたリンクやボタンをクリックした時に発動
    const deleteButtons = document.querySelectorAll('a[href*="delete"], .button-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!confirm('本当に削除してもよろしいですか？この操作は取り消せません。')) {
                e.preventDefault();
            }
        });
    });

    // 2. 画像アップロード時のプレビュー機能
    // input[type="file"] が変更されたら画像を即座に表示
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                let preview = document.getElementById('image-preview');
                
                // プレビュー用のimgタグがなければ作る
                if (!preview) {
                    preview = document.createElement('img');
                    preview.id = 'image-preview';
                    preview.style.maxWidth = '200px';
                    preview.style.marginTop = '10px';
                    preview.style.display = 'block';
                    fileInput.parentNode.appendChild(preview);
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    preview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 3. メッセージ（通知）の自動非表示
    // Djangoのmessagesフレームワーク用。5秒後にスッと消える
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 500);
        }, 5000);
    });
    
    console.log('Diary App JS Loaded!');
});