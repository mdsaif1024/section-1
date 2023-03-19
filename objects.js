let user = { name: 'Saif', email: 'saif@gmail.com', password: '12345'};
console.log(user.password);
console.log(user['name']);

user.address = 'Lucknow'
console.log(user);

user.email = 'kaif@gmail.com';

console.log(user);

delete user.password;

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

let smartphone = {
    brand : 'samsung',
    model : 'galaxy s',
    price : 78000,
    color : 'white',

}

console.log(smartphone.color);

smartphone.color = ['white', 'red', 'black'];

console.log(smartphone.color[1]);

smartphone.color.push('blue');
console.log(smartphone);