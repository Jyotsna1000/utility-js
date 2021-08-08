const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,3,4] is [3,4]', () => {
        expect(tail([1,3,4])).toEqual([3,4]);
    });

    it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

    it('Tail of [1] is [1]', () => {
        expect(tail([1])).toEqual(1);
    });

})
