# M5 Specification Document

## Features
- **Navigation Toggle:** Clicks mobile hamburger button to toggle active class.
- **Dark Mode:** Clicks theme button to toggle `.dark-theme` on body.
- **Dynamic Array Content:** Renders project cards from an array using `.map()`.
- **Form Validation:** Validates form inputs on submit and displays inline error messages.

## Pseudocode
1. Nav Toggle: Select elements, add click listener, toggle 'active' class.
2. Dark Mode: Select button, add click listener, toggle 'dark-theme' class.
3. Dynamic Array: Create project array, select container, map array into HTML strings, inject via innerHTML.
4. Form Validation: Select form and inputs, listen for submit, prevent default, check for empty fields or missing "@", display errors or success message.