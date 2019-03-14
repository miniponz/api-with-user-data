import convertObjectToArray from '../src/object-to-array.js';
const test = QUnit.test;

QUnit.module('object to array test');


test('converts obj of objects to array of objects', assert => {
    //arrange
    const object = {
        abc: { id: 'abc', name: 'object1' },
        def: { id: 'def', name: 'object2' },
        ghi: { id: 'ghi', name: 'object3' },
    };

    const expected = [object.abc, object.def, object.ghi];
    //act
    const array = convertObjectToArray(object);
    //assert
    assert.deepEqual(array, expected);
});