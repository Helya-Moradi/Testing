import {expect, test} from '@jest/globals';

const sum = require('./sum');

const sumMock = jest.fn(sum)

test('adds 3 + 2 to equal 5', () => {
    sumMock.mockResolvedValue(6)
    expect(sumMock(3, 2)).toBe(5);
});
