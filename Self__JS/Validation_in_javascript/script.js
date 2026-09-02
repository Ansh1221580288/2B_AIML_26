const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const course = document.getElementById("course").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const rollError = document.getElementById("rollError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const ageError = document.getElementById("ageError");
    const courseError = document.getElementById("courseError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const successMessage =
        document.getElementById("successMessage");

    // Clear previous errors
    nameError.textContent = "";
    rollError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    ageError.textContent = "";
    courseError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    const namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } 
    else if (!namePattern.test(name)) {
        nameError.textContent = "Name should contain only letters";
        isValid = false;
    }

    // Roll number validation
    if (roll === "") {
        rollError.textContent = "Roll number is required";
        isValid = false;
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } 
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    } 
    else if (!phonePattern.test(phone)) {
        phoneError.textContent =
            "Phone number must contain 10 digits";
        isValid = false;
    }

    // Age validation
    if (age === "") {
        ageError.textContent = "Age is required";
        isValid = false;
    } 
    else if (age < 16 || age > 60) {
        ageError.textContent =
            "Age must be between 16 and 60";
        isValid = false;
    }

    // Course validation
    if (course === "") {
        courseError.textContent = "Please select a course";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } 
    else if (password.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent =
            "Please confirm your password";
        isValid = false;
    } 
    else if (password !== confirmPassword) {
        confirmPasswordError.textContent =
            "Passwords do not match";
        isValid = false;
    }

    // Final result
    if (isValid) {

        successMessage.textContent =
            "Student registration successful!";

        form.reset();
    }
});