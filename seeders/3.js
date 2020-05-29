module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'comments',
      [
        {
          description: 'Description of comment',
          user_id: 1,
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('comments', null, {}),
};
