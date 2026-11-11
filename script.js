// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Menu Category Filter
const tabButtons = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    menuItems.forEach((item) => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Table Reservation Confirmation
const reserveForm = document.getElementById('reserveForm');
const reserveMsg = document.getElementById('reserveMsg');

reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  reserveMsg.textContent = 'Table reserved! We look forward to welcoming you.';
  reserveForm.reset();
});
