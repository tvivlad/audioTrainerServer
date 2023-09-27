import Router from 'express'
import questionController from '../controllers/questionController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'
const router = new Router()

router.post('/', checkRole('admin'), questionController.create)
router.post('/update', questionController.create)
router.get('/', questionController.getQuestionsById)
router.delete('/:id', questionController.delete)
router.get('/:id')

export default router
