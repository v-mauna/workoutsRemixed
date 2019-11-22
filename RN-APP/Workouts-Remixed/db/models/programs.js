const db = require('./db')
const Sequelize = require('sequelize')

const Programs = db.define('programs',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Programs