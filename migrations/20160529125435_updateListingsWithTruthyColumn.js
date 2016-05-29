
exports.up = function(knex, Promise) {
  return knex.schema.table('listings', function(table) {
    table.boolean('rideRequested')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('listings', function(table) {
    table.dropColumn('rideRequested')
    console.log('ride request column dropped')
  })
};
