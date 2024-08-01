document.addEventListener('DOMContentLoaded', () => {
    const form = document.createElement('form');
    form.id = 'signup-form';
    form.action = '/submit-form';
    form.method = 'post';

    // Create form elements dynamically
    const fields = [
        { id: 'business-name', name: 'business-name', type: 'text', label: 'Business Name', required: true },
        { id: 'cac-number', name: 'cac-number', type: 'text', label: 'CAC Number', required: true },
        { id: 'email', name: 'email', type: 'email', label: 'Email Address (for correspondence)', required: true },
        { id: 'state', name: 'state', type: 'text', label: 'State', placeholder: 'Search States...', required: true },
        { id: 'lga', name: 'lga', type: 'text', label: 'LGA', placeholder: 'Select LGA (Must choose a state first)', required: true },
        { id: 'street-address', name: 'street-address', type: 'text', label: 'Street Address', placeholder: 'Street Address', required: true },
        { id: 'patients', name: 'patients', type: 'number', label: 'Number of patients in your care', required: true },
        { id: 'phone-number', name: 'phone-number', type: 'tel', label: 'Phone Number', required: true },
        { id: 'help', name: 'help', type: 'textarea', label: 'How can Pharmachain help your organization?', required: true }
    ];

    // Create form groups and append to the form
    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        formGroup.appendChild(label);

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }

        input.id = field.id;
        input.name = field.name;
        if (field.placeholder) {
            input.placeholder = field.placeholder;
        }
        if (field.required) {
            input.required = true;
        }

        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });

    // Add submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Apply';
    form.appendChild(submitButton);

    // Add terms and conditions
    const terms = document.createElement('div');
    terms.className = 'terms';
    terms.innerHTML = "By Clicking 'Apply', you agree to our <a href='#'>Terms and Conditions</a>";
    form.appendChild(terms);

    // Add login link
    const loginLink = document.createElement('div');
    loginLink.className = 'login-link';
    loginLink.innerHTML = "Already have an account? <a href='#'>Login</a>";
    form.appendChild(loginLink);

    // Append the form to the container
    document.querySelector('.box').appendChild(form);

    // Validate form on submit
    form.addEventListener('submit', (event) => {
        let isValid = true;
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove()); // Clear previous errors

        // Validation functions
        const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const validatePhoneNumber = (phoneNumber) => /^[0-9+\-()\s]{10,}$/.test(phoneNumber);

        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (field.required && !element.value) {
                displayError(field.id, `${field.label} is required.`);
                isValid = false;
            } else if (field.id === 'email' && !validateEmail(element.value)) {
                displayError(field.id, 'A valid Email Address is required.');
                isValid = false;
            } else if (field.id === 'phone-number' && !validatePhoneNumber(element.value)) {
                displayError(field.id, 'A valid Phone Number is required.');
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    function displayError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.textContent = message;
        field.parentElement.appendChild(error);
    }
});
