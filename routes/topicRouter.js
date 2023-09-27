import Router from 'express'
import topicController from '../controllers/topicController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'
const router = new Router()

router.post('/', checkRole('admin'), topicController.create)
router.get('/', topicController.getAll)
router.get('/:id', topicController.getOne)
router.delete('/:id', checkRole('admin'), topicController.delete)
router.post('/update', topicController.update)

export default router
