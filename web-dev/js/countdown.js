const countdown = () => {
  const countDate = new Date('2023-03-24 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Убедитесь, что элементы имеют правильные классы
  const days = document.querySelector('.timer-days');
  const hours = document.querySelector('.timer-hours');
  const minutes = document.querySelector('.timer-minutes');
  const seconds = document.querySelector('.timer-seconds');

  if (gap > 0) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Обновите текст в элементах
    days.innerText = textDay < 10 ? `0${textDay}` : textDay;
    hours.innerText = textHour < 10 ? `0${textHour}` : textHour;
    minutes.innerText = textMinute < 10 ? `0${textMinute}` : textMinute;
    seconds.innerText = textSecond < 10 ? `0${textSecond}` : textSecond;
  } else {
    // Обновите текст, если время вышло
    days.innerText = '00';
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
  }
};

// Запустите функцию один раз, чтобы избежать задержки
countdown();

// Обновляйте каждую секунду
setInterval(countdown, 1000);
