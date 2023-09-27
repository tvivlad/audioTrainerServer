import Router from 'express'
import dialogController from '../controllers/dialogController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'
const router = new Router()

router.post('/', checkRole('admin'), dialogController.create)
router.post('/update', dialogController.update)
router.get('/', dialogController.getByTopicId)
router.get('/alldialogs', dialogController.getAllDialogs)
router.get('/:id')
router.delete('/:id', dialogController.delete)

export default router
