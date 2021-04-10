const Sequelize = require('sequelize');

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op,
    logging: false,
    quoteIdentifiers: false,
    keepDefaultTimezone: true,
    define: {
      timestamps: true
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}