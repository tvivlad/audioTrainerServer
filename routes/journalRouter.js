import Router from 'express'
import journalController from '../controllers/journalController.js'
const router = new Router()
router.post('/', journalController.createCheckPoint)
router.get('/', journalController.getPointsByUserAndTopicId)
router.get('/allPoints', journalController.getPointsByUserId)
//router.get('/:id')

export default router
