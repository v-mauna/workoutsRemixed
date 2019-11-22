const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('./db')

module.exports =  CustomLibrary = db.define('custom-library',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})