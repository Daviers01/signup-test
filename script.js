(function main() {
  var passwordToggler = document.getElementById("pw-toggler-btn");
  var passwordInput = document.getElementById("password");
  var passwordErrors = document.getElementById("pw-errors");
  var minCharacters = document.getElementById("pw-error-min-char");
  var minNumbers = document.getElementById("pw-error-min-num");

  passwordToggler.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordToggler.classList.add("toggled");
      passwordInput.type = "text";
    } else {
      passwordToggler.classList.remove("toggled");
      passwordInput.type = "password";
    }
  });

  passwordInput.addEventListener("change", function ({ target }) {
    const value = target.value;
    passwordErrors.classList.add("show");

    // check if password has 8 characters
    if (value.length > 8) {
      minCharacters.classList.add("valid");
    } else {
      minCharacters.classList.remove("valid");
    }

    // check if password has one number
    if (value.replace(/[^0-9]/g, "").length >= 1) {
      minNumbers.classList.add("valid");
    } else {
      minNumbers.classList.remove("valid");
    }
  });
})();
