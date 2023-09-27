import Router from 'express'
const router = new Router()

import userRouter from './userRouter.js'
import topicRouter from './topicRouter.js'
import dialogRouter from './dialogRouter.js'
import questionRouter from './questionRouter.js'
import journalRouter from './journalRouter.js'

router.use('/user', userRouter)
router.use('/topic', topicRouter)
router.use('/dialog', dialogRouter)
router.use('/question', questionRouter)
router.use('/journal', journalRouter)

export { router }
