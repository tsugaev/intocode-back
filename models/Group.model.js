const mongoose = require('mongoose')

const groupShema = mongoose.Schema({
  potok: Number,
  condition: String
})
const Group = mongoose.model('Group', groupShema)

module.exports = Group