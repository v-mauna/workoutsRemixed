const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('./db')

const Exercises = db.define('exercises',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reps: {
        type: Sequelize.INTEGER,
        validate: {
            min: 5
        }

    },
    rounds: {
        type: Sequelize.INTEGER,
        validate: {
            min: 3
        }
    },
    program: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})

module.exports = Exercises