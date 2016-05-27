
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('facebookID');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('facebookID')
    console.log('facebookID column was dropped')
  })
};
