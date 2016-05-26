
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({userID: 1, name: 'Jess', email: 'jess@gmail.com', hashedPassword: 'qwieu838'}),
    knex('users').insert({userID: 2, name: 'Rahmona', email: 'ra@gmail.com', hashedPassword: 'ewfkjuw'})
  );
};
