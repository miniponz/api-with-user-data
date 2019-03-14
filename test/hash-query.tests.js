const test = QUnit.test;

QUnit.module('hash query tests');

const API_KEY = '02fd61fe81d6deddb87cd6c131a9148d';

function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('APPID', API_KEY);
    searchParams.set('units', 'metric');

    return searchParams.toString();
}

test('write search to empty query changes query', assert => {
    //arrange
    const existingQuery = '';
    const q = 'London';
    //act
    const query = writeSearchToQuery(existingQuery, q);
    //assert
    assert.equal(query, 'q=London&APPID=02fd61fe81d6deddb87cd6c131a9148d&units=metric');
});

function readQueryOptions(query) {
    const searchParams = new URLSearchParams(query);
    const existingQuery = {
        q: searchParams.get('q'),
        units: searchParams.get('units')
    };
    return existingQuery;
}

test('read search options from query', assert => {
    //arrange
    const query = 'q=London&APPID=02fd61fe81d6deddb87cd6c131a9148d&units=metric';
    const expected = {
        q: 'London',
        units: 'metric'
    };
    //act
    const result = readQueryOptions(query);
    //assert
    assert.deepEqual(result, expected);
});