const { Router } = require( 'express');
const { noteController } = require('../controllers/notes.controllers');

const router = Router()

router.post('/', noteController.postNote )
router.get('/', noteController.getNote)
router.get('/:id', noteController.getAllNote)
router.delete('/:id', noteController.delNoteById)
router.patch('/:id', noteController.pathNoteById)

module.exports = router;