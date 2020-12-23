const Model = require('../mongoose/Model')
const jwt = require('jsonwebtoken')
const fs = require('fs');
const jwt_token = fs.readFileSync('./.env','utf8')



const login = (req, res) => {
    let { passwordMd, phone, username } = req.body
    Model.findOne({ password: passwordMd, phone }).then(ret => {
        if (ret) {
            res.send({
                error: 0,
                msg: '登录成功',
                _token:
                    jwt.sign({
                        username,
                        phone,
                    },
                        jwt_token
                    )
            })
        } else {
            res.send({
                error: 1,
                msg: '账号或密码错误'
            })
        }
    })
}

const getUser = (req,res)=>{
    let ret = req.body.info
    res.send({
        error:0,
        msg:'获取用户信息成功',
        data:{
            username:ret.username,
            phone:ret.phone.substr(0,2) + '****' + ret.phone.substr(7)
        }
    })
}

module.exports = {login,getUser}