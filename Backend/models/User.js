const { sequelize } = require('../db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('User', {
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  })

module.exports = { User };