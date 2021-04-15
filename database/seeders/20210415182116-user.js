'use strict';
const faker = require('faker')
const uuid = require('uuid')
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hashSync("123456", 5);
    let data = []
    for(let i =0; i< 10; i++) {
      data.push({      
        id: uuid.v4(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        isAdmin: false,
        password: password,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Users', data, {returning: true});
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
