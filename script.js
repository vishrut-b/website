/* script.js */
console.log('Document loaded: initializing scripts');
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  console.log(`Found ${readMoreButtons.length} read-more buttons`);
  readMoreButtons.forEach(btn => {
    console.log('Attaching click listener to', btn);
    btn.addEventListener('click', () => {
      const more = btn.previousElementSibling;
      console.log('Toggling more-content for', more);
      more.classList.toggle('show');
      const isShowing = more.classList.contains('show');
      btn.textContent = isShowing ? 'Read Less' : 'Read More';
      console.log(`Button text changed to: ${btn.textContent}`);
    });
  });
});
