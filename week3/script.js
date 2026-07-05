const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

const readMoreBtn = document.querySelector('.read-more-btn');
const shortText = document.querySelector('.card-text.short');
const fullText = document.querySelector('.card-text.full');

readMoreBtn.addEventListener('click', () => {
    const isHidden = fullText.classList.contains('hidden');
    fullText.classList.toggle('hidden');
    shortText.classList.toggle('hidden');
    readMoreBtn.textContent = isHidden ? 'Read Less' : 'Read More';
});

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Message can\'t be empty';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    if (valid) {
        successMsg.classList.remove('hidden');
        form.reset();
        setTimeout(() => successMsg.classList.add('hidden'), 3000);
    }
});