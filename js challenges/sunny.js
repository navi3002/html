const burger = document.getElementById('menu_burger');
const header = document.querySelector('.header');
const menu = document.getElementById('menu');
const fadeElements = document.querySelectorAll('.has_fade');
const body = document.querySelector('body');

const menuclickHandler = () => {
  console.log('clicked ham');

  if (menu.classList.contains('open')) {
    // body.classList.remove('noscroll');
    menu.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    // body.classList.add('noscroll');
    menu.classList.add('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
};

burger.addEventListener('click', menuclickHandler);
