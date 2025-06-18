const readMoreBtn = document.getElementById('readMoreBtn');
if (readMoreBtn) {
  const moreContent = document.getElementById('intro-more');
  readMoreBtn.addEventListener('click', () => {
    const visible = moreContent.style.display === 'block';
    moreContent.style.display = visible ? 'none' : 'block';
    readMoreBtn.textContent = visible ? 'Read More' : 'Read Less';
  });
}
