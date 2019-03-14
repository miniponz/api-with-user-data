export default function makeCityTemplate(data) {
    const html = /*html*/ `
    <li class="weather-li">
    <h2>${data.name}</h2>
        <section class="weather-summary">
            <h3>Outside Right Now:</h3>
            <ul>
                <li>Looks Like: ${data.weather[0].description}</li>
                <li>Temperature: ${data.main.temp}</li>
                <li>Wind Speed: ${data.wind.speed}</li>
                <li>% Humidity: ${data.main.humidity}</li>
                <li>Low Temp: ${data.main.temp_min}</li>
                <li>High Temp: ${data.main.temp_max}</li>
                <li>Add To Favorites: <span class="favorite">☆</span></li>
            </ul>
        </section>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function clearResults() {
    const ul = document.getElementById('weather-display');
    while(ul.children.length > 0) {
        ul.lastElementChild.remove();
    }
}