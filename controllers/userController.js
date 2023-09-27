import ApiError from '../error.js'
import { User } from '../models/models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
}
class userController {
  async registration(req, res, next) {
    const { name, surname, phone, email, password } = req.body
    console.log('запрос на регистрацию пользователя', email)
    if (!email || !password) {
      return next(ApiError.badRequest('некорректный email или пароль'))
    }
    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email существует!'))
    }
    const hashPassword = await bcrypt.hash(password, 7)
    const user = await User.create({
      name,
      surname,
      phone,
      email,
      password: hashPassword,
      role: 'user',
    })
    console.log(';saj;fakld;sfas', process.env.SECRET_KEY)
    const token = generateJWT(user.id, user.email, user.role)
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    console.log('body :', req.body)
    console.log('email :', email)
    console.log('pass :', password)
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.badRequest('Пользователь не найден'))
    }
    let passwordCompare = bcrypt.compareSync(password, user.password)
    if (!passwordCompare) {
      return next(ApiError.badRequest('Неверный пароль'))
    }
    const token = generateJWT(user.id, user.email, user.role)
    console.log('сгенерированный токен ', token)
    return res.json({ token })
  }
  async check(req, res, next) {
    // const {id} = req.query
    // if (!id) {
    //    return next(ApiError.badRequest('Не указан id'))
    // }
    // res.json(id)
    //res.json({message:'all correct!'})
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }
}
export default new userController()
