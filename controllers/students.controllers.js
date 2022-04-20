const Student = require("../models/Students.model");

module.exports.studentController = {

  //
  postStudent: async (req, res) => {
    try {
      await Student.create(
        req.body
      )
      res.json('st dobavlen')
    } catch (error) {
      res.json(error);
    }
  },


  //
  getStudent: async (req, res) => {
    try {
      const allStudent = await Student.find()
      res.json(allStudent)
    } catch (error) {
      res.json(error);
    }
  },


  //
  pathStudentById: async (req, res) => {
    try {
      const {name, group, payment, status} = req.body
      await Student.findByIdAndUpdate(req.params.id, {
        name,
        group,
        payment,
        status
      })
      res.json('student izmenen')
    } catch (error) {
      res.json(error);
    }
  },


  //
  delStudentById: async (req, res) => {
    try {
      await Student.findByIdAndRemove(req.params.id)
      res.json('student udalen')
    } catch (error) {
      res.json(error);
    }
  },

  //
  getgGroupStudent: async (req, res) => {
    try {
      const groupSt = await Student.find({ group: req.params.id })
      res.json(groupSt)
    } catch (error) {
      res.json(error);
    }
  },

  //
  getPaymentStufent: async (req, res) => {
    try {
      const paymentpSt = await Student.find({ payment: req.body.payment })
      res.json(paymentpSt)
    } catch (error) {
      res.json(error);
    }
  },

  //
  getStatusStufent: async (req, res) => {
    try {
      const statuspSt = await Student.find({ status: req.body.status })
      res.json(statuspSt)
    } catch (reror) {
      res.json(error);
    }
  },

  //
  getOfferStudent: async (req, res) => {
    try {
      const groupSt = await Student.find({ group: req.params.groupId})
      const offerSt = await Student.find({group: req.params.groupId, status: req.body.status })
      // const offerSt = await groupSt.filter((item) => {{item.status == "get offer" } })
      
      const procent = Math.floor( (offerSt.length * 100) / groupSt.length )

      res.json(` Процент получивших оффер: ${procent}%`)
    } catch (error) {
      res.json(error);
    }
  }
} 