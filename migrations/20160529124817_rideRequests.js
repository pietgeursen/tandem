
exports.up = function(knex, Promise) {
  console.log('rideRequests table created!')
  return knex.schema.createTableIfNotExists('rideRequests', function(table) {
    table.integer('listingID');
    table.integer('userID');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rideRequests').then(function () {
    console.log('listings table was dropped')
  })
};
