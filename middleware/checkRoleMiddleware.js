import jwt from 'jsonwebtoken'

export default function (role){
    return function (req,res,next){
        if (req.method==='OPTIONS'){
            next()    
        }
        try{
            const token = req.headers.authorization.split(' ')[1] // получаем токен из строки  Bearer asdfaseqwrasdfasd...
            if (!token){
                res.status(401).json({message:"Не авторизован"})
            }
            const decoded=jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role!==role){
                res.status(403).json({message:"Нет доступа"})
            }
            req.user=decoded// добавляем в req данные о пользователе, чтобы он был доступен во всех функциях
            next()
        }catch (e){
            res.status(401).json({message:"Не авторизован"})
        }
    }
}

    