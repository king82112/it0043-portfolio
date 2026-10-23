const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

const projects = [
    { title: "Project One", desc: "A simple HTML and CSS layout project." },
    { title: "Project Two", desc: "An interactive JavaScript application." }
];
const container = document.getElementById('project-container');
if (container) {
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </div>
    `).join('');
}

const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name cannot be blank.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email containing "@".';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (isValid) {
            form.reset();
            const successMsg = document.getElementById('success-message');
            if (successMsg) successMsg.textContent = 'Form submitted successfully!';
        }
    });
}
