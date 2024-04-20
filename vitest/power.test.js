import {expect, test} from "vitest";
import power from './power';

test('power number', () => {
    expect(power(2, 3)).toBe(8);
})