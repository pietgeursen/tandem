
exports.up = function(knex, Promise) {
  return knex.schema.table('listings', function(table) {
    table.date('departureDate')
    table.time('departureTime')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('listings', function(table) {
    table.dropColumn('departureDate', 'departureTime')
    console.log('date and time columns dropped')
  })
};
