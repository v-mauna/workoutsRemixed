const Users = require('./users.js')
const Exercises = require('./exercises')
const Programs = require('./programs')
const CustomLibrary = require('./customLibrary')

Users.hasMany(Programs)
Users.hasMany(CustomLibrary)

Programs.hasMany(Users)
Programs.hasMany(Exercises)

CustomLibrary.belongsTo(Users)
CustomLibrary.hasMany(Users)
CustomLibrary.hasMany(Exercises)

module.exports = {Users, Exercises, Programs, CustomLibrary}