// const { Model } = require('sequelize');
// const sequelize = require('../utils/db/sequelize');
// const Post = require('./Post');
// const Comment = require('./Comment');

module.exports = (sequelize, { STRING }) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: STRING,
        allowNull: false,
        validate: {
          customValidator(value) {
            if (value === null && this.age !== 10) {
              throw new Error("name can't be null unless age is 10");
            }
          },
        },
      },
      lastName: {
        type: STRING,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: 'users',
    },
  );
  User.associate = ({ Post, Comment }) => {
    User.hasMany(Comment);
    User.belongsTo(Post);
  };
  return User;
};
