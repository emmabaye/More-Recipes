
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: DataTypes.STRING,
    address: DataTypes.STRING,
    occupation: DataTypes.STRING,
    interests: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Recipe);
        User.hasMany(models.Reviews);
        User.hasMany(models.Vote);
        User.hasMany(models.Favorite);
      },
    },
  });
  return User;
};
