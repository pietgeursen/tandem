
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('listings').del(),

    // Inserts seed entries
    knex('listings').insert({listingID: 1, userID: 2, origin: 'Taumarunui', destination: 'Whanganui', description: 'Ill be going by horse & carriage at the crack of dawn'}),
    knex('listings').insert({listingID: 2, userID: 3, origin: 'Cromwell', destination: 'Nightcaps', description: 'I wont drive over 30km/h under any circumstances!'}),
    knex('listings').insert({listingID: 3, userID: 1, origin: 'Kaeo', destination: 'Te Kuiti', description: 'Coming down 10am, stopping in the big smoke for breakfast'})
  );
};
