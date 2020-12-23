const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwt_token = fs.readFileSync('./.env', 'utf8')
const Model = require('../mongoose/Model')


//获取用户信息中间件
const getUser = (req,res,next)=>{
    // console.log(req.headers)
    let token = req.headers.authorization === undefined ?  [0,1] : req.headers.authorization.split(' ')
    let str = token[0]
    // console.log(str)
    if( str !== 1 ){
        try{
            let {phone} = jwt.verify(str,jwt_token)
            Model.findOne({phone}).then(ret=>{
                req.body.info = ret
                next()
            })
        }catch(e){
            res.send({
                error:1,
                msg:'获取用户信息失败'
            })
        }
    }else{
        res.send({
            error:99999,
            msg:'没有token'
        })
    }
    
}

module.exports = getUser;