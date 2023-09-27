import Router from 'express'
import userController from '../controllers/userController.js'
import authmiddleware from '../middleware/authmiddleware.js'
const router=new Router()


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authmiddleware, userController.check)



 

export default router