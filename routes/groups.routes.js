const { Router } = require( 'express');
const { groupController } = require('../controllers/groups.controllers');

const router = Router()

router.post('/', groupController.postGroup)
router.get('/', groupController.getGroup)
router.get('/cond', groupController.getGroupByIdIsCond)
router.patch('/:id', groupController.pathGroupById)
router.delete('/:id', groupController.delGroupById)


module.exports = router;