module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      // user_id: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: 'users', // name of Target model
      //     key: 'id', // key in Target model that we're referencing
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      // },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('posts'),
};
