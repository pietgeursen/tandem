
exports.up = function(knex, Promise) {
  console.log('user feedback table was created!!')
  return knex.schema.createTableIfNotExists('userFeedback', function(table) {
  table.increments('commentID');
  table.integer('commenterID');
  table.integer('subjectOfCommentID');
  table.string('comment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userFeedback').then(function () {
    console.log('user feedback table was dropped')
  })
};
