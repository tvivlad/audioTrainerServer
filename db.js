import {Sequelize} from 'sequelize'
import mysql from 'mysql2'

const  seq=new Sequelize(
    'engaudiotrainer',
    'root',
    'root',
    {
        dialect: 'mysql',
        host:'localhost',
        port:'3306',
        define:{  
            timestamps: false // отключаем поля createdAt и прочее 
        }
    });

export {seq} 
