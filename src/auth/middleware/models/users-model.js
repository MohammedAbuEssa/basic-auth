"use-strict";

const User = (sequelize, DataTypes) =>
  sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passord: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = User;
