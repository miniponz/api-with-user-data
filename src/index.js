import cities from '../data/sample-data-array.js';
import makeCityTemplate from './make-city-template.js';
import makeHeaderTemplate from './make-header-template.js';
import './search-component.js';

const weatherDisplay = document.getElementById('weather-display');
const headerDisplay = document.getElementById('header-display');

function loadCities(cities) {
    cities.list.forEach(city => {
        const dom = makeCityTemplate(city);
        weatherDisplay.appendChild(dom);
    });
}

function loadHeader() {
    const dom = makeHeaderTemplate();
    headerDisplay.appendChild(dom);
}

loadHeader();
loadCities(cities);