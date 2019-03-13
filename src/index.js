import cities from '../data/sample-data-array.js';
import makeCityTemplate from './make-city-template.js';
const weatherDisplay = document.getElementById('weather-display');

function loadCities(cities) {
    cities.list.forEach(city => {
        const dom = makeCityTemplate(city);
        weatherDisplay.appendChild(dom);
    });
}

loadCities(cities);