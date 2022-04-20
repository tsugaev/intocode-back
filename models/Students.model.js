const mongoose = require('mongoose')

const studentShema = mongoose.Schema({
  name: String,
  group: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Group"
  },
  payment: String,
  status: String
})

const Student = mongoose.model('Student', studentShema)

module.exports = Student