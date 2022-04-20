const { Router } = require( 'express');
const { studentController } = require('../controllers/students.controllers');

const router = Router()

router.post('/', studentController.postStudent)
router.get('/', studentController.getStudent)
router.get('/group/:id', studentController.getgGroupStudent)
router.get('/payment', studentController.getPaymentStufent)
router.get('/status', studentController.getStatusStufent)
router.get('/:groupId', studentController.getOfferStudent)
router.patch('/:id', studentController.pathStudentById)
router.delete('/:id', studentController.delStudentById)


module.exports = router;