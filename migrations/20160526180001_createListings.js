s
exports.up = function(knex, Promise) {
  console.log('listings table was created!!')
  return knex.schema.createTableIfNotExists('listings', function(table) {
  table.increments('listingID');
  table.integer('userID');
  table.string('origin');
  table.string('destination');
  table.dateTime('dateTime');
  table.string('description', [500])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings').then(function () {
    console.log('listings table was dropped')
  })
};
