document.getElementById('login_btn').addEventListener('click', function () {
    const emailField = document.getElementById('email_field');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('password_field');
    const passwordValue = passwordField.value;
    if (emailValue == 'ilovenisat@gmail.com' && passwordValue == 'password') {
        window.location.href = 'banking.html'
    }
    else {
        alert('email or password is incorrect');
    }
});