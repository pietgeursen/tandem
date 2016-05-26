
exports.up = function(knex, Promise) {
 console.log('create table')
  return knex.schema.createTableIfNotExists('rides', function(table) {
  table.increments('rideID');
  table.integer('listingID');
  table.integer('driver');
  table.integer('passenger');
  table.boolean('accepted');

})
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('rides').then(function () {
   console.log('users table was dropped')
 })
};
