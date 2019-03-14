import cities from '../data/sample-data.js';
import { auth, favoritesByUserRef } from './firebase.js';
import makeCityTemplate, { clearResults } from './make-city-template.js';
// import makeHeaderTemplate from './make-header-template.js';
import './search-component.js';
import { updateCityName } from './search-component.js';
import { readQueryOptions } from './hash-functions.js';
import makeSearchUrl from './make-search-url.js';
import { loadHeader } from './make-header-template.js';

const weatherDisplay = document.getElementById('weather-display');


function loadCities(city) {
    const dom = makeCityTemplate(city);
    const favoriteStar = dom.querySelector('.favorite');
    favoriteStar.addEventListener('click', () => {
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCityRef = userFavoritesRef.child(city.name);
        userFavoriteCityRef.set({
            name: city.name,
            temp: city.main.temp,
            wind: city.wind.speed,
            humidity: city.main.humidity,
            highTemp: city.main.temp_max,
            lowTemp: city.main.temp_min
        });
    });
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