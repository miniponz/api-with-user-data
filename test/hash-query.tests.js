import { writeSearchToQuery, readQueryOptions } from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module('hash query tests');

test('write search to empty query changes query', assert => {
    //arrange
    const existingQuery = '';
    const q = 'London';
    //act
    const query = writeSearchToQuery(existingQuery, q);
    //assert
    assert.equal(query, 'q=London&APPID=02fd61fe81d6deddb87cd6c131a9148d&units=metric');
});

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