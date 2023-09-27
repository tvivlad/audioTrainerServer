import { seq } from '../db.js'
import { Sequelize } from 'sequelize'

const User = seq.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

const Group = seq.define('group', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  groupNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

const Topic = seq.define('topic', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topicIcon: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  loadingImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topicImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topicAudio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

const Dialog = seq.define('dialog', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dialogImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pointCoordX: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  pointCoordY: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

const Question = seq.define('question', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  questionName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  questionAudioUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answerTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

const Journal = seq.define('jounal', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
})

Group.hasMany(User, { onDelete: 'cascade' })
User.hasMany(Topic, { as: 'author' }, { onDelete: 'cascade' })
Topic.hasMany(Dialog, { onDelete: 'cascade' })
Dialog.hasMany(Question, { onDelete: 'cascade' })

User.hasMany(Journal, { onDelete: 'cascade' })
Topic.hasMany(Journal, { onDelete: 'cascade' })
Dialog.hasMany(Journal, { onDelete: 'cascade' })

export { User, Topic, Dialog, Question, Journal }
