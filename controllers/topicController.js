import { Topic } from '../models/models.js'
import { v4 } from 'uuid'
import path from 'path'
class topicController {
  async create(req, res) {
    console.log('Пришёл запрос на создание нового топика', req.body)
    const __dirname = path.resolve()
    const { name, description, userId } = req.body
    const { topicIcon, loadingImage, topicImage, topicAudio } = req.files
    // console.log('name : ', name)
    // console.log('description : ', description)
    // console.log("прикрепленные файлы ", req.files)
    // console.log('topicIco : ',topicIcon)
    // console.log('loadingImg : ',loadingImage)
    // console.log('topicImg : ',topicImage)
    let icoFileName = v4() + topicIcon.name
    let loadingImgFileName = v4() + loadingImage.name
    let topicImgFileName = v4() + topicImage.name
    let topicAudioFileName = v4() + topicAudio.name
    console.log(
      'путь к файлу с иконкой',
      path.resolve(__dirname, 'uploads', icoFileName)
    )
    topicIcon.mv(path.resolve(__dirname, 'uploads', 'topicIcons', icoFileName))
    loadingImage.mv(
      path.resolve(__dirname, 'uploads', 'loadingImages', loadingImgFileName)
    )
    topicImage.mv(
      path.resolve(__dirname, 'uploads', 'topicImages', topicImgFileName)
    )

    topicImage.mv(
      path.resolve(__dirname, 'uploads', 'topicAudios', topicAudioFileName)
    )

    // console.log('Создаваемый объект :', {
    //     name,
    //     topicIcon:'uploads/topicIcons/'+icoFileName,
    //     loadingImage:'uploads/loadingImages/'+loadingImgFileName,
    //     topicImage:'uploads/topicImages/'+topicImgFilename,
    //     userId,
    //     description
    // })
    const newTopic = await Topic.create({
      name,
      topicIcon: 'uploads/topicIcons/' + icoFileName,
      loadingImage: 'uploads/loadingImages/' + loadingImgFileName,
      topicImage: 'uploads/topicImages/' + topicImgFileName,
      topicAudio: 'uploads/topicAudios/' + topicAudioFileName,
      userId,
      description,
    })
    return res.json(newTopic)
  }
  async getAll(req, res) {
    console.log('Запрос пришёл Topics')
    const topics = await Topic.findAll({ raw: true })
    setTimeout(() => {
      return res.json(topics)
    }, 500)
  }
  async getOne(req, res) {
    const topic = await Topic.findAll({
      where: { id: req.params.id },
      raw: true,
    })
    return res.json(topic)
  }
  async delete(req, res) {
    const { id: topicId } = req.params
    console.log('Пришел запрос на удаление  топика  c Id', topicId)
    const topicDeleteRes = await Topic.destroy({
      where: {
        id: topicId,
      },
    })
    return res.json(topicDeleteRes)
  }

  async update(req, res) {
    // const { id: topicId } = req.params
    // console.log('пришел запрос на изменение топика!!! по маршруту :', req.path)
    console.log('пришел запрос на изменение топика!!! :', req.body)
    const __dirname = path.resolve()
    const { name, description, userId, topicId } = req.body
    const { topicIcon, loadingImage, topicImage, topicAudio } = req.files
    // console.log('name : ', name)
    // console.log('description : ', description)
    // console.log("прикрепленные файлы ", req.files)
    // console.log('topicIco : ',topicIcon)
    // console.log('loadingImg : ',loadingImage)
    // console.log('topicImg : ',topicImage)
    let icoFileName = v4() + topicIcon.name
    let loadingImgFileName = v4() + loadingImage.name
    let topicImgFileName = v4() + topicImage.name
    let topicAudioFileName = v4() + topicAudio.name
    console.log(
      'путь к файлу с иконкой',
      path.resolve(__dirname, 'uploads', icoFileName)
    )
    topicIcon.mv(path.resolve(__dirname, 'uploads', 'topicIcons', icoFileName))
    loadingImage.mv(
      path.resolve(__dirname, 'uploads', 'loadingImages', loadingImgFileName)
    )
    topicImage.mv(
      path.resolve(__dirname, 'uploads', 'topicImages', topicImgFileName)
    )

    topicImage.mv(
      path.resolve(__dirname, 'uploads', 'topicAudios', topicAudioFileName)
    )
    const newTopic = await Topic.update(
      {
        name,
        topicIcon: 'uploads/topicIcons/' + icoFileName,
        loadingImage: 'uploads/loadingImages/' + loadingImgFileName,
        topicImage: 'uploads/topicImages/' + topicImgFileName,
        topicAudio: 'uploads/topicAudios/' + topicAudioFileName,
        userId,
        description,
      },
      { where: { id: topicId } }
    )
    // console.log(' новый объект : ', newTopic)
    // console.log('Создаваемый объект :', {
    //     name,
    //     topicIcon:'uploads/topicIcons/'+icoFileName,
    //     loadingImage:'uploads/loadingImages/'+loadingImgFileName,
    //     topicImage:'uploads/topicImages/'+topicImgFilename,
    //     userId,
    //     description
    // })
    // const newTopic = await Topic.create()
    return res.json(newTopic)
  }
}
export default new topicController()
