const head = require('./head');

describe('Head', () => {

    it('Head of [1,3,4] is 1', () => {
        expect(head([1,3,4])).toEqual(1);
    });

    it('Head of [] is undefined', () => {
        expect(head([])).toEqual('undefined');
    });

})
