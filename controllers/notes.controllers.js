const Note = require("../models/Note.model");

module.exports.noteController = {

  //
  postNote: async (req, res) => {
    try {
      await Note.create(
        req.body
      )
      res.json("note dobavlen")
    } catch (error) {
      res.json(error);
    }
  },

  //
  getNote: async (req, res) => {
    try {
      const note = await Note.find()
      res.json(note)
    } catch (error) {
      res.json(error);
    }
  },

  //
  getAllNote: async (req, res) => {
    try {
      const allNote = await Note.find({ student: req.params.id })
      res.json(allNote)
    } catch (error) {
      res.json(error);
    }
  },

  //
  pathNoteById: async (req, res) => {
    try {
      await Note.findByIdAndUpdate(req.params.id, {
        student: req.body.student,
        text: req.body.text
      })
      res.json('note izmenen')
    } catch (error) {
      res.json(error);
    }
  },

  //
  delNoteById: async (req, res) => {
    try {
      await Note.findByIdAndRemove(req.params.id)
      res.json('note udalen')
    } catch (error) {
      res.json(error);
    }
  }
}