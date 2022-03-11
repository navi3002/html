js;
const form = document.getElementsByTagName('form')[0];

form.setAttribute('novalidate', '');

form.addEventListener('submit', (event) => {
  if (
    !fName.validity.valid ||
    !lName.validity.valid ||
    !email.validity.valid ||
    !password.validity.valid
  ) {
    showError();
    event.preventDefault();
  }
});

const fName = document.getElementById('fname');
const fNameError = document.querySelector('.first-name .error');
const fNameErrorImg = document.querySelector('.first-name .wrapper-errorimg');

const lName = document.getElementById('lname');
const lNameError = document.querySelector('.last-name .error');
const lNameErrorImg = document.querySelector('.last-name .wrapper-errorimg');

const email = document.getElementById('email');
const emailError = document.querySelector('.email .error');
const emailErrorImg = document.querySelector('.email .wrapper-errorimg');

const password = document.getElementById('password');
const passwordError = document.querySelector('.password .error');
const passwordErrorImg = document.querySelector('.password .wrapper-errorimg');

function showError() {
  if (!fName.validity.valid) {
    if (fName.validity.valueMissing) {
      fNameError.textContent = 'First Name cannot be empty';
    }
    fNameError.classList.toggle('active', true);
    fNameErrorImg.classList.toggle('active', true);
    fName.classList.toggle('active', true);
  }

  if (!lName.validity.valid) {
    if (lName.validity.valueMissing) {
      lNameError.textContent = 'Last Name cannot be empty';
    }
    lNameError.classList.toggle('active', true);
    lNameErrorImg.classList.toggle('active', true);
    lName.classList.toggle('active', true);
  }

  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      emailError.textContent = 'Email cannot be empty';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'Email is not valid';
    }
    emailError.classList.toggle('active', true);
    emailErrorImg.classList.toggle('active', true);
    email.classList.toggle('active', true);
  }

  if (!password.validity.valid) {
    if (password.validity.valueMissing) {
      passwordError.textContent = 'Password cannot be empty';
    }
    passwordError.classList.toggle('active', true);
    passwordErrorImg.classList.toggle('active', true);
    password.classList.toggle('active', true);
  }
}
