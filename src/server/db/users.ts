import { Query } from './index';

interface IUsers {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    _created?: Date
}

const User = async (name: string) => Query(`
INSERT INTO USERS (name)
VALUES (?)
`, [name]);

export default {
    User
};