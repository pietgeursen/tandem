
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('rides').del(),

    // Inserts seed entries
    knex('rides').insert({rideID: 1, listingID: 11, driver: 22, passenger: 24, accepted: true}),
    knex('rides').insert({rideID: 2, listingID: 12, driver: 23, passenger: 16, accepted: false}),
    knex('rides').insert({rideID: 3, listingID: 13, driver: 14, passenger: 27, accepted: false})
  );
};
