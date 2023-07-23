function validationForm(event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
    }
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
    }
    else if ("!validateEmail(email)") {
        document.getElementById("emailError").textContent = "Invalid email";
    }
    if (name !== "" && email != "" && validateEmail(email)) {
        document.getElementById("myForm").submit();
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}