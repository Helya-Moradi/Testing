import axios from 'axios';
import Users from './users';

const users = [{name: 'amin', age: 18}]
jest.mock('axios');

test('should fetch users', () => {
    const res = [{name: 'amin', age: 18}];
    const resp = {data: res};
    axios.get.mockResolvedValue(resp);

    return Users.all().then(data => expect(data).toEqual(users));
});