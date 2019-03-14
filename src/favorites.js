import { loadHeader } from './make-header-template.js';
import convertObjectToArray from './object-to-array.js';
import { auth, favoritesByUserRef } from './firebase.js';
// import makeCityTemplate from './make-city-template.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const cities = convertObjectToArray(value);
        loadFavorites(cities);
    });
});

function loadFavorites(cities) {
    cities.forEach(city => {
        const favoritesDisplay = document.getElementById('favorites-display');
        const dom = makeFavoriteTemplate(city);
        favoritesDisplay.appendChild(dom);
    });
}

function makeFavoriteTemplate(city) {
    const html = /*html*/ `
    <li class="weather-li">
    <h2>${city.name}</h2>
        <section class="weather-summary">
            <h3>Outside Right Now:</h3>
            <ul>
                <li>Looks Like: ${city.description}</li>
                <li>Temperature: ${city.temp}</li>
                <li>Wind Speed: ${city.wind}</li>
                <li>% Humidity: ${city.humidity}</li>
                <li>Low Temp: ${city.lowTemp}</li>
                <li>High Temp: ${city.highTemp}</li>
                <li>Add To Favorites: <span class="favorite-star">☆</span></li>
            </ul>
        </section>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
