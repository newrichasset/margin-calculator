// 다운로드 버튼 클릭 시 효과
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // 버튼 텍스트 일시 변경
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="btn-icon">✓</span> 다운로드 시작!';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    }
});
