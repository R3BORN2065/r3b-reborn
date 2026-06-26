const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => { topBtn.classList.toggle('show', window.scrollY > 700); });
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
