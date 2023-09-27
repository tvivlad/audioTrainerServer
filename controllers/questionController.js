import { Question } from '../models/models.js'
import { v4 } from 'uuid'
import path from 'path'
class qeustionController {
  async create(req, res) {
    console.log('Пришёл запрос на создание нового Вопроса')
    const __dirname = path.resolve()
    const { questionName, answer, answerTime, dialogId } = req.body
    const { questionAudio } = req.files
    console.log('questionAudio : ', questionAudio)
    let questionAudioFileName = v4() + questionAudio.name
    // console.log('путь к файлу с иконкой', path.resolve(__dirname,'uploads', icoFileName))
    questionAudio.mv(
      path.resolve(__dirname, 'uploads', 'dialogsAudio', questionAudioFileName)
    )
    const newQuestion = await Question.create({
      questionName,
      questionAudioUrl: 'uploads/dialogsAudio/' + questionAudioFileName,
      answer,
      answerTime,
      dialogId,
    })

    return res.json(newQuestion)
  }

  async update(req, res) {
    console.log(
      'Пришёл запрос на редактирование Вопроса с id :',
      req.body.questionId
    )
    const __dirname = path.resolve()
    const { questionName, answer, answerTime, dialogId, questionId } = req.body
    const { questionAudio } = req.files
    console.log('questionAudio : ', questionAudio)
    let questionAudioFileName = v4() + questionAudio.name
    // console.log('путь к файлу с иконкой', path.resolve(__dirname,'uploads', icoFileName))
    questionAudio.mv(
      path.resolve(__dirname, 'uploads', 'dialogsAudio', questionAudioFileName)
    )
    const newQuestion = await Question.update(
      {
        questionName,
        questionAudioUrl: 'uploads/dialogsAudio/' + questionAudioFileName,
        answer,
        answerTime,
        dialogId,
      },
      { where: { id: questionId } }
    )

    return res.json(newQuestion)
  }
  async getQuestionsById(req, res) {
    console.log('Запрос вопросов ', req.query.id)
    const { id } = req.query
    const questions = await Question.findAll({
      where: { dialogId: req.query.id },
      raw: true,
    })
    setTimeout(() => {
      res.json(questions)
    }, 2000)
  }
  async delete(req, res) {
    console.log('Удаление вопроса c id ', req.params.id)
    const { id: questionId } = req.params

    const questionDeleteRes = await Question.destroy({
      where: {
        id: questionId,
      },
    })
    return res.json(questionDeleteRes)
  }
}

export default new qeustionController()
