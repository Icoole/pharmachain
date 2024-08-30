/*const email = document.getElementById("email")
const cac = document.getElementById("cac-number")
const business = document.getElementById("business-name")
const errorElement = document.getElementById("error")

FormData.addEventListener("submit", (e) =>{
    let messages = []
    if (business.value === "" || business.value == null){
        messages.push("Business name is required")
    }
    if (messagges.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(",")
    }
})





const business = document.getElementById('business-name');
const cac = document.getElementById('cac-number');
const email = document.getElementById('email');
const state = document.getElementById('state');
const lga = document.getElementById('lga');
const text = document.getElementById('text');
const street = document.getElementById('street-address');
const phone = document.getElementById('phone-number');
const help = document.getElementById('help');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
   
    const emailValue = email.value.trim();
   


    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

   

};
*/


document.getElementById("myForm").addEventListener("submit", function (event) {
    let isValid = true;
    const errorElements = document.querySelectorAll(".error");

    // Clear all previous error messages
    errorElements.forEach(errorElement => errorElement.innerText = "");

    // Business Name Validation
    const businessName = document.getElementById("business-name").value.trim();
    if (businessName === "") {
        document.getElementById("business-name").nextElementSibling.innerText = "Business name is required.";
        isValid = false;
    }

    // CAC Number Validation
    const cacNumber = document.getElementById("cac-number").value.trim();
    if (cacNumber === "") {
        document.getElementById("cac-number").nextElementSibling.innerText = "CAC number is required.";
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email").nextElementSibling.innerText = "Enter a valid email address.";
        isValid = false;
    }

    // State Validation
    const state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("state").nextElementSibling.innerText = "Please select a state.";
        isValid = false;
    }

    // Phone Number Validation
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById("phone-number").nextElementSibling.innerText = "Enter a valid phone number (10-15 digits).";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
