# M5 Optimization & Critique Documentation

## 1. The Function Optimized
The contact form submission event listener function responsible for client-side input validation, error handling, and form resetting:

```javascript
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