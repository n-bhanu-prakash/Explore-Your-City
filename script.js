// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const cards = document.querySelectorAll('.card');
  
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
  
      cards.forEach((card) => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  