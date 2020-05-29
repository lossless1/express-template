module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'posts',
      [
        {
          name: 'Post of user',
          description: 'Description of user',
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('posts', null, {}),
};
