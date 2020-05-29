module.exports = (sequelize, { STRING }) => {
  const Comment = sequelize.define(
    'Comment',
    {
      description: {
        type: STRING,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: 'comments',
    },
  );

  Comment.associate = ({}) => {
    // Comment.hasMany(User);
    // Comment.hasMany(User);
  };

  return Comment;
};
