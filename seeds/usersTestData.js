
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({userID: 1, name: 'Buckey', email: 'jess@gmail.com', hashedPassword: 'qwieu838'}),
    knex('users').insert({userID: 2, name: 'Toni', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
    knex('users').insert({userID: 3, name: 'Natasha', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
    knex('users').insert({userID: 4, name: 'Wanda', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
    knex('users').insert({userID: 5, name: 'Clint', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
    knex('users').insert({userID: 3, name: 'Challa', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
    knex('users').insert({userID: 4, name: 'Tina', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
    knex('users').insert({userID: 5, name: 'Karpov', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
  );
};
