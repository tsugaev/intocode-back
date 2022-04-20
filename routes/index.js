const { Router } = require( 'express')
const router = Router()

router.use('/note', require('./notes.routes'))
router.use('/group', require('./groups.routes'))
router.use('/student', require('./students.routes'))


module.exports = router;