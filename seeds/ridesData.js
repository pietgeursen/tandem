
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('rides').del(),

    // Inserts seed entries
    knex('rides').insert({rideID: 1, listingID: 43, driver: 46, passenger: 49, accepted: true}),
    knex('rides').insert({rideID: 2, listingID: 44, driver: 47, passenger: 50, accepted: false}),
    knex('rides').insert({rideID: 3, listingID: 45, driver: 48, passenger: 51, accepted: false})
  );
};
