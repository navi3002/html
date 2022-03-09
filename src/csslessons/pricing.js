const toggle = document.querySelector('.switch input');
const basicEl = document.querySelector('#basic');
const professionalEl = document.querySelector('#professional');
const masterEl = document.querySelector('#master');

toggle.addEventListener('click', (e) => {
  if (!e.target.checked) {
    basicEl.textContent = '199.99';
    professionalEl.textContent = '249.99';
    masterEl.textContent = '399.99';
  } else {
    basicEl.textContent = '19.99';
    professionalEl.textContent = '24.99';
    masterEl.textContent = '39.99';
  }
});
