import {expect,test} from "@jest/globals";

test('object assignment',() => {
    const data = {one : 1};
    data['two'] = 5;
    expect(data).toEqual({one: 1, two: 5})
})
