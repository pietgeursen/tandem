
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('userFeedback').del(),

    // Inserts seed entries
    knex('userFeedback').insert({commentID: 1, commenterID: 2, subjectOfCommentID: 3, comment: 'Yea! Fuckin amazing!'}),
    knex('userFeedback').insert({commentID: 2, commenterID: 3, subjectOfCommentID: 2, comment: 'What a BABE!! OMG!'}),
    knex('userFeedback').insert({commentID: 3, commenterID: 4, subjectOfCommentID: 2, comment: 'Great music!! Damn!'})
  );
};
