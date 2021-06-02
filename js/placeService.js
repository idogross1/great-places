'use strict';

let map;
let places = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 29.556, lng: 34.951 },
    zoom: 12,
  });
  places = loadFromStorage('places');
  if (!places) places = [];
  map.addListener('click', onMap);
}

function addLocationToPlaces(lat, lng) {
  console.log(places);
  places.push({ lat, lng });
  saveToLocalStorage('places', places);
}
