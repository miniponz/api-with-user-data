import './html-equal.js';

const test = QUnit.test;

function makeCityTemplate(data) {
    const html = /*html*/ `
    <li>
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
            </ul>
        </section>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('template matches harded coded HTML display', assert => {
    //arrange
    const data = {
        'coord':{ 'lon':139, 'lat':35 },
        'sys':{ 'country':'JP', 'sunrise':1369769524, 'sunset':1369821049 },
        'weather':[{ 'id':804, 'main':'clouds', 'description':'overcast clouds', 'icon':'04n' }],
        'main':{ 'temp':289.5, 'humidity':89, 'pressure':1013, 'temp_min':287.04, 'temp_max':292.04 },
        'wind':{ 'speed':7.31, 'deg':187.002 },
        'rain':{ '3h':0 },
        'clouds':{ 'all':92 },
        'dt':1369824698,
        'id':1851632,
        'name':'Shuzenji',
        'cod':200 
    };

    //act
    const result = makeCityTemplate(data);

    //assert
    assert.htmlEqual(result, /*html*/`    
    <li>        
        <h2>Shuzenji</h2>
        <section class="weather-summary">
            <h3>Outside Right Now:</h3>
            <ul>
                <li>Looks Like: overcast clouds</li>
                <li>Temperature: 289.5</li>
                <li>Wind Speed: 7.31</li>
                <li>% Humidity: 89</li>
                <li>Low Temp: 287.04</li>
                <li>High Temp: 292.04</li>
            </ul>
        </section>
    </li>
    `);
});