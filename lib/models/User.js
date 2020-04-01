const { Model, STRING } = require('sequelize');
const sequelize = require('../utils/db/sequelize');

class User extends Model {}
User.init(
  {
    firstName: {
      type: STRING,
      allowNull: false,
    },
    lastName: {
      type: STRING,
    },
  },
  {
    sequelize,
    modelName: 'user',
  },
);

module.exports = User;
