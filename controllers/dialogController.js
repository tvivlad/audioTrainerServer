import { Dialog } from '../models/models.js'
import { v4 } from 'uuid'
import path from 'path'
class dialogController {
  async create(req, res) {
    console.log('Пришёл запрос на создание нового Диалога')
    const __dirname = path.resolve()
    const { name, pointCoordX, pointCoordY, topicId } = req.body
    const { dialogImage } = req.files
    console.log('dialogsImage : ', dialogImage)
    let dialogImgFileName = v4() + dialogImage.name
    // console.log('путь к файлу с иконкой', path.resolve(__dirname,'uploads', icoFileName))
    dialogImage.mv(
      path.resolve(__dirname, 'uploads', 'dialogsImages', dialogImgFileName)
    )
    const newDialog = await Dialog.create({
      name,
      dialogImage: 'uploads/dialogsImages/' + dialogImgFileName,
      topicId,
      pointCoordX,
      pointCoordY,
    })
    return res.json(newDialog)
  }

  async update(req, res) {
    console.log('Пришёл запрос на редактирование Диалога с id :', req.body.id)
    const __dirname = path.resolve()
    const { name, pointCoordX, pointCoordY, topicId, dialogId } = req.body
    const { dialogImage } = req.files
    console.log('dialogsImage : ', dialogImage)
    let dialogImgFileName = v4() + dialogImage.name
    // console.log('путь к файлу с иконкой', path.resolve(__dirname,'uploads', icoFileName))
    dialogImage.mv(
      path.resolve(__dirname, 'uploads', 'dialogsImages', dialogImgFileName)
    )
    const newDialog = await Dialog.update(
      {
        name,
        dialogImage: 'uploads/dialogsImages/' + dialogImgFileName,
        topicId,
        pointCoordX,
        pointCoordY,
      },
      { where: { id: dialogId } }
    )
    return res.json(newDialog)
  }
  async getByTopicId(req, res) {
    console.log('Запрос пришёл Dialogs с параметром id :', req.query)
    const { id } = req.query
    const dialogs = await Dialog.findAll({
      where: { topicId: req.query.id },
      raw: true,
    })

    setTimeout(() => {
      return res.json(dialogs)
    }, 1000)
  }

  async getAllDialogs(req, res) {
    console.log('Запрос пришёл все  Dialogs ')
    const dialogs = await Dialog.findAll({
      raw: true,
    })
    return res.json(dialogs)
  }

  async delete(req, res) {
    console.log('Удаление диалога c id ', req.params.id)
    const { id: dialogId } = req.params

    const dialogDeleteRes = await Dialog.destroy({
      where: {
        id: dialogId,
      },
    })
    return res.json(dialogDeleteRes)
  }
}
export default new dialogController()
