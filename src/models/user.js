const bcrypt = require("bcrypt");
const uuid = require("uuid");

const users = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => uuid.v4(),
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 20],
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
    }
  );
  Users.prototype.generatePassowrdHash = async () => {
    bcrypt.hash(this.password, 5);
  };
  Users.beforeCreate(async (user) => {
    const hash = await bcrypt.hashSync(user.password, 5);
    /* eslint-disable-next-line no-param-reassign */
    user.password = hash;
  });

  return Users;
};

module.exports = users;
