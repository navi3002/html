const data = [
  {
    title: 'Work',
    link: '../Images/icon-work.svg',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    link: '../Images/icon-play.svg',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    link: '../Images/icon-study.svg',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    link: '../Images/icon-exercise.svg',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    link: '../Images/icon-social.svg',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    link: '../Images/icon-self-care.svg',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const tasksHtml = document.querySelector('.menu-tasks');
const periodHtml = document.querySelectorAll('.period nav ul li');
function updateTBoxes() {
  tasksHtml.innerHTML = '';
  data.forEach((obj) => {
    tasksHtml.innerHTML += `
      <div class="task-box">
         <div class="task-box-hat"><img src="${obj.link}" alt="${obj.title}"></div>
         <div class="task-box-content">
              <div class="task-box-header">
              <h2>${obj.title}</h2>
              <button class="more-options" aria-label="options"><img src="../Images/icon-ellipsis.svg" alt="ellipsis"></button>
         </div>
              <div class="task-box-info">
                  <h3 class="total-hours">${obj.timeframes.daily.current}hrs</h3>
                  <p> Yesterday - ${obj.timeframes.daily.previous}hrs</p>
              </div>
          </div>
       </div>`;
  });
}
updateTBoxes();
const infoHtml = document.querySelectorAll('.task-box-info');

function updatePeriod(period) {
  period = period.toLowerCase();
  let pMsg;
  switch (period) {
    case 'daily':
      pMsg = 'Yesterday';
      break;
    case 'weekly':
      pMsg = 'Last Week';
      break;
    case 'monthly':
      pMsg = 'Last Month';
      break;
  }
  infoHtml.forEach((item, i) => {
    item.style.animation = '';
    setTimeout(() => {
      item.style.animation = 'changePeriod 0.3s linear';
      item.querySelector(
        'h3'
      ).innerText = `${data[i].timeframes[period].current}hrs`;
      item.querySelector(
        'p'
      ).innerText = `${pMsg} - ${data[i].timeframes[period].previous}hrs`;
    }, 40);
  });
}

periodHtml.forEach((html) => {
  html.addEventListener('click', () => {
    html.classList == '' ? updatePeriod(html.innerText) : 0;
    periodHtml.forEach((item) => (item.classList = ''));
    html.classList += 'active';
  });
});
