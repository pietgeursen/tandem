
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({commentID: 1, listingID: 2, commenterID: 1, comment: 'How flash is your car?'}),
    knex('comments').insert({commentID: 2, listingID: 3, commenterID: 2, comment: 'How long have you had your licence sucker?'}),
    knex('comments').insert({commentID: 3, listingID: 5, commenterID: 4, comment: 'Does your car transform into a robot?'})
  );
};
