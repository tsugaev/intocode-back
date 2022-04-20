const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  student: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Student"
  },
  text: String
})
const Note = mongoose.model('Note', noteSchema)

module.exports = Note