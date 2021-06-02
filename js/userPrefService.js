'use strict';

let gUserPref = {};
let gHoroscope = {};

function changeUserPref(color, birthDate, birthTime) {
  gUserPref = {
    color,
    birthDate,
    birthTime,
  };
  // TODO: save to local storage
  saveToLocalStorage('pref', gUserPref);
}

function addHoroScope(birthDate) {
  const month = +birthDate.slice(5, 7);
  if (month >= 1 && month <= 4) {
    gHoroscope.emoji = '♈';
    gHoroscope.horoscope =
      'You are practical and persistent. You have dogged determination to work like hell. Most people think you are stubborn and bull-headed. Your nothing but a dam communist.';
  } else if (month >= 5 && month <= 8) {
    gHoroscope.emoji = '♒';
    gHoroscope.horoscope =
      'You are sympathetic and understanding of people’s problems, which makes you a sucker. You are always putting things off. That is why you will always be on welfare and won’t be worth a [damn]. Everybody in prison is a cancer.';
  } else if (month >= 9 && month <= 12) {
    gHoroscope.emoji = '♏';
    gHoroscope.horoscope =
      'The worst of the lot. You are shrewd in business and can’t be trusted. You shall achieve the pinnacle of success because of your total lack of ethics. You are a perfect son-of-a-b**ch. Most Scorpios are murderers.';
  }
  renderHoroscope(gHoroscope);
  return;
}
