module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'postId', Sequelize.STRING, {
      after: 'columnB', // after option is only supported by MySQL
    }),
  down: (queryInterface) => queryInterface.dropColumn('comments'),
};
