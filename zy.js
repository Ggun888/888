document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为，即不跳转页面顶部。
        const targetId = this.getAttribute('href'); // 获取目标ID