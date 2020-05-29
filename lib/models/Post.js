module.exports = (sequelize, { STRING }) => {
  const Post = sequelize.define(
    'Post',
    {
      name: {
        type: STRING,
        allowNull: false,
      },
      description: {
        type: STRING,
      },
    },
    {
      sequelize,
      tableName: 'posts',
      underscored: true,
    },
  );
  Post.associate = ({ User }) => {
    Post.hasOne(User);
  };
  return Post;
};
