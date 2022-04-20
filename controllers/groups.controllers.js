const Group = require("../models/Group.model")

module.exports.groupController = {

  //
  postGroup: async (req, res) => {
    try {
      await Group.create(
        req.body
      )
      res.json('group dobavlen')
    } catch (error) {
      res.json(error);
    }
  },

  //
  getGroup: async (req, res) => {
    try {
      const group = await Group.find()
      res.json(group)
    } catch (error) {
      res.json(error);
    }
  },

  //
  pathGroupById: async (req, res) => {
    try {
      await Group.findByIdAndUpdate(req.params.id, {
        potok: req.body.potok,
        condition: req.body.condition
      })
      res.json('group izmenen')
    } catch (error) {
      res.json(error);
    }
  },

  //
  delGroupById: async (req, res) => {
    try {
      await Group.findByIdAndRemove(req.params.id)
      res.json('Group udaen')
    } catch (error) {
      res.json(error);
    }
  },

  
  //
  getGroupByIdIsCond: async (req, res) => {
    try {
      const condition = await Group.find({ condition: req.body.condition })
      res.json(condition)
    } catch (error) {
      res.json(error);
    }
  },

}