import { User } from './models/User';

const user = new User({ name: 'gbubemi', bio: 'test bio' });

user.on('click', () => {});

console.log(user);
