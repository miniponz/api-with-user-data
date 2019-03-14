import { auth, favoritesByUserRef } from './firebase.js';
import makeCityTemplate, { clearResults } from './make-city-template.js';
// import makeHeaderTemplate from './make-header-template.js';
import './search-component.js';
import { updateCityName } from './search-component.js';
import { readQueryOptions } from './hash-functions.js';
import makeSearchUrl from './make-search-url.js';
import { loadHeader } from './make-header-template.js';

const weatherDisplay = document.getElementById('weather-display');
const prompt = document.getElementById('prompt');

loadHeader();


window.addEventListener('hashchange', loadQuery);

auth.onAuthStateChanged(() => {
    loadQuery();
});

function loadQuery() {
    clearResults();
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryOptions(query);
    updateCityName(queryOptions.q);

    const url = makeSearchUrl(queryOptions);

    if(!url) {
        prompt.classList.remove('hidden');
        weatherDisplay.classList.add('hidden');
        return;
    }
    else {
        prompt.classList.add('hidden');
        weatherDisplay.classList.remove('hidden');
    }

    fetch(url)
        .then(res => res.json())
        .then(results => {
            loadCities(results);
        });
}

function loadCities(city) {
    const dom = makeCityTemplate(city);
    const favoriteStar = dom.querySelector('.favorite-star');
    const userId = auth.currentUser.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);
    const userFavoriteCityRef = userFavoritesRef.child(city.name);
    userFavoriteCityRef.once('value')
        .then(snapshot => {
            const value = snapshot.val();
            let isFavorite = false;
            if(value) {
                addFavorite();
            }
            else {
                removeFavorite();
            }
            function addFavorite() {
                isFavorite = true;
                favoriteStar.textContent = '★';
                favoriteStar.classList.add('favorite');
            }

            function removeFavorite() {
                isFavorite = false;
                favoriteStar.textContent = '☆';
                favoriteStar.classList.remove('favorite');
            }

            favoriteStar.addEventListener('click', () => {
                if(isFavorite) {
                    userFavoriteCityRef.remove();
                    removeFavorite();
                }
                else {
                    userFavoriteCityRef.set({
                        name: city.name,
                        temp: city.main.temp,
                        wind: city.wind.speed,
                        humidity: city.main.humidity,
                        highTemp: city.main.temp_max,
                        lowTemp: city.main.temp_min,
                        description: city.weather[0].description
                    });
                    addFavorite();
                }
            });
        });
    weatherDisplay.appendChild(dom);
}