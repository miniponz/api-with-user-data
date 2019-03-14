import cities from '../data/sample-data.js';
import makeCityTemplate, { clearResults } from './make-city-template.js';
import makeHeaderTemplate from './make-header-template.js';
import './search-component.js';
import { updateCityName } from './search-component.js';
import { readQueryOptions } from './hash-functions.js';
import makeSearchUrl from './make-search-url.js';
import { loadHeader } from './make-header-template.js';

const weatherDisplay = document.getElementById('weather-display');


function loadCities(city) {
    const dom = makeCityTemplate(city);
    weatherDisplay.appendChild(dom);
}

loadHeader();
loadCities(cities);

window.addEventListener('hashchange', () => {
    clearResults();
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryOptions(query);
    // console.log(queryOptions);
    updateCityName(queryOptions.q);
    
    const url = makeSearchUrl(queryOptions);
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(results => {
            loadCities(results);
        });
});