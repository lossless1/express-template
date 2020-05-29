module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'comments',
      [
        {
          description: 'Description of comment 1',
          user_id: 1,
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('comments', null, {}),
};
