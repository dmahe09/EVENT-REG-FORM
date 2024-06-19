// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
    // Clear previous error messages
    clearErrorMessages();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        isValid = false;
        displayError('nameError', 'Name can contain letters and spaces only.');
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        displayError('emailError', 'Enter a valid email address.');
    }

    // Phone number validation
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\(\d{3}\)\d{4} \d{5}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        displayError('phoneError', 'Phone number format: (250)1234 56789.');
    }

    // Date validation
    const date = document.getElementById('date').value.trim();
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!datePattern.test(date)) {
        isValid = false;
        displayError('dateError', 'Date format: MM/DD/YYYY.');
    }

    // Number of tickets validation
    const tickets = document.getElementById('tickets').value;
    if (tickets < 1 || tickets > 10) {
        isValid = false;
        displayError('ticketsError', 'Number of tickets must be between 1 and 10.');
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
        document.getElementById('successMessage').style.display = 'block';
    }
});

function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
}
