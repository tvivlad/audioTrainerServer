// import Sequelize from 'sequelize'
// import mysql from 'mysql2'

// const seq=new Sequelize(
//     'engaudiotrainer',
//     'root',
//     'root',
//     {
//         dialect: 'mysql',
//         host:'localhost',
//         port:'3306',
//         define:{  
//             timestamps: false // отключаем поля createdAt и прочее 
//         }
//     });

// seq
//   .authenticate()
//   .then(() => console.log('Connected.'))
//   .catch((err) => console.error('Connection error: ', err))

// const User = seq.define("user", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//     unique: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   surname: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   phone: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email:{
//     type:Sequelize.STRING,
//     allowNull:false
//   },
//   password:{
//     type:Sequelize.STRING,
//     allowNull:false
//   }
// })

// const Group = seq.define("group", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//     unique: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   groupNumber: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }   
// })

// const Topic = seq.define("topic", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//     unique: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   topicIcon: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   loadingImage: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },  
//   topicImage: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }   
// })

// const Dialog = seq.define("dialog", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//     unique: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   dialogImage: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }  
// })

// const Question = seq.define("question", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//     unique: true
//   },
//   questionName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   questionAudioUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   answer: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },  
//   answerTime: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }   
// })

// Group.hasMany(User,{ onDelete: "cascade" })
// User.hasMany(Topic,{as:'author'},{ onDelete: "cascade" })
// Topic.hasMany(Dialog,{ onDelete: "cascade" })
// Dialog.hasMany(Question,{ onDelete: "cascade" })
/* User.belongsTo(Group)
User.belongsTo(Topic)
Dialog.belongsTo(Topic)
Question.belongsTo(Dialog) */

//проверка соотвествия модели с базой данных
//{force:true} используется для принудительной перестройки таблиц в существующей БД при не совпадении, например, при отстутствии связей с его помощью их можно создать 
// seq.sync(/* {force:true} */).then(result=>{
//   console.log("test succesful");
// })

// export function main(req,res){
//     User.findAll({raw:true}).then(users=>{
//         console.log('Список пользователей', users)
//         res.render('main.ejs',{users}) 
//     })
// }

/* 
let topics={
  items:[],
  count:0
}
let dialogs={
  items:[],
  count:0
}
let questions={
  items:[],
  count:0
} */

export function getTopics(req,res){

}

export function getDialogs(req,res){

/*     setTimeout(()=>{res.send(data) 
    console.log('Отправляемый ответ', data)},1500) */
}

export function getQuestions(req,res){

/*     setTimeout(()=>{res.send(questions) 
    console.log('Отправляемый ответ', questions)},1500) */
}