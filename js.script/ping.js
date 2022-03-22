const form = document.querySelector('#form');
const email = document.querySelector('#email');
const validEmailMessage = document.querySelector('#valid-email');
const noEmailMessage = document.querySelector('#no-email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateEmail();
});

// Error and success functions

const noEmailFunction = () => {
  email.classList.add('border');
  email.classList.remove('success');
  noEmailMessage.classList.add('error');
  validEmailMessage.classList.remove('error');
};

const validEmailFunction = () => {
  email.classList.add('border');
  email.classList.remove('success');
  noEmailMessage.classList.remove('error');
  validEmailMessage.classList.add('error');
};

const successEmailFunction = () => {
  email.classList.remove('border');
  email.classList.add('success');
  noEmailMessage.classList.remove('error');
  validEmailMessage.classList.remove('error');
};

// Validation functions

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    noEmailFunction();
  } else if (!isValidEmail(emailValue)) {
    validEmailFunction();
  } else {
    successEmailFunction();
  }
};
