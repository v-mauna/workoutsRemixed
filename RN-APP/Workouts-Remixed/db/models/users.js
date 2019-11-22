const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('./db')

const User = db.define('user', {
  name: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = User;