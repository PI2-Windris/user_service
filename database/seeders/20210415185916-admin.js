'use strict';
const faker = require('faker')
const uuid = require('uuid')
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      id: uuid.v4(),
      name: faker.name.findName(),
      email: "admin@admin.com",
      isAdmin: true,
      password: await bcrypt.hashSync("123456", 5);
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {returning: true});
  }
};
