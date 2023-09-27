import express from 'express'
import path from 'path'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import { router } from './routes/index.js'
import ErrorHandler from './middleware/ErrorHandling.js'
import { seq } from './db.js'
import 'dotenv/config'

const __dirname = path.resolve() // путь к корневой папке
const app = express()

// app.use(express.static(path.resolve(__dirname, 'client'))) // указываем путь к статическим файлам
app.use('/uploads', express.static('uploads'))
// app.set('view engine', 'ejs')
// app.set('views',path.resolve(__dirname,'views'))
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.urlencoded({ extended: true }))

// обработка ошибок
app.use(ErrorHandler)

// app.get('/', controllers.main)
// app.get('/getTopics', controllers.getTopics)
// app.get('/getDialogs',controllers.getDialogs)
// app.get('/getQuestions',controllers.getQuestions)

seq
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch((err) => console.error('Connection error: ', err))

seq.sync({ alter: true }).then((result) => {
  console.log('test succesful')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server has been startet on port ${PORT} ...`)
})
