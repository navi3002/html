'use strict';

const questionText = document.querySelectorAll('.accordion-question');
const hiddenText = document.querySelectorAll('.hidden-text');
const arrow = document.querySelectorAll('.arrow-down');

for (let i = 0; i < hiddenText.length; i++) {
  questionText[i].addEventListener('click', function () {
    hiddenText[i].classList.toggle('hidden');
    questionText[i].classList.toggle('open');
    arrow[i].classList.toggle('arrow-rotate');
  });
}
