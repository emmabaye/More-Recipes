
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    favoriteRecipes: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: [{
              "id": 1,
              "name": "Rice and Beans",
              "creatorId": 2,
            }
        ]
      }
  }); 
    
      User.associate = (models) => {
        User.hasMany(models.Recipe);
        User.hasMany(models.Review);
        User.hasMany(models.Vote);
        User.hasMany(models.Favorite);
      };
  
  return User;
};



