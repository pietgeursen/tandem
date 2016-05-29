
exports.up = function(knex, Promise) {
  console.log('create table')
  return knex.schema.createTableIfNotExists('users', function(table) {
  table.increments('userID');
  table.string('name');
  table.string('email');
  table.string('hashedPassword');
  table.string('gender');
  table.string('aboutMe',[500]);
  table.string('photo');
  table.integer('driverLicenceDuration');
  table.integer('age');
  table.integer('rating');
})
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('users').then(function () {
   console.log('users table was dropped')
 })
};
