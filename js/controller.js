'use strict';

function init() {
  gUserPref = loadFromStorage('pref');
  console.log(gUserPref.birthDate);
  // background color
  changeBackgroundColor(gUserPref.color);
  // render horoscope
  addHoroScope(gUserPref.birthDate);
}

function changeBackgroundColor(color) {
  const elHomePage = document.querySelector('.home-page');
  elHomePage.style.backgroundColor = color;
}

function onSubmit(event) {
  event.preventDefault();
  const color = document.querySelector('.color').value;
  const birthDate = document.querySelector('.birth-date').value;
  const birthTime = document.querySelector('.birth-time').value;
  changeUserPref(color, birthDate, birthTime);
}
function renderHoroscope(gHoroscope) {
  const elHoroscope = document.querySelector('.horoscope');
  console.log(elHoroscope);
  elHoroscope.classList.remove('hide');
  elHoroscope.querySelector('.emoji').innerText = gHoroscope.emoji;
  elHoroscope.querySelector('p').innerText = gHoroscope.horoscope;
}
