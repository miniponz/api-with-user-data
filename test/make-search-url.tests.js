import makeSearchUrl from '../src/make-search-url.js';
const test = QUnit.test;
const API_KEY = '02fd61fe81d6deddb87cd6c131a9148d';

QUnit.module('url tests');


test('creates url from queryOptions with city, key, and units', assert => {
    //arrange
    const queryOptions = {
        APPID: API_KEY,
        q: 'London',
        units: 'metric'
    };
    //act
    const expected = 'https://api.openweathermap.org/data/2.5/weather?APPID=02fd61fe81d6deddb87cd6c131a9148d&q=London&units=metric';
    const result = makeSearchUrl(queryOptions);
    //assert
    assert.equal(result, expected);
});