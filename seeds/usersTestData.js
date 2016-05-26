
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({userID: 1, name: 'Buckey', email: 'buckey@gmail.com', hashedPassword: 'qwieu838'}),
    knex('users').insert({userID: 2, name: 'Toni', email: 'toni@gmail.com', hashedPassword: 'ewfkjuw'}),
    knex('users').insert({userID: 3, name: 'Natasha', email: 'natasha@gmail.com', hashedPassword: 'edfkjuw'}),
    knex('users').insert({userID: 4, name: 'Wanda', email: 'wanda@gmail.com', hashedPassword: '34fkjuw'}),
    knex('users').insert({userID: 5, name: 'Clint', email: 'clint@gmail.com', hashedPassword: 'ewf567uw'}),
    knex('users').insert({userID: 6, name: 'Challa', email: 'challa@gmail.com', hashedPassword: 'wekjuw'}),
    knex('users').insert({userID: 7, name: 'Tina', email: 'tina@gmail.com', hashedPassword: 'ewfkjcf3'}),
    knex('users').insert({userID: 8, name: 'Karpov', email: 'karpov@gmail.com', hashedPassword: 'qw3kjuw'})
  );
};
