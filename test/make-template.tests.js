import './html-equal.js';
import makeCityTemplate from '../src/make-city-template.js';
import makeHeaderTemplate from '../src/make-header-template.js';

const test = QUnit.test;

QUnit.module('template tests');

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
    <li class="weather-li">        
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



test('template will match hard coded header', assert => {
    //arrange
    
    //act
    const result = makeHeaderTemplate();
    //assert
    assert.htmlEqual(result, /*html*/ `
    <header>
        <img class="header-image" src="./assets/snowflake.jpg" alt="microscopic snowflake against blue background">
        <h1>What's It Doing Outside?</h1>
        <img class="header-image" src="./assets/sun.jpeg" alt="photograph of sun against blue sky">
    </header>
    `);
});