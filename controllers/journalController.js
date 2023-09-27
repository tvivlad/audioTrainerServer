import { Journal } from '../models/models.js'

class journalController {
  async createCheckPoint(req, res) {
    const { userId, topicId, dialogId } = req.body
    const newPoint = await Journal.create({
      completed: 1,
      userId,
      topicId,
      dialogId,
    })
    return res.json(newPoint)
  }

  async getPointsByUserAndTopicId(req, res) {
    console.log('getPointsByUserAndTopicId пришел запрос по журналу', req.query)
    const { _userId, _topicId } = req.query
    console.log('параметры запроса к журналу :', req.query)
    const points = await Journal.findAll({
      where: { userId: _userId, topicId: _topicId },
      raw: true,
    })
    console.log('массив полученный из базы :', points)
    return res.json(points)
  }

  async getPointsByUserId(req, res) {
    console.log('getPointsByUserId пришел запрос по журналу', req.query)
    const { _userId } = req.query
    const points = await Journal.findAll({
      where: { userId: _userId },
      raw: true,
    })
    return res.json(points)
  }
}

export default new journalController()
