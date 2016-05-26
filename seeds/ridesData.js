
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('rides').del(),

    // Inserts seed entries
    knex('rides').insert({rideID: 1, listingID: 1, driver: 1, passenger: 2, accepted: true}),
    knex('rides').insert({rideID: 2, listingID: 2, driver: 2, passenger: 1, accepted: false}),
    knex('rides').insert({rideID: 3, listingID: 3, driver: 1, passenger: 2, accepted: false})
  );
};
