const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => { topBtn.style.display = window.scrollY > 600 ? 'block' : 'none'; });
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
