const cube = require('./cube');
const identity = require('./identity');
const map = require('./map');

describe('Map', () => {

    it('cube of [1,3,4] is [1,27,64]', () => {
        expect(map([1,3,4],cube)).toEqual([1,27,64]);
    });

    it('identity of [1,2,3] is [1,2,3]', () => {
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });

})
