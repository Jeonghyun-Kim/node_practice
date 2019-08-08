module.exports = (sequelize, DataTypes) => (
  wequelize.define('hashtag', {
    title: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  })
);
