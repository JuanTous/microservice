const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('technical_test', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = {sequelize}