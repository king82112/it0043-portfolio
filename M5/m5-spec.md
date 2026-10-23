# M5 Specification Document

## Features

### 1. Navigation Toggle
- **Trigger:** Clicking the mobile menu hamburger button.
- **Expected DOM Change:** Toggles an active class on the navigation list to show or hide the menu.
- **Edge Cases / Revisions:** Menu stays open if user resizes back to desktop view without closing it; handled with responsive CSS.

### 2. Dark Mode
- **Trigger:** Clicking the theme toggle button.
- **Expected DOM Change:** Toggles a `.dark-theme` class on the `<body>` element.
- **Edge Cases / Revisions:** Theme preference resets on page refresh (basic implementation).

### 3. Dynamic Array Content
- **Trigger:** Window/DOM load completion.
- **Expected DOM Change:** Maps through a project array and injects HTML cards into the container via `innerHTML`.
- **Edge Cases / Revisions:** Guarded against missing container elements to prevent runtime errors.

### 4. Contact Form Validation
- **Trigger:** Clicking the form's submit button.
- **Expected DOM Change:** Prevents default submission and displays specific inline error text or a success message.
- **Edge Cases / Revisions:** Added `.trim()` optimization to catch whitespace-only inputs and validation checks for missing "@" symbols in emails.

## Pseudocode

1. **Nav Toggle:** Select elements, add click listener, toggle 'active' class.
2. **Dark Mode:** Select button, add click listener, toggle 'dark-theme' class.
3. **Dynamic Array:** Create project array, select container, map array into HTML strings, inject via innerHTML.
4. **Form Validation:** Select form and inputs, listen for submit, prevent default, check for empty fields or missing "@", display errors or success message.