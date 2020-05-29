module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Vladimir',
          last_name: 'Saakian',
          post_id: 1,
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
