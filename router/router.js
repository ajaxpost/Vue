
const express = require('express')
const router = express.Router()
const passwordMd = require('../config/passwordMd')
const getUser = require('../config/getUser')
const info = require('../kongzhitai/kongzhitai')

router.post('/login', passwordMd, info.login)



//获取用户信息
router.post('/getUser',getUser,info.getUser)



module.exports = router