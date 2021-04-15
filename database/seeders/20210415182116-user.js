'use strict';
const faker = require('faker')
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i =0; i< 10; i++) {
      await queryInterface.bulkInsert('Users', [{
        id: uuid.v4(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        isAdmin: false,
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {returning: true});
    }
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
